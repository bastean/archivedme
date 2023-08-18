import { API } from '#utils';

export class Recaptcha {
	static error = { code: 403, msg: 'Unsuccessfully reCAPTCHA' };

	static isInvalid(recaptchaToken) {
		return new Promise(async (resolve, reject) => {
			try {
				const { data } = await API.post(
					`/siteverify?secret=${process.env.RECAPTCHA_PRIVATE_KEY}&response=${recaptchaToken}`
				);

				if (!data.success) {
					reject(Recaptcha.error);
				}

				resolve();
			} catch (error) {
				reject(Recaptcha.error);
			}
		});
	}
}
