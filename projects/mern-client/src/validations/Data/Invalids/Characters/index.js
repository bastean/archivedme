export class Characters {
	static isInvalid(userData) {
		const { email, emailToken, recaptchaToken, password, newPassword, repeatPassword, ...chars } =
			userData;
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
