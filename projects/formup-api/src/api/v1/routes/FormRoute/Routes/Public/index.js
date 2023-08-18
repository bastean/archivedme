import express from 'express';

import { FormControl } from '#controllers';

export class Public {
	static marshaller() {
		const routing = express.Router();

		routing.post('/up', FormControl.public.submit);

		return routing;
	}
}
