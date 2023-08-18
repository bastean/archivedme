import axios from 'axios';

export class AxiosClient {
	static request = axios.create({
		baseURL: `https://api.coingecko.com/api/v3`
	});
}
