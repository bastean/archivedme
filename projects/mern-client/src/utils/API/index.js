import { AxiosClient } from '@libs';

export class API {
	static async get(endpoint) {
		return await AxiosClient.request(endpoint);
	}

	static async post(endpoint, data) {
		return await AxiosClient.request.post(endpoint, data);
	}

	static async put(endpoint, data) {
		return await AxiosClient.request.put(endpoint, data);
	}

	static async delete(endpoint, data) {
		return await AxiosClient.request.delete(endpoint, data);
	}
}
