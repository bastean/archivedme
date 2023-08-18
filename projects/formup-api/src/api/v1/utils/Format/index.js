export class Format {
	static data(obj) {
		Object.getOwnPropertyNames(obj).forEach((property) => (obj[property] = obj[property].trim()));

		obj.email = obj.email.toLowerCase();
	}
}
