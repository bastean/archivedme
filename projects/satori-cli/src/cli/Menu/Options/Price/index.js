import { InputPrompt } from '#cli/Menu/Prompts';

import { AgainBackMenu } from '#cli/Menu/Options';

import { CoinGecko } from '#services';

import { Table } from '#utils';

export class Price extends InputPrompt {
	constructor() {
		super({
			listInputs: [
				{
					type: 'input',
					name: 'coinId',
					message: 'Coin (Bitcoin, Monero, etc.):'
				},
				{
					type: 'input',
					name: 'currency',
					message: 'Currency (USD, JPY, BTC, etc.):'
				}
			]
		});
	}

	async promptInputs(data) {
		Table.showData(
			await CoinGecko.getPrice(
				data.coinId.toLowerCase().trim(),
				data.currency.toLowerCase().trim()
			),
			'COIN PRICE',
			[{ alignment: 'center' }, { alignment: 'center' }]
		);
		new AgainBackMenu(Price);
	}
}
