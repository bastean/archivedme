import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export class Generate {
	static emailToken() {
		return crypto.randomUUID();
	}

	static jwtoken(userId) {
		return jwt.sign({ userId }, process.env.JWT_PRIVATE_KEY, {
			expiresIn: '30d'
		});
	}
}
