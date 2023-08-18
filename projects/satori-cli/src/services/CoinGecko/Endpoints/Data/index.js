import { API, Coloring, FormatCurrency } from '#utils';

export class Data {
	/**
	 * @param {string} coinId Bitcoin, Monero, etc.
	 *
	 * @returns {array} Array with coin data.
	 */
	static async get(coinId) {
		try {
			const { data } = await API.call(
				`/coins/${coinId
					.toLowerCase()
					.trim()}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
			);

			return Object.entries({
				Name: Coloring.textBold(data.name),
				Symbol: Coloring.textBold(data.symbol.toUpperCase()),
				Price: Coloring.textGreen(FormatCurrency.fiat(data.market_data.current_price.usd, 'usd')),
				Algorithm: Coloring.textBold(data.hashing_algorithm),
				Categories: Coloring.textBold(data.categories[0]),
				Homepage: Coloring.textBold(data.links.homepage[0]),
				Subreddit: Coloring.textBold(data.links.subreddit_url),
				Genesis: Coloring.textBold(data.genesis_date)
			});
		} catch (error) {
			return Object.entries({ Coin: Coloring.textRed('Not Found') });
		}
	}
}
