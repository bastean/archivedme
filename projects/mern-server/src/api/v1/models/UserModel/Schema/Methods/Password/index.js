import bcrypt from 'bcrypt';

export class Password {
	static verify(passwordEntered) {
		return new Promise(async (resolve, reject) => {
			await bcrypt.compare(passwordEntered, this.password, function (error, result) {
				if (result) {
					resolve();
				} else {
					reject({ code: 403, msg: 'Incorrect Password' });
				}
			});
		});
	}
}
