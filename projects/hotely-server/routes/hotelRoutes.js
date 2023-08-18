import express from 'express';

import {
	register,
	emailConfirm,
	login,
	forgotPassword,
	passwordReset
} from '../controllers/pubHotelController.js';

import verifyData from '../middleware/verifyData.js';
import verifyAuth from '../middleware/verifyAuth.js';

import { getProfile, setProfile, setPassword } from '../controllers/privHotelController.js';

const router = express.Router();

// Public Endpoints (noAuth)

// Register
router.post('/', verifyData, register);
router.get(
	'/email-confirm/:emailToken([a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12})',
	emailConfirm
);

// Login
router.post('/login', verifyData, login);

// Password Reset
router.post('/forgot-password', verifyData, forgotPassword);
router.post(
	'/forgot-password/:emailToken([a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12})',
	verifyData,
	passwordReset
);

// Private Endpoints (Auth)

// Profile
router.get('/profile', verifyAuth, getProfile);
router.put('/profile', verifyData, verifyAuth, setProfile);

// Password
router.put('/change-password', verifyData, verifyAuth, setPassword);

export default router;
