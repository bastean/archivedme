import { API, Capitalize, Coloring, FormatCurrency, RoundPercent } from '#utils';

export class Market {
	/**
	 * @param {string} isoCode The target currency of market data: usd, jpy, btc, etc.
	 * @param {string} amount The Top 10, 50, 100.
	 *
	 * @returns {array[]} Multidimensional array with coins data.
	 */
	static async get(isoCode, amount) {
		try {
			const { data } = await API.call(
				`/coins/markets?vs_currency=${isoCode.toLowerCase().trim()}&per_page=${amount
					.toLowerCase()
					.trim()}&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
			);

			const tableCols = [
				'Rank',
				'Coin',
				'Symbol',
				'Price',
				'1h',
				'24h',
				'7d',
				'Volume 24h',
				'Mkt. Cap'
			];

			let table = [tableCols];

			let tableRows = data.map((coin) => {
				return {
					rank: Coloring.textItalic(coin.market_cap_rank),
					name: Coloring.textBold(Capitalize.format(coin.name)),
					symbol: coin.symbol.toUpperCase(),
					price: FormatCurrency.fiat(coin.current_price, isoCode),
					change1h: RoundPercent.twoDecimals(coin.price_change_percentage_1h_in_currency),
					change24h: RoundPercent.twoDecimals(coin.price_change_percentage_24h_in_currency),

					change7d: RoundPercent.twoDecimals(coin.price_change_percentage_7d_in_currency),
					volume24h: FormatCurrency.fiat(coin.total_volume, isoCode),
					marketCap: FormatCurrency.fiat(coin.market_cap, isoCode)
				};
			});

			for (let row = 0; row < tableRows.length; row++) {
				table.push(Object.values(tableRows[row]));
			}

			return table;
		} catch (error) {
			return Object.entries({ Error: Coloring.textRed('Not Found') });
		}
	}
}
