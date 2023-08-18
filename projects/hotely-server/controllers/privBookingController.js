import Booking from '../models/Booking.js';

// Private Endpoints - Controllers (Auth)

// Bookings (CRUD)

// Create
const registerBooking = async (req, res) => {
	const booking = new Booking(req.body);
	booking.hotel = req.hotel._id;
	try {
		const bookingRegister = await booking.save();
		res.json(bookingRegister);
	} catch (error) {
		console.log(`|---> MDB_REGISTER_BOOKING_ERROR: ${error.message} <---|`);
	}
};

// Read
const getAllBookings = async (req, res) => {
	const bookings = await Booking.find().where('hotel').equals(req.hotel);
	res.json(bookings);
};

const getBooking = async (req, res) => {
	const { bookingId } = req.params;

	const booking = await Booking.findById(bookingId);

	if (!booking) {
		return res.status(404).json({ msg: 'Booking Not Found' });
	}

	if (booking.hotel._id.toString() !== req.hotel._id.toString()) {
		return res.status(403).json({ msg: 'Action Not Allowed' });
	}

	if (booking) {
		res.json(booking);
	}
};

// Update
const setBooking = async (req, res) => {
	const { bookingId } = req.params;

	const booking = await Booking.findById(bookingId);

	if (!booking) {
		return res.status(404).json({ msg: 'Booking Not Found' });
	}

	if (booking.hotel._id.toString() !== req.hotel._id.toString()) {
		return res.status(403).json({ msg: 'Action Not Allowed' });
	}

	// Guest
	booking.name = req.body.name || booking.name;
	booking.lastname = req.body.lastname || booking.lastname;

	// Contact
	booking.email = req.body.email || booking.email;
	booking.phone = req.body.phone || booking.phone;

	// Booking
	booking.checkIn = req.body.checkIn || booking.checkIn;
	booking.checkOut = req.body.checkOut || booking.checkOut;
	booking.room = req.body.room || booking.room;

	// Amount
	booking.total = req.body.total || booking.total;

	try {
		const updateBooking = await booking.save();
		res.json(updateBooking);
	} catch (error) {
		console.log(`|---> MDB_SET_BOOKING_ERROR: ${error.message} <---|`);
	}
};

// Delete
const deleteBooking = async (req, res) => {
	const { bookingId } = req.params;

	const booking = await Booking.findById(bookingId);

	if (!booking) {
		return res.status(404).json({ msg: 'Booking Not Found' });
	}

	if (booking.hotel._id.toString() !== req.hotel._id.toString()) {
		return res.status(403).json({ msg: 'Action Not Allowed' });
	}

	try {
		await booking.deleteOne();
		res.json({ msg: 'Booking Deleted Successfully' });
	} catch (error) {
		console.log(`|---> MDB_DELETE_BOOKING_ERROR: ${error.message} <---|`);
	}
};

export { registerBooking, getAllBookings, getBooking, setBooking, deleteBooking };
