import express from 'express';

import { InvalidRoute, UserRoute } from '#routes';

export class Router {
	static marshaller() {
		const routing = express.Router();

		routing.use('/api/v1/user', UserRoute.marshaller());

		routing.use('*', InvalidRoute.all());

		return routing;
	}
}
