export class Format {
	static data(request) {
		if ('name' in request) {
			request['name'] = request['name'].trim();
		}

		if ('email' in request) {
			request['email'] = request['email'].trim().toLowerCase();
		}
	}
}
