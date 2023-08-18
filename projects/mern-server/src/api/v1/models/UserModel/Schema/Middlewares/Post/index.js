export class Post {
	static find(result, next, query) {
		if (!result) {
			return next({ code: 404, msg: 'User Not Found' });
		}

		if (query._conditions.emailToken && !result.emailConfirmed && result.emailToken) {
			return next();
		}

		if (result.emailConfirmed !== undefined && !result.emailConfirmed) {
			return next({
				code: 403,
				msg: 'Email Not Confirmed. Please check your inbox'
			});
		}
	}

	static save(error, doc, next) {
		if (error.name === 'MongoServerError' && error.code === 11000) {
			return next({ code: 400, msg: 'Email Already Registered' });
		}

		if (error.name === 'ValidationError') {
			const properties = Object.getOwnPropertyNames(error.errors)
				.map((prop) => prop[0].toUpperCase() + prop.slice(1))
				.reverse();

			return next({ code: 400, msg: 'Required: ' + properties.join(', ') });
		}

		if (error) {
			return next({ code: 500, msg: 'Save Error' });
		}
	}
}
