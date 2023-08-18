import { AxiosClient } from '#libs';

export class API {
	/**
	 * @param {string} endpoint CoinGecko API Endpoint.
	 *
	 * @returns {Object} CoinGecko API Response.
	 */
	static async call(endpoint) {
		return await AxiosClient.request(endpoint);
	}
}
