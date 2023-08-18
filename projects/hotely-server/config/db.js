import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const db = await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		const url = `${db.connection.host}:${db.connection.port}`;
		console.log(`|---> MONGODB: OK | HOST/PORT: ${url} <---|`);
	} catch (error) {
		console.log(`|---> MDB_CONNECT_ERROR: ${error.message} <---|`);
		process.exit(1);
	}
};

export default connectDB;
