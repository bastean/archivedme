import express from 'express';

import { UserControl } from '#controllers';

export class Public {
	static marshaller() {
		const routing = express.Router();

		routing.post('/register', UserControl.public.register);

		routing.get(
			'/email-confirm/:emailToken([a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12})',
			UserControl.public.emailConfirm
		);

		routing.post('/login', UserControl.public.login);

		routing.post('/forgot-password', UserControl.public.forgotPassword);

		routing.post(
			'/forgot-password/:emailToken([a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12})',
			UserControl.public.resetPassword
		);

		return routing;
	}
}
