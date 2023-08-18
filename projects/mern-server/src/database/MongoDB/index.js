import mongoose from 'mongoose';

import { Coloring } from '#helpers';

export class MongoDB {
	static async connect() {
		try {
			const db = await mongoose.connect(process.env.MONGODB_URI, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			});

			const url = `${db.connection.host}:${db.connection.port}`;

			console.log(
				Coloring.textCyan(
					`|> MONGODB: ${Coloring.textGreen('OK')} | HOST/PORT: ${Coloring.textGreen(url)} <|\n`
				)
			);
		} catch (error) {
			console.log(Coloring.textCyan(`|> MDB CONNECT ERROR: ${Coloring.textRed(error.message)} <|`));
			process.exit(1);
		}
	}
}
