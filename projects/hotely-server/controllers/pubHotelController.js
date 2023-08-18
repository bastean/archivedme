import Hotel from '../models/Hotel.js';

import genJWT from '../helpers/genJWT.js';
import genConfirmToken from '../helpers/genConfirmToken.js';

import sendEmail from '../helpers/sendEmail.js';

// Public Endpoints - Controllers (noAuth)

// Register
const register = async (req, res) => {
	const { name, email, phone } = req.body;

	const emailExists = await Hotel.findOne({ email });

	if (emailExists) {
		return res.status(400).json({ msg: 'Email Already Registered' });
	}

	const phoneExists = await Hotel.findOne({ phone });

	if (phoneExists) {
		return res.status(400).json({ msg: 'Phone Already Registered' });
	}

	try {
		const hotel = new Hotel(req.body);
		const hotelRegister = await hotel.save();

		sendEmail(
			{
				name,
				email,
				emailToken: hotelRegister.emailToken
			},
			'register'
		);

		res.json({ msg: 'Successfully created. Please check your inbox' });
	} catch (error) {
		console.log(`|---> MDB_REGISTER_ERROR: ${error.message} <---|`);
	}
};

const emailConfirm = async (req, res) => {
	const { emailToken } = req.params;

	const tokenExists = await Hotel.findOne({ emailToken });

	if (!tokenExists) {
		return res.status(404).json({ msg: 'Token Not Found' });
	}

	try {
		tokenExists.emailToken = null;
		tokenExists.emailConfirmed = true;
		await tokenExists.save();

		res.json({ msg: 'Email Confirmed Successfully' });
	} catch (error) {
		console.log(`|---> MDB_EMAIL_CONFIRM_ERROR: ${error.message} <---|`);
	}
};

// Login
const login = async (req, res) => {
	const { email, password } = req.body;

	const hotel = await Hotel.findOne({ email });

	if (!hotel) {
		return res.status(404).json({ msg: 'Email Not Registered' });
	}

	if (!hotel.emailConfirmed) {
		return res.status(403).json({ msg: 'Email Not Confirmed. Please check your inbox' });
	}

	if (await hotel.verifyPassword(password)) {
		res.json({
			jwtoken: genJWT(hotel._id)
		});
	} else {
		return res.status(403).json({ msg: 'Incorrect Password' });
	}
};

// Password Reset
const forgotPassword = async (req, res) => {
	const { email } = req.body;

	const hotel = await Hotel.findOne({ email });

	if (!hotel) {
		return res.status(404).json({ msg: 'Email Not Registered' });
	}

	if (!hotel.emailConfirmed) {
		return res.status(403).json({ msg: 'Email Not Confirmed. Please check your inbox' });
	}

	if (hotel.emailConfirmed && hotel.emailToken) {
		return res.status(403).json({ msg: 'Already sent. Please check your inbox' });
	}

	try {
		hotel.emailToken = genConfirmToken();
		await hotel.save();

		sendEmail(
			{
				email,
				name: hotel.name,
				emailToken: hotel.emailToken
			},
			'resetPwd'
		);

		res.json({
			msg: 'Link sent. Please check your inbox'
		});
	} catch (error) {
		console.log(`|---> MDB_FORGOT_PASSWORD_ERROR: ${error.message} <---|`);
	}
};

const passwordReset = async (req, res) => {
	const { emailToken } = req.params;
	const { password } = req.body;

	const tokenExists = await Hotel.findOne({ emailToken });

	if (!tokenExists) {
		return res.status(404).json({ msg: 'Token Not Found' });
	}

	try {
		tokenExists.emailToken = null;
		tokenExists.password = password;

		await tokenExists.save();

		res.json({ msg: 'Password Changed Successfully' });
	} catch (error) {
		console.log(`|---> MDB_PASSWORD_RESET_ERROR: ${error.message} <---|`);
	}
};

export { register, emailConfirm, login, forgotPassword, passwordReset };
