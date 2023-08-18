import Hotel from '../models/Hotel.js';

// Private Endpoints - Controllers (Auth)

// Profile

// Read
const getProfile = (req, res) => {
	const { hotel } = req;
	res.json(hotel);
};

// Update
const setProfile = async (req, res) => {
	const hotel = await Hotel.findById(req.hotel._id);

	if (!hotel) {
		return res.status(404).json({ msg: 'Profile Not Found' });
	}

	const { email, phone } = req.body;

	if (hotel.email !== email) {
		const emailExists = await Hotel.findOne({ email });
		if (emailExists) {
			return res.status(400).json({ msg: 'Email Already Registered' });
		}
	}

	if (hotel.phone !== phone) {
		const phoneExists = await Hotel.findOne({ phone });

		if (phoneExists) {
			return res.status(400).json({ msg: 'Phone Already Registered' });
		}
	}

	try {
		// Hotel
		hotel.name = req.body.name || hotel.name;
		hotel.email = req.body.email || hotel.email;

		// Contact
		hotel.phone = req.body.phone || hotel.phone;
		hotel.web = req.body.web || hotel.web;

		await hotel.save();

		res.json({ msg: 'Successfully Update' });
	} catch (error) {
		console.log(`|---> MDB_SET_PROFILE_ERROR: ${error.message} <---|`);
	}
};

const setPassword = async (req, res) => {
	const hotel = await Hotel.findById(req.hotel._id);
	const { password, newPwd } = req.body;

	if (!hotel) {
		return res.status(404).json({ msg: 'Profile Not Found' });
	}

	if (await hotel.verifyPassword(password)) {
		hotel.password = newPwd;

		await hotel.save();

		return res.json({ msg: 'Password Changed Successfully' });
	} else {
		return res.status(403).json({ msg: 'Incorrect Password' });
	}
};

export { getProfile, setProfile, setPassword };
