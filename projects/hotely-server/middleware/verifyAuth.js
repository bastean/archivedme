import jwt from 'jsonwebtoken';
import Hotel from '../models/Hotel.js';

const verifyAuth = async (req, res, next) => {
	let jwtoken;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			jwtoken = req.headers.authorization.split(' ')[1];

			const jwtDecoded = jwt.verify(jwtoken, process.env.JWT_PRIVATE_KEY);

			const hotel = await Hotel.findById(jwtDecoded.hotelID).select(
				'-password -emailToken -emailConfirmed'
			);

			if (!hotel) {
				return res.status(404).json({ msg: 'Profile Not Found' });
			}

			req.hotel = hotel;

			return next();
		} catch (e) {
			const error = new Error('Token Not Valid');
			return res.status(403).json({ msg: error.message });
		}
	}

	if (!jwtoken) {
		const error = new Error('Token Not Found');
		return res.status(404).json({ msg: error.message });
	}
};

export default verifyAuth;
