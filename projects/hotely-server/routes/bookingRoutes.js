import express from 'express';

import verifyData from '../middleware/verifyData.js';
import verifyAuth from '../middleware/verifyAuth.js';

import {
	registerBooking,
	getAllBookings,
	getBooking,
	setBooking,
	deleteBooking
} from '../controllers/privBookingController.js';

const router = express.Router();

// Private Endpoints (Auth)

// Bookings
router.route('/').post(verifyData, verifyAuth, registerBooking).get(verifyAuth, getAllBookings);

router
	.route('/:bookingId([0-9a-f]{24})')
	.get(verifyAuth, getBooking)
	.put(verifyData, verifyAuth, setBooking)
	.delete(verifyAuth, deleteBooking);

export default router;
