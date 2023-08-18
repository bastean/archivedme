export class Private {
	static getProfile(req, res) {
		const { password, emailToken, emailConfirmed, __v, _id, ...userProfile } = req.user._doc;
		res.json(userProfile);
	}

	static async setProfile(req, res) {
		try {
			req.user.name = req.body.name || req.user.name;
			req.user.email = req.body.email || req.user.email;

			await req.user.save();

			res.json({ msg: 'Successfully Update' });
		} catch (error) {
			res.status(error.code).json({ msg: error.msg });
		}
	}

	static async changePassword(req, res) {
		const { password, newPassword } = req.body;

		try {
			await req.user.verifyPassword(password);

			req.user.password = newPassword;

			await req.user.save();

			res.json({ msg: 'Password Changed Successfully' });
		} catch (error) {
			return res.status(error.code).json({ msg: error.msg });
		}
	}

	static async deleteAccount(req, res) {
		const { password } = req.body;

		try {
			await req.user.verifyPassword(password);

			await req.user.deleteOne();

			res.json({ msg: 'Account Deleted Successfully' });
		} catch (error) {
			res.status(error.code).json({ msg: error.msg });
		}
	}
}
