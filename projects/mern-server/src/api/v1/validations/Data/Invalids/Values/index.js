export class Values {
	static isInvalid(obj) {
		const values = Object.values(obj);
		let invalidValues = [];

		for (let i = 0; i < values.length; i++) {
			if (!values[i] || String(values[i]).match(/^\s*$/)) {
				invalidValues[i] = true;
			}
		}

		return invalidValues.length > 0;
	}
}
