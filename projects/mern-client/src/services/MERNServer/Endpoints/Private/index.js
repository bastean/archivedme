import { useInputsStore, useUserAuthStore } from '@stores';

import { API } from '@utils';

export class Private {
	static async getProfile() {
		const { setUser } = useUserAuthStore.getState();

		try {
			const { data } = await API.get('/user/account/profile');

			setUser(data);
		} catch (error) {
			setUser({});
		}
	}

	static async setProfile() {
		const { name, email } = useInputsStore.getState().inputsData();

		const { setUser } = useUserAuthStore.getState();

		try {
			await API.put('/user/account/profile', {
				name,
				email
			});

			setUser({ name, email });
		} catch (error) {}
	}

	static async changePassword() {
		const { password, newPassword, repeatPassword } = useInputsStore.getState().inputsData();

		const { setPassword, setNewPassword, setRepeatPassword } = useInputsStore.getState();

		try {
			await API.put('/user/account/change-password', {
				password,
				newPassword,
				repeatPassword
			});

			setTimeout(() => {
				setPassword('');
				setNewPassword('');
				setRepeatPassword('');
			}, 2500);
		} catch (error) {}
	}

	static async deleteAccount() {
		const { password } = useInputsStore.getState().inputsData();

		const { setPassword } = useInputsStore.getState();
		const { userSignOut } = useUserAuthStore.getState();

		if (confirm('Are you sure?')) {
			try {
				await API.delete('/user/account/delete', {
					data: {
						password
					}
				});

				setTimeout(() => {
					setPassword('');
				}, 2500);

				setTimeout(() => {
					userSignOut();
				}, 3000);
			} catch (error) {
				setTimeout(() => {
					setPassword('');
				}, 2500);
			}
		} else {
			setPassword('');
		}
	}
}
