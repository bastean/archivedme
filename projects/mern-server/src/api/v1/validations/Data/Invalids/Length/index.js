export class Length {
	static isInvalid(obj) {
		const { recaptchaToken, ...objData } = obj;
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
