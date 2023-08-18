import { InputPrompt } from '#cli/Menu/Prompts';

import { AgainBackMenu } from '#cli/Menu/Options';

import { CoinGecko } from '#services';

import { Table } from '#utils';

export class Search extends InputPrompt {
	constructor() {
		super({
			listInputs: [
				{
					type: 'input',
					name: 'coinId',
					message: 'Coin (Bitcoin, Monero, etc.):'
				}
			]
		});
	}

	async promptInputs({ coinId }) {
		Table.showData(await CoinGecko.getData(coinId), 'COIN DATA');
		new AgainBackMenu(Search);
	}
}
