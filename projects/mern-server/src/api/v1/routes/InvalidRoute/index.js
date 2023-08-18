import express from 'express';

export class InvalidRoute {
	static all() {
		const invalid = express.Router();

		invalid.route('*').all((req, res) => {
			res.status(404).json({ msg: 'Invalid Route' });
		});

		return invalid;
	}
}
