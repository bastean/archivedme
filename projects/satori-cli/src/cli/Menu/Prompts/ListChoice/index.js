export class ListChoice {
	#name;
	#callback;

	/**
	 * @param {string} name
	 * @param {Function} callback
	 */
	constructor(name, callback) {
		this.#name = name;
		this.#callback = callback;
	}

	get name() {
		return this.#name;
	}

	get callback() {
		return this.#callback();
	}
}
