import { API, Capitalize, Coloring, FormatCurrency } from '#utils';

export class Price {
	/**
	 * @param {string} coinId Bitcoin, Monero, etc.
	 * @param {string} currency The target currency: usd, jpy, btc, etc.
	 *
	 * @returns {array[]} Multidimensional array with coin data.
	 */
	static async get(coinId, currency) {
		try {
			const { data } = await API.call(`/simple/price?ids=${coinId}&vs_currencies=${currency}`);

			data[coinId][currency] = FormatCurrency.fiat(data[coinId][currency], currency);

			if (!data[coinId][currency]) {
				return Object.entries({ Price: Coloring.textRed('Not Found') });
			}

			return [
				['Coin', 'Price'],
				[
					Coloring.textBold(Capitalize.format(Object.getOwnPropertyNames(data)[0])),
					Coloring.textGreen(data[coinId][currency])
				]
			];
		} catch (error) {
			return Object.entries({ Coin: Coloring.textRed('Not Found') });
		}
	}
}
