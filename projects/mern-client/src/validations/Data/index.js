import {
	Characters,
	Email,
	EmailToken,
	Length,
	Password,
	Properties,
	Recaptcha,
	Values
} from './Invalids';

export class Data {
	static isInvalid(inputsData) {
		if (!Object.values(inputsData).length) {
			return 'Empty Object';
		}

		if (Properties.isInvalid(inputsData)) {
			return 'Invalid Properties';
		}

		if (Values.isInvalid(inputsData)) {
			return 'Empty/Blank Values';
		}

		if (inputsData.recaptchaToken && Recaptcha.isInvalid(inputsData)) {
			return 'Invalid reCAPTCHA';
		}

		if (Length.isInvalid(inputsData)) {
			return 'Values length max. 50 characters';
		}

		if (Characters.isInvalid(inputsData)) {
			return 'Invalid Characters';
		}

		if (inputsData.email && Email.isInvalid(inputsData)) {
			return 'Invalid Email';
		}

		if (inputsData.emailToken && EmailToken.isInvalid(inputsData)) {
			return 'Invalid Token';
		}

		if (inputsData.password) {
			const alertMsg = Password.isInvalid(inputsData);
			if (alertMsg) return alertMsg;
		}
	}
}
