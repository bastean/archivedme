import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Form, Inputs } from '@components';

import { MERNServer } from '@services';

import { useJWTStore } from '@stores';

import { Token } from '@validations';

export function Login() {
	const { jwtoken } = useJWTStore();
	const { emailToken } = useParams();

	const verifyJWToken = () => {
		if (jwtoken) window.location.href = '/account';
	};

	const verifyEmailToken = () => {
		if (String(window.location.pathname).toLowerCase().match('/email-confirm/*') && emailToken) {
			if (Token.isInvalid(emailToken)) return (window.location.href = '/');

			MERNServer.public.emailConfirm(emailToken);
		}
	};

	useEffect(() => {
		verifyJWToken();
		verifyEmailToken();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		MERNServer.public.login();
	};

	return (
		<Form
			handle={handleSubmit}
			inputs={
				<>
					<Inputs inputType="email" />
					<Inputs inputType="password" />
				</>
			}
			button={{
				name: 'Log In'
			}}
			links={{
				left: {
					link: '/register',
					name: 'Create Account'
				},
				right: {
					link: '/forgot-password',
					name: 'Forgot Password?'
				}
			}}
		/>
	);
}
