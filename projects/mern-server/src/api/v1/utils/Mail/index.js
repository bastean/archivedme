import { Transport } from './Transport';

export class Mail {
	static send(userData) {
		const { name, email, emailToken } = userData;

		let mailConfig = {
			name,
			email
		};

		return {
			confirm: () => {
				mailConfig = {
					...mailConfig,
					subject: 'Confirm Email',
					description: 'confirm your email',
					url: `${process.env.CLIENT_URL}/email-confirm/${emailToken}`,
					buttonText: 'CONFIRM'
				};
				return Transport.mail(mailConfig);
			},
			pwdReset: () => {
				mailConfig = {
					...mailConfig,
					subject: 'Password Reset',
					description: 'reset your password',
					url: `${process.env.CLIENT_URL}/forgot-password/${emailToken}`,
					buttonText: 'RESET'
				};
				return Transport.mail(mailConfig);
			}
		};
	}
}
