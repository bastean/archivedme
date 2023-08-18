import cors from 'cors';

import { Coloring } from '#helpers';

export class CORS {
	static policy() {
		const allowedDomains = [process.env.CLIENT_URL];

		return cors({
			origin: function (origin, callback) {
				if (allowedDomains.indexOf(origin) !== -1) {
					callback(null, true);
				} else {
					callback(Coloring.textRed(`\n|> BLOCKED BY CORS: ${Coloring.textYellow(origin)} <|\n`));
				}
			},
			methods: ['POST']
		});
	}
}
