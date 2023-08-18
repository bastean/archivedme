import { Coloring } from '#utils';

export class RoundPercent {
	/**
	 * @param {number} percent
	 *
	 * @return {string} Percent rounded and colored.
	 */
	static twoDecimals(percent) {
		const rounded = !percent ? '-+¿?' : percent.toFixed(2).concat('%');
		return rounded.includes('-') ? Coloring.textRed(rounded) : Coloring.textGreen(`+${rounded}`);
	}
}
