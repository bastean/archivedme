import { Form, Inputs } from '@components';

import { MERNServer } from '@services';

export function ForgotPassword() {
	const handleSubmit = (e) => {
		e.preventDefault();

		MERNServer.public.forgotPassword();
	};

	return (
		<Form
			handle={handleSubmit}
			inputs={
				<>
					<Inputs inputType="email" />
				</>
			}
			captcha={true}
			button={{
				name: 'Send Link'
			}}
			links={{
				left: {
					link: '/register',
					name: 'Create Account'
				},
				right: {
					link: '/',
					name: 'Registered? Log In'
				}
			}}
		/>
	);
}
