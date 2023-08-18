import { Characters, Email, Length, Missing, Properties, Recaptcha } from './Invalids';

export class Data {
	static isInvalid(obj) {
		if (!Object.values(obj).length) {
			return 'Empty Object';
		}

		if (Properties.isInvalid(obj)) {
			return 'Invalid Properties';
		}

		if (Missing.isInvalid(obj)) {
			return 'Missing Properties';
		}

		if (Recaptcha.isInvalid(obj)) {
			return 'Invalid reCAPTCHA';
		}

		if (Length.isInvalid(obj)) {
			return 'Values length max. 200 characters';
		}

		if (Characters.isInvalid(obj)) {
			return 'Invalid Characters';
		}

		if (Email.isInvalid(obj)) {
			return 'Invalid Email';
		}
	}
}
