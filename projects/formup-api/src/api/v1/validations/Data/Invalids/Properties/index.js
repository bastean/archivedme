export class Properties {
	static isInvalid(obj) {
		const allowedProperties = ['name', 'lastname', 'email', 'number', 'message', 'recaptchaToken'];

		let invalidProp;

		Object.getOwnPropertyNames(obj).forEach((property) => {
			if (!allowedProperties.includes(property)) {
				invalidProp = true;
			}
		});

		return invalidProp;
	}
}
