import { ListChoice, ListPrompt } from './Prompts';

import { APIStatus, Price, Search, TopCoins } from './Options';

export class Menu {
	static show() {
		new ListPrompt({
			listChoices: [
				new ListChoice('Top Coins', () => {
					new TopCoins();
				}),
				new ListChoice('Search', () => {
					new Search();
				}),
				new ListChoice('Price', () => {
					new Price();
				}),
				new ListChoice('Status', () => {
					new APIStatus();
				}),
				new ListChoice('Exit', () => {
					console.clear();
					process.exit(0);
				})
			]
		});
	}
}
