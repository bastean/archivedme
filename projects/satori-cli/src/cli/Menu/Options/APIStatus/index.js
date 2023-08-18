import { InputPrompt } from '#cli/Menu/Prompts';

import { AgainBackMenu } from '#cli/Menu/Options';

import { CoinGecko } from '#services';

import { Table } from '#utils';

export class APIStatus extends InputPrompt {
	constructor() {
		super({
			listInputs: [
				{
					type: 'input',
					name: 'status',
					message: 'Press Enter to check API Status...'
				}
			]
		});
	}

	async promptInputs() {
		Table.showData(await CoinGecko.getStatus(), 'API STATUS', [
			{ alignment: 'center' },
			{ alignment: 'center' }
		]);

		new AgainBackMenu(APIStatus);
	}
}
