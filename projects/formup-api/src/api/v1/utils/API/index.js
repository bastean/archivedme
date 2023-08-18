import { AxiosClient } from '#libs';

export class API {
	static async post(endpoint) {
		return await AxiosClient.request.post(endpoint);
	}
}
