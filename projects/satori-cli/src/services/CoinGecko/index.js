import { Data, Market, Price, Status } from './Endpoints';

export class CoinGecko {
	static getData(coinId) {
		return Data.get(coinId);
	}

	static getMarket(isoCode, amount) {
		return Market.get(isoCode, amount);
	}

	static getPrice(coinId, isoCode) {
		return Price.get(coinId, isoCode);
	}

	static getStatus() {
		return Status.check();
	}
}
