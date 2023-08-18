const priceFormat = (price, currencySelected) => {
	return new Intl.NumberFormat(`${currencySelected === 'usd' ? 'en-US' : 'de-DE'}`, {
		style: 'currency',
		currency: `${currencySelected.toUpperCase()}`
	}).format(price);
};

export const price = (price, currencySelected, cutDecimals) => {
	if (price >= 1) {
		const formattedPrice = priceFormat(price, currencySelected);

		if (cutDecimals && currencySelected === 'usd') {
			return formattedPrice.toString().split('.')[0];
		} else if (cutDecimals && currencySelected === 'eur') {
			return formattedPrice.toString().split(',')[0].concat(' €');
		}

		return formattedPrice;
	} else {
		if (currencySelected === 'usd') {
			return '$' + price.toString();
		} else if (currencySelected === 'eur') {
			return price.toString().concat(' €');
		}
	}
};

export const round = (number) => {
	return Math.round(number * 100) / 100;
};

export const decimal = (number) => {
	return number - Math.floor(number) !== 0;
};
