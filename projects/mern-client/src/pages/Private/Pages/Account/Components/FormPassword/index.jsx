import { Form, Inputs } from '@components';

import { MERNServer } from '@services';

export function FormPassword() {
	const handleSubmit = (e) => {
		e.preventDefault();

		MERNServer.private.changePassword();
	};

	return (
		<Form
			handle={handleSubmit}
			inputs={
				<>
					<Inputs inputType="password" />
					<Inputs inputType="newPassword" />
					<Inputs inputType="repeatPassword" />
				</>
			}
			button={{
				name: 'Change Password'
			}}
		/>
	);
}
