import { useEffect } from 'react';

import { Form, Inputs } from '@components';

import { MERNServer } from '@services';

import { useInputsStore, useUserAuthStore } from '@stores';

export function FormEdit() {
	const { setName, setEmail } = useInputsStore();
	const { user } = useUserAuthStore();

	useEffect(() => {
		setName(user.name);
		setEmail(user.email);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		MERNServer.private.setProfile();
	};

	return (
		<Form
			handle={handleSubmit}
			inputs={
				<>
					<Inputs
						inputType="name"
						downUpEffect={false}
					/>
					<Inputs
						inputType="email"
						downUpEffect={false}
					/>
				</>
			}
			button={{
				name: 'Save Changes'
			}}
		/>
	);
}
