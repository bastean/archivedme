export class Characters {
	static isInvalid(obj) {
		const { email, password, newPassword, repeatPassword, recaptchaToken, ...chars } = obj;
		const values = Object.values(chars);

		let invalidValues = [];

		for (let i = 0; i < values.length; i++) {
			if (!String(values[i]).match(/^[\wÀ-ÖØ-öø-ÿ\u00f1\u00d1\s.-]*$/)) {
				invalidValues[i] = true;
			}
		}

		return invalidValues.length > 0;
	}
}
