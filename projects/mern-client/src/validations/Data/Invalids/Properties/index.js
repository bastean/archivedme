export class Properties {
	static isInvalid(userData) {
		const allowedProperties = [
			'name',
			'email',
			'emailToken',
			'password',
			'newPassword',
			'repeatPassword',
			'recaptchaToken'
		];

		let invalidProp;

		Object.getOwnPropertyNames(userData).forEach((property) => {
			if (!allowedProperties.includes(property)) {
				invalidProp = true;
			}
		});

		return invalidProp;
	}
}
