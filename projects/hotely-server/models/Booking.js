import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
	{
		name: {
			type: String,
			requeride: true,
			trim: true
		},
		lastname: {
			type: String,
			requeride: true,
			trim: true
		},
		email: {
			type: String,
			lowercase: true,
			required: true,
			trim: true
		},
		phone: {
			type: String,
			required: true,
			trim: true
		},
		checkIn: {
			type: Date,
			require: true,
			default: Date.now(),
			trim: true
		},
		checkOut: {
			type: Date,
			require: true,
			trim: true
		},
		room: {
			type: String,
			require: true,
			trim: true
		},
		total: {
			type: String,
			require: true,
			trim: true
		},
		hotel: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'hotels'
		}
	},
	{
		timestamps: true
	}
);

const Booking = mongoose.model('bookings', bookingSchema);

export default Booking;
