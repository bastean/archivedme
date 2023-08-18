import { useEffect } from 'react';

import { useInputsStore } from '@stores';

import { Input } from './Components';

export function Inputs({ inputType, downUpEffect = true }) {
	const inputsStore = useInputsStore();

	useEffect(() => {
		inputsStore.cleanStore();
	}, []);

	const genInput = (type, value, setValue, text) => (
		<Input
			inputType={type}
			inputValue={value}
			setInputValue={setValue}
			spanText={text}
			downUpEffect={downUpEffect}
		/>
	);

	switch (inputType) {
		case 'name':
			return genInput('text', inputsStore.inputs.name, inputsStore.setName, 'Name');

		case 'email':
			return genInput('text', inputsStore.inputs.email, inputsStore.setEmail, 'Email');

		case 'password':
			return genInput('password', inputsStore.inputs.password, inputsStore.setPassword, 'Password');

		case 'newPassword':
			return genInput(
				'password',
				inputsStore.inputs.newPassword,
				inputsStore.setNewPassword,
				'New Password'
			);

		case 'repeatPassword':
			return genInput(
				'password',
				inputsStore.inputs.repeatPassword,
				inputsStore.setRepeatPassword,
				'Repeat Password'
			);
	}
}
