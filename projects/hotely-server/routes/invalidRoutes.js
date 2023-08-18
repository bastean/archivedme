import express from 'express';

const router = express.Router();

router.route('*').all((req, res) => {
	res.status(404).json({ msg: 'Invalid Route' });
});

export default router;
