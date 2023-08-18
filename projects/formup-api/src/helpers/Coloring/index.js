import colors from 'colors';

export class Coloring {
	static textGreen(text) {
		return colors.bold(colors.green(text));
	}

	static textRed(text) {
		return colors.bold(colors.red(text));
	}

	static textCyan(text) {
		return colors.bold(colors.cyan(text));
	}

	static textYellow(text) {
		return colors.bold(colors.yellow(text));
	}

	static textGray(text) {
		return colors.bold(colors.gray(text));
	}

	static underline(text) {
		return colors.underline(text);
	}
}
