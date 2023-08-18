import { useState, useEffect } from 'react';

import useFilterSelected from '../../hooks/useFilterSelected';

import coinData from '../../helpers/CoinData';
import OrderSort from '../../helpers/OrderSort';

import TableHead from './TableHead';
import TableBody from './TableBody';

const CryptoTable = () => {
	// Synchronize <th> header and <td> body styles
	const syncStyles = {
		coin: 'min-w-[190px] xl:min-w-[210px] 2xl:min-w-[260px] text-left',
		price: 'max-w-[200px] pr-4 text-right',
		changes: 'max-w-[90px] pr-6 xl:pr-4 text-right',
		volumeMktCap: 'max-w-[160px] pl-0 pr-8 text-right',
		thTdStyle: 'w-32 lg:w-36 xl:w-36 2xl:w-48 first:max-w-[50px] p-3 first:px-8 whitespace-nowrap'
	};
	const { selectedCurrency, setSelectedCurrency, orderChoose, setOrderChoose } =
		useFilterSelected();
	const [coinsData, setCoinsData] = useState([]);

	useEffect(() => {
		const getApiData = async (currency) => {
			if (selectedCurrency === '') {
				setSelectedCurrency('usd');
			}

			if (orderChoose === '') {
				setOrderChoose('Mkt Cap');
			}

			setCoinsData(await coinData(currency));
		};

		getApiData(selectedCurrency);

		setInterval(() => {
			getApiData(selectedCurrency);
		}, 300000); // Auto-Refresh every 5mins
	}, [selectedCurrency, orderChoose]);

	coinsData.sort(OrderSort(orderChoose));

	return (
		<div
			className="w-full min-w-[200px] overflow-y-auto overflow-x-visible lg:px-2"
			id="coinTable"
		>
			<table className="max-h-full w-full text-tracrypt-wt">
				<thead className="sticky top-0 z-10">
					<TableHead syncStyles={syncStyles} />
				</thead>
				<tbody>
					<TableBody
						syncStyles={syncStyles}
						coinsToShow={coinsData}
					/>
				</tbody>
			</table>
		</div>
	);
};

export default CryptoTable;
