import bcrypt from 'bcrypt';

export class Pre {
	static async save(doc, next) {
		if (!doc.isModified('password')) {
			return next();
		}

		const salt = await bcrypt.genSalt(10);

		doc.password = await bcrypt.hash(doc.password, salt);
	}
}
