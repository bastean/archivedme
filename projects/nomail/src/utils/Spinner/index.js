import ora from 'ora';

import { Coloring } from '#utils';

export class Spinner {
	static #spinner = ora({
		spinner: 'bouncingBar'
	});

	static loading(msg) {
		return this.#spinner.start(Coloring.textBold(msg));
	}

	static succeed(msg) {
		return this.#spinner.succeed(Coloring.textBold(Coloring.textGreen(msg)));
	}

	static info(msg) {
		return this.#spinner.info(Coloring.textBold(Coloring.textBlue(msg)));
	}

	static warn(msg) {
		return this.#spinner.warn(Coloring.textBold(Coloring.textYellow(msg)));
	}

	static fail(msg) {
		return this.#spinner.fail(Coloring.textBold(Coloring.textRed(msg)));
	}

	static toLine() {
		this.#spinner.spinner = 'line';
	}
}
