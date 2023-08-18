import mongoose from 'mongoose';

import { Password } from './Methods';

import { Post, Pre } from './Middlewares';

export class Schema {
	static user = mongoose.Schema({
		name: {
			type: String,
			required: true,
			trim: true
		},
		password: {
			type: String,
			required: true
		},
		email: {
			type: String,
			lowercase: true,
			required: true,
			unique: true,
			trim: true
		},
		emailToken: {
			type: String,
			unique: true,
			sparse: true
		},
		emailConfirmed: {
			type: Boolean,
			default: false,
			required: true
		}
	});
}

Schema.user.pre('save', async function (next) {
	await Pre.save(this, next);
});

Schema.user.post('save', Post.save);

Schema.user.post('findOne', async function (result, next) {
	await Post.find(result, next, this);
});

Schema.user.post('findById', Post.find);

Schema.user.methods.verifyPassword = Password.verify;
