import { API, Coloring } from '#utils';

export class Status {
	static async check() {
		try {
			const response = await API.call('/ping');
			return Object.entries({
				Text: Coloring.textBold(Coloring.textGreen(response.data.gecko_says)),
				Code: Coloring.textBold(Coloring.textGreen(response.status))
			});
		} catch (error) {
			return Object.entries({
				Text: Coloring.textBold(Coloring.textRed(error.response.statusText)),
				Code: Coloring.textBold(Coloring.textRed(error.response.status))
			});
		}
	}
}
