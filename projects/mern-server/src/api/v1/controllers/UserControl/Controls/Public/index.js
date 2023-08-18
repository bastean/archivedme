import { UserModel } from '#models';

import { Generate, Mail } from '#utils';

import { Recaptcha } from '#validations';

export class Public {
	static async register(req, res) {
		const { name, email, recaptchaToken } = req.body;

		try {
			await Recaptcha.isInvalid(recaptchaToken);

			req.body['emailToken'] = Generate.emailToken();

			await new UserModel(req.body).save();

			await Mail.send({
				name,
				email,
				emailToken: req.body.emailToken
			}).confirm();

			res.json({ msg: 'Successfully created. Please check your inbox' });
		} catch (error) {
			res.status(error.code).json({ msg: error.msg });
		}
	}

	static async emailConfirm(req, res) {
		const { emailToken } = req.params;

		try {
			const user = await UserModel.findOne({ emailToken });

			user.emailToken = undefined;
			user.emailConfirmed = true;

			await user.save();

			res.json({ msg: 'Email Confirmed Successfully' });
		} catch (error) {
			res.status(error.code).json({ msg: error.msg });
		}
	}

	static async login(req, res) {
		const { email, password } = req.body;

		try {
			const user = await UserModel.findOne({ email });

			await user.verifyPassword(password);

			res.json({ jwtoken: Generate.jwtoken(user._id) });
		} catch (error) {
			res.status(error.code).json({ msg: error.msg });
		}
	}

	static async forgotPassword(req, res) {
		const { email, recaptchaToken } = req.body;

		try {
			await Recaptcha.isInvalid(recaptchaToken);

			const user = await UserModel.findOne({ email });

			user.emailToken = Generate.emailToken();

			await user.save();

			await Mail.send({
				name: user.name,
				email: user.email,
				emailToken: user.emailToken
			}).pwdReset();

			res.json({ msg: 'Link sent. Please check your inbox' });
		} catch (error) {
			res.status(error.code).json({ msg: error.msg });
		}
	}

	static async resetPassword(req, res) {
		const { emailToken } = req.params;
		const { password } = req.body;

		try {
			const user = await UserModel.findOne({ emailToken });

			user.emailToken = undefined;
			user.password = password;

			await user.save();

			res.json({ msg: 'Password Reset Successfully' });
		} catch (error) {
			res.status(error.code).json({ msg: error.msg });
		}
	}
}
