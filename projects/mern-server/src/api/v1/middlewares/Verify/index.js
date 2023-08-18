import jwt from 'jsonwebtoken';

import { UserModel } from '#models';

import { Format } from '#utils';

import { Data } from '#validations';

export class Verify {
	static async data(req, res, next) {
		if (req.method.toUpperCase() === 'GET') return next();

		const invalidDataMsg = Data.isInvalid(req.body);

		if (invalidDataMsg) return res.status(400).json({ msg: invalidDataMsg });

		Format.data(req.body);

		return next();
	}

	static async auth(req, res, next) {
		let jwtoken;

		if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
			try {
				jwtoken = req.headers.authorization.split(' ')[1];

				const jwtDecoded = await jwt.verify(
					jwtoken,
					process.env.JWT_PRIVATE_KEY,
					(error, decoded) => {
						if (error) {
							return Promise.reject({ code: 403, msg: 'Invalid Token' });
						} else {
							return Promise.resolve(decoded);
						}
					}
				);

				req.user = await UserModel.findById(jwtDecoded.userId);

				Verify.data(req, res, next);
			} catch (error) {
				return res.status(error.code).json({ msg: error.msg });
			}
		}

		if (!jwtoken) {
			res.status(404).json({ msg: 'Bearer Token Not Found' });
		}
	}
}
