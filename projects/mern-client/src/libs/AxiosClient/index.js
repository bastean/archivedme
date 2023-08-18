import axios from 'axios';

import { useAlertDataStore, useJWTStore } from '@stores';

import { Format } from '@utils';

import { Data } from '@validations';

export class AxiosClient {
	static request = axios.create({
		baseURL: import.meta.env.VITE_SERVER_URL
	});
}

AxiosClient.request.interceptors.request.use(
	(request) => {
		if (request.url.includes('account')) {
			if (useJWTStore.getState().jwtoken) {
				request.headers = {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${useJWTStore.getState().jwtoken}`
				};
			} else {
				return useAlertDataStore.getState().setAlertData({ error: true, msg: 'Missing JWToken' });
			}
		}

		if (request.method.includes('get')) return request;

		const invalidDataMsg = Data.isInvalid(request.data);

		if (invalidDataMsg) {
			return useAlertDataStore.getState().setAlertData({ error: true, msg: invalidDataMsg });
		}

		Format.data(request.data);

		return request;
	},
	(error) => {
		return Promise.reject(error.response.data);
	}
);

AxiosClient.request.interceptors.response.use(
	(response) => {
		if (response.data.msg) {
			useAlertDataStore.getState().setAlertData({ error: false, msg: response.data.msg });
		}

		return response;
	},
	(error) => {
		if (error.code === 'ERR_NETWORK') {
			useAlertDataStore.getState().setAlertData({ error: true, msg: 'Server Offline' });
		}

		if (error.response.status === 429) {
			useAlertDataStore.getState().setAlertData({ error: true, msg: error.response.data });
		}

		if (error.response.data.msg) {
			useAlertDataStore.getState().setAlertData({ error: true, msg: error.response.data.msg });
		}

		return Promise.reject(error.response.data);
	}
);
