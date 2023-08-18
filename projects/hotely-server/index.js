import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';

import hotelRoutes from './routes/hotelRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import invalidRoutes from './routes/invalidRoutes.js';

const app = express();

dotenv.config();

connectDB();

const domainsWL = [process.env.CLIENT_URL];

const corsPolicy = {
	origin: function (origin, callback) {
		if (domainsWL.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(`|---> NOT ALLOWED <---|`);
		}
	}
};

app.use(cors(corsPolicy));

app.use(express.json());

app.use('/api/hotel', hotelRoutes);
app.use('/api/booking', bookingRoutes);
app.use('*', invalidRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`|---> EXPRESS: OK | PORT: ${port} <---|`);
});
