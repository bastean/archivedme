import compression from 'compression';
import dotenv from 'dotenv';
import express from 'express';
import figlet from 'figlet';
import helmet from 'helmet';

import { MongoDB } from '#database';

import { Coloring, Version } from '#helpers';

import { CORS, Request, Router } from './Configs';

export class Express {
	static async init() {
		const app = express();

		dotenv.config();

		app.enable('trust proxy');

		app.disable('x-powered-by');

		app.use(CORS.policy());

		app.use(express.json());

		app.use(compression());

		app.use(helmet());

		app.use(Request.limiter);

		app.use(Request.speedLimiter);

		app.use(Router.marshaller());

		console.clear();

		console.log(Coloring.textGray(`${Version.latest}\n`));

		console.log(
			Coloring.textCyan(
				figlet.textSync('MERN SERVER', {
					font: 'Doom'
				})
			)
		);

		console.log(Coloring.textCyan(Coloring.underline('STATUS\n')));

		await MongoDB.connect();

		const port = process.env.PORT || 5172;

		app.listen(port, () => {
			console.log(
				Coloring.textCyan(
					`|> EXPRESS: ${Coloring.textGreen('OK')} | PORT: ${Coloring.textGreen(port)} <|`
				)
			);

			console.log(Coloring.textRed(Coloring.underline('\nBLOCKS')));
		});
	}
}
