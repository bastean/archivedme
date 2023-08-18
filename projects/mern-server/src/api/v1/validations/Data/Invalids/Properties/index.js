export class Properties {
	static isInvalid(obj) {
		const allowedProperties = [
			'name',
			'email',
			'password',
			'newPassword',
			'repeatPassword',
			'recaptchaToken'
		];

		let invalidProp;

		Object.getOwnPropertyNames(obj).forEach((property) => {
			if (!allowedProperties.includes(property)) {
				invalidProp = true;
			}
		});

		return invalidProp;
	}
}
