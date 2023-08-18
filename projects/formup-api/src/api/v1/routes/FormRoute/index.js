import express from 'express';

import { Verify } from '#middlewares';

import { Public } from './Routes';

export class FormRoute {
	static marshaller() {
		const routing = express.Router();

		routing.use('/', Verify.data, Public.marshaller());

		return routing;
	}
}
