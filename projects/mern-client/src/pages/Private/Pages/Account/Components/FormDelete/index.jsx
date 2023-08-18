import { Form, Inputs } from '@components';

import { MERNServer } from '@services';

export function FormDelete() {
	const handleSubmit = (e) => {
		e.preventDefault();

		MERNServer.private.deleteAccount();
	};

	return (
		<Form
			handle={handleSubmit}
			inputs={
				<>
					<Inputs inputType="password" />
				</>
			}
			button={{
				name: 'Delete Account'
			}}
		/>
	);
}
