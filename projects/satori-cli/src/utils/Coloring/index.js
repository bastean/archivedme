import colors from 'colors';

export class Coloring {
	static textItalic(text) {
		return colors.italic(text);
	}

	static textBold(text) {
		return colors.bold(text);
	}

	static textGreen(text) {
		return colors.green(text);
	}

	static textRed(text) {
		return colors.red(text);
	}

	static textRandom(text) {
		return colors.random(text);
	}
}
