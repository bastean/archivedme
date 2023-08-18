import { Mail } from '#utils';

import { Recaptcha } from '#validations';

export class Public {
	static async submit(req, res) {
		try {
			await Recaptcha.isInvalid(req.body.recaptchaToken);

			await Mail.send(req.body);

			res.json({ msg: 'Successfully Sent' });
		} catch (error) {
			res.status(error.code).json({ msg: error.msg });
		}
	}
}
