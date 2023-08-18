import { ListChoice, ListPrompt } from '#cli/Menu/Prompts';

import { AgainBackMenu, BackMenu } from '#cli/Menu/Options';

import { CoinGecko } from '#services';

import { Table } from '#utils';

export class TopCoins {
	constructor() {
		new ListPrompt({
			listChoices: [
				new ListChoice('Top 10', () => {
					this.showCoinMarket('10');
				}),
				new ListChoice('Top 50', () => {
					this.showCoinMarket('50');
				}),
				new ListChoice('Top 100', () => {
					this.showCoinMarket('100');
				}),
				new BackMenu()
			]
		});
	}

	async showCoinMarket(amount) {
		Table.showData(await CoinGecko.getMarket('usd', amount), `TOP ${amount}`, [
			{ alignment: 'center' },
			{ alignment: 'left' },
			{ alignment: 'center' },
			{ alignment: 'right' },
			{ alignment: 'right' },
			{ alignment: 'right' },
			{ alignment: 'right' },
			{ alignment: 'right' },
			{ alignment: 'right' }
		]);
		new AgainBackMenu(TopCoins);
	}
}
