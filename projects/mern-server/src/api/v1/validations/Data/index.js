import { Characters, Email, Length, Password, Properties, Recaptcha, Values } from './Invalids';

export class Data {
	static isInvalid(obj) {
		if (!Object.values(obj).length) {
			return 'Empty Object';
		}

		if (Properties.isInvalid(obj)) {
			return 'Invalid Properties';
		}

		if (Values.isInvalid(obj)) {
			return 'Empty/Blank Values';
		}

		if (obj.recaptchaToken && Recaptcha.isInvalid(obj)) {
			return 'Invalid reCAPTCHA';
		}

		if (Length.isInvalid(obj)) {
			return 'Values length max. 50 characters';
		}

		if (Characters.isInvalid(obj)) {
			return 'Invalid Characters';
		}

		if (obj.email && Email.isInvalid(obj)) {
			return 'Invalid Email';
		}

		if (obj.password) {
			const alertMsg = Password.isInvalid(obj);
			if (alertMsg) return alertMsg;
		}
	}
}
