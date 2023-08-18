export class Capitalize {
	/**
	 * @param {string} name
	 *
	 * @returns {string} First letter capitalized.
	 */
	static format(name) {
		return name[0].toUpperCase() + name.slice(1);
	}
}
