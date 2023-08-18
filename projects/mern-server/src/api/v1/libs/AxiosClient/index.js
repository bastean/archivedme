import axios from 'axios';

export class AxiosClient {
	static request = axios.create({
		baseURL: `https://www.google.com/recaptcha/api`
	});
}
