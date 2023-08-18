export class Recaptcha {
	static isInvalid(userData) {
		const recaptchaRegExp = /^[\w-]*$/;

		return !String(userData.recaptchaToken).match(recaptchaRegExp);
	}
}
