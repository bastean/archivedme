import clientAxios from '../config/clientAxios';

import { round, price } from '../helpers/NumberFormat';

const coinData = async (currency) => {
	const { data } = await clientAxios(
		`/coins/markets?vs_currency=${currency}&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
	);

	const coinData = Object.values(data).map((coin) => {
		return {
			rank: coin.market_cap_rank,
			name: coin.image.split('?')[0] + ` ${coin.name} (${coin.symbol.toUpperCase()})`,
			price: `${price(coin.current_price, currency, false)}`,
			change1h: round(coin.price_change_percentage_1h_in_currency),
			change24h: round(coin.price_change_percentage_24h_in_currency),
			change7d: round(coin.price_change_percentage_7d_in_currency),
			volume24h: price(coin.total_volume, currency, true),
			mktCap: price(coin.market_cap, currency, true)
		};
	});

	return coinData;
};

export default coinData;
