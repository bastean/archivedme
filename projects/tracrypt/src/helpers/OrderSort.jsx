const volumenSortTop = (a, b) => {
	return b.volume24h.toString().replace(/\D/g, '') - a.volume24h.toString().replace(/\D/g, '');
};

const volumenSortLow = (a, b) => {
	return a.volume24h.toString().replace(/\D/g, '') - b.volume24h.toString().replace(/\D/g, '');
};

const mktCapSortTop = (a, b) => {
	return b.mktCap.toString().replace(/\D/g, '') - a.mktCap.toString().replace(/\D/g, '');
};

const mktCapSortLow = (a, b) => {
	return a.mktCap.toString().replace(/\D/g, '') - b.mktCap.toString().replace(/\D/g, '');
};

const mvp1hSortTop = (a, b) => {
	return b.change1h.toString() - a.change1h.toString();
};

const mvp1hSortLow = (a, b) => {
	return a.change1h.toString() - b.change1h.toString();
};

const mvp24hSortTop = (a, b) => {
	return b.change24h.toString() - a.change24h.toString();
};

const mvp24hSortLow = (a, b) => {
	return a.change24h.toString() - b.change24h.toString();
};

const mvp7dSortTop = (a, b) => {
	return b.change7d.toString() - a.change7d.toString();
};

const mvp7dSortLow = (a, b) => {
	return a.change7d.toString() - b.change7d.toString();
};

const OrderSort = (orderChoose) => {
	switch (orderChoose) {
		case 'Mkt CapTop':
			return mktCapSortTop;
		case 'Mkt CapLow':
			return mktCapSortLow;
		case 'VolumenTop':
			return volumenSortTop;
		case 'VolumenLow':
			return volumenSortLow;
		case '1hTop':
			return mvp1hSortTop;
		case '1hLow':
			return mvp1hSortLow;
		case '24hTop':
			return mvp24hSortTop;
		case '24hLow':
			return mvp24hSortLow;
		case '7dTop':
			return mvp7dSortTop;
		case '7dLow':
			return mvp7dSortLow;
		default:
			return mktCapSortTop;
	}
};

export default OrderSort;
