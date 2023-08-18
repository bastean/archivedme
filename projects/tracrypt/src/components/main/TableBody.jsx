import keyGenerate from '../../helpers/KeyGenerate';

import { decimal } from '../../helpers/NumberFormat';

const TableBody = ({ coinsToShow, syncStyles }) => {
	let stripedEffect = false;

	const tdGenerator = (coinValue, color = '', name = false, price = false) => {
		let tdClass = '';
		let tdValue = '';

		if (color === 'green') {
			// change1h - change24h - change7d
			tdClass = syncStyles.changes.concat(' text-green-400');
			if (!decimal(coinValue)) {
				tdValue = '+' + coinValue + '.00' + '%';
			} else {
				tdValue = '+' + coinValue + '%';
			}
		} else if (color === 'red') {
			// change1h - change24h - change7d
			tdClass = syncStyles.changes.concat(' text-red-400');
			if (!decimal(coinValue)) {
				tdValue = coinValue + '.00' + '%';
			} else {
				tdValue = coinValue + '%';
			}
		} else if (name) {
			// image/name
			tdClass = syncStyles.coin;
			tdValue = (
				<div className="flex items-center gap-2">
					<img
						className="h-4 w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6"
						src={coinValue.split(' ')[0]}
					/>{' '}
					{`${coinValue.split(' ').slice(1).join(' ')}`}
				</div>
			);
		} else if (price) {
			// price
			tdClass = syncStyles.price;
			tdValue = coinValue;
		} else {
			// volume24h - mktCap
			tdClass = syncStyles.volumeMktCap;
			tdValue = coinValue;
		}

		// first/rank
		return (
			<td
				className={`${syncStyles.thTdStyle} ${tdClass}`}
				key={keyGenerate()}
			>
				{tdValue}
			</td>
		);
	};

	return coinsToShow.map((coin) => {
		let positionCounter = -1;

		let tdCoinValues = Object.values(coin).map((coinValue) => {
			/*
				(Example) <td> Color for each "coinValue"

					Array_Position | Color | Value | Property_Name

						0 | white | 30             | rank
						1 | white | Monero (XMR)   | image/name
						2 | white | $127.36        | price
						3 | red   | -0.08          | change1h
						4 | green | 4.52           | change24h
						5 | green | 19.81          | change7d
						6 | white | $73,245,848    | volume24h
						7 | white | $2,313,413,164 | mktCap	
			*/

			positionCounter++;
			if (positionCounter === 1) {
				// image/name
				return tdGenerator(coinValue, '', true);
			} else if (positionCounter === 2) {
				// price
				return tdGenerator(coinValue, '', false, true);
			} else if (positionCounter > 2 && positionCounter < 6) {
				// change1h - change24h - change7d
				if (coinValue > 0) {
					return tdGenerator(coinValue, 'green');
				} else {
					return tdGenerator(coinValue, 'red');
				}
			} else {
				// rank - volume24h - mktCap
				return tdGenerator(coinValue);
			}
		});

		return (
			<tr
				className={`${stripedEffect ? 'bg-tracrypt-gr-dk' : 'bg-tracrypt-dk'} ${(stripedEffect =
					!stripedEffect)} flex cursor-default items-center justify-evenly py-2 text-xs transition-all duration-300 ease-out hover:translate-x-1 hover:-translate-y-1 hover:shadow-md hover:shadow-tracrypt-bl 2xl:text-sm`}
				key={keyGenerate()}
			>
				{tdCoinValues}
			</tr>
		);
	});
};

export default TableBody;
