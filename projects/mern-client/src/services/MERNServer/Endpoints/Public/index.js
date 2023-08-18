import { useAlertDataStore, useInputsStore, useJWTStore } from '@stores';

import { API } from '@utils';

export class Public {
	static async register() {
		const { name, email, password, repeatPassword, recaptchaToken } = useInputsStore
			.getState()
			.inputsData();

		try {
			await API.post('/user/register', {
				name,
				email,
				password,
				repeatPassword,
				recaptchaToken
			});

			useAlertDataStore.getState().setRedirect(true);
		} catch (error) {}
	}

	static async emailConfirm(emailToken) {
		try {
			await API.get(`/user/email-confirm/${emailToken}`);
		} catch (error) {}
	}

	static async login() {
		const { email, password } = useInputsStore.getState().inputsData();

		try {
			const { data } = await API.post('/user/login', {
				email,
				password
			});

			useJWTStore.getState().setJWToken(data.jwtoken);

			window.location.href = '/account';
		} catch (error) {}
	}

	static async forgotPassword() {
		const { email, recaptchaToken } = useInputsStore.getState().inputsData();

		try {
			await API.post('/user/forgot-password', {
				email,
				recaptchaToken
			});

			useAlertDataStore.getState().setRedirect(true);
		} catch (error) {}
	}

	static async resetPassword(emailToken) {
		const { password, repeatPassword } = useInputsStore.getState().inputsData();
		const { setPassword, setRepeatPassword } = useInputsStore.getState();

		try {
			await API.post(`/user/forgot-password/${emailToken}`, {
				password,
				repeatPassword
			});

			setTimeout(() => {
				setPassword('');
				setRepeatPassword('');
			}, 2500);

			useAlertDataStore.getState().setRedirect(true);
		} catch (error) {}
	}
}
