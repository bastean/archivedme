import jwt from 'jsonwebtoken';

const genJWT = (hotelID) => {
	return jwt.sign({ hotelID }, process.env.JWT_PRIVATE_KEY, {
		expiresIn: '30d'
	});
};

export default genJWT;
