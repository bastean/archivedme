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

	static textGray(text) {
		return colors.gray(text);
	}

	static textYellow(text) {
		return colors.yellow(text);
	}

	static textBlue(text) {
		return colors.blue(text);
	}

	static logo(text) {
		return this.textBold(this.textRed(text));
	}

	static tableHeader(text) {
		return colors.bgWhite(this.textBold(this.textBlue(text)));
	}
}
