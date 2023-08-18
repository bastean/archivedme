import axios from 'axios';

const clientAxios = axios.create({
	baseURL: `https://api.coingecko.com/api/v3`
});

export default clientAxios;
