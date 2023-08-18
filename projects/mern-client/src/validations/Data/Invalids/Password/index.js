export class Password {
	static isInvalid(userData) {
		const { name, email, emailToken, recaptchaToken, ...passwordValues } = userData;

		if (this.#invalidPwdLength(passwordValues)) {
			return 'Password length min. 8 characters';
		}

		if (this.#invalidPwdMatch(passwordValues)) {
			return 'Passwords do not match';
		}
	}

	static #invalidPwdLength(passwordValues) {
		let invalidValues;

		Object.values(passwordValues).forEach((password) => {
			if (password.length < 8) {
				invalidValues = true;
			}
		});

		return invalidValues;
	}

	static #invalidPwdMatch(passwordValues) {
		if (!passwordValues.newPassword && passwordValues.repeatPassword) {
			return passwordValues.password !== passwordValues.repeatPassword;
		}

		if (passwordValues.newPassword) {
			return passwordValues.newPassword !== passwordValues.repeatPassword;
		}
	}
}
