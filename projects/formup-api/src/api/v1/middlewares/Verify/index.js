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
}
