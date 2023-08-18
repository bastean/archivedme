import { Form, Inputs, NoticeTerms } from '@components';

import { MERNServer } from '@services';

export function Register() {
	const handleSubmit = (e) => {
		e.preventDefault();

		MERNServer.public.register();
	};

	return (
		<Form
			handle={handleSubmit}
			inputs={
				<>
					<Inputs inputType="name" />
					<Inputs inputType="email" />
					<Inputs inputType="password" />
					<Inputs inputType="repeatPassword" />
				</>
			}
			captcha={true}
			button={{
				name: 'Sign Up'
			}}
			links={{
				left: {
					link: '/',
					name: 'Registered? Log In'
				},
				right: {
					link: '/forgot-password',
					name: 'Forgot Password?'
				}
			}}
			noticeTerms={<NoticeTerms project="MERN" />}
		/>
	);
}
