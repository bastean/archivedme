export class Recaptcha {
	static isInvalid(obj) {
		const recaptchaRegExp = /^[\w-]*$/;

		return !String(obj.recaptchaToken).match(recaptchaRegExp);
	}
}
