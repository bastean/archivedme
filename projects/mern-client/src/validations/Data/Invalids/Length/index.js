export class Length {
	static isInvalid(userData) {
		const { recaptchaToken, ...objData } = userData;
		const values = Object.values(objData);
		let invalidValues = [];

		for (let i = 0; i < values.length; i++) {
			if (values[i].length > 50) {
				invalidValues[i] = true;
			}
		}

		return invalidValues.length > 0;
	}
}
