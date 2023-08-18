import { Values } from '#validations/Data/Invalids';

export class Missing {
	static isInvalid(obj) {
		const { name, lastname, email, number, message, recaptchaToken } = obj;

		return Values.isInvalid({
			name,
			lastname,
			email,
			number,
			message,
			recaptchaToken
		});
	}
}
