import express from 'express';

import { FormRoute, InvalidRoute } from '#routes';

export class Router {
	static marshaller() {
		const routing = express.Router();

		routing.use('/api/v1/form', FormRoute.marshaller());

		routing.use('*', InvalidRoute.all());

		return routing;
	}
}
