import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Form, Inputs } from '@components';

import { MERNServer } from '@services';

import { Token } from '@validations';

export function ResetPassword() {
	const { emailToken } = useParams();

	useEffect(() => {
		const verifyEmailToken = () => {
			if (
				String(window.location.pathname).toLowerCase().match('/forgot-password/*') &&
				emailToken
			) {
				if (Token.isInvalid(emailToken)) return (window.location.href = '/');
			}
		};
		verifyEmailToken();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		MERNServer.public.resetPassword(emailToken);
	};

	return (
		<Form
			handle={handleSubmit}
			inputs={
				<>
					<Inputs inputType="password" />
					<Inputs inputType="repeatPassword" />
				</>
			}
			button={{
				name: 'Set Up'
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
