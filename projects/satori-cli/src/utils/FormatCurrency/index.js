import { formatCurrency } from '@coingecko/cryptoformat';

export class FormatCurrency {
	/**
	 * @param {number} amount Fiat value.
	 * @param {string} isoCode usd, jpy, btc, etc.
	 *
	 * @returns {string} Currency formatted.
	 */
	static fiat(amount, isoCode) {
		return formatCurrency(amount, isoCode);
	}
}
