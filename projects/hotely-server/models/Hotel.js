import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import genConfirmToken from '../helpers/genConfirmToken.js';

const hotelSchema = mongoose.Schema({
	name: {
		type: String,
		requeride: true,
		trim: true
	},
	password: {
		type: String,
		require: true
	},
	email: {
		type: String,
		lowercase: true,
		required: true,
		unique: true,
		trim: true
	},
	phone: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	web: {
		type: String,
		default: null,
		lowercase: true,
		trim: true
	},
	emailToken: {
		type: String,
		default: genConfirmToken()
	},
	emailConfirmed: {
		type: Boolean,
		default: false
	}
});

hotelSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);

	this.password = await bcrypt.hash(this.password, salt);
});

hotelSchema.methods.verifyPassword = async function (passwordEntered) {
	return await bcrypt.compare(passwordEntered, this.password);
};

const Hotel = mongoose.model('hotels', hotelSchema);

export default Hotel;
