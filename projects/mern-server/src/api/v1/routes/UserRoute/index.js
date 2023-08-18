import express from 'express';

import { Verify } from '#middlewares';

import { Private, Public } from './Routes';

export class UserRoute {
	static marshaller() {
		const routing = express.Router();

		routing.use('/account', Verify.auth, Private.marshaller());

		routing.use('/', Verify.data, Public.marshaller());

		return routing;
	}
}
