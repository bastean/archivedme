import { BaseCommand } from '#cli/Program/Commands';

export class Top extends BaseCommand {
	static command() {
		return this.program
			.command('top')
			.description('Top Coins: 10, 50 & 100')
			.option('-10', 'Top 10 Coins')
			.option('-50', 'Top 50 Coins')
			.option('-100', 'Top 100 Coins')
			.action(async (options) => {
				this.Table.showData(
					await this.CoinGecko.getMarket('usd', Object.getOwnPropertyNames(options)[0]),
					`TOP ${Object.getOwnPropertyNames(options)[0]}`,
					[
						{ alignment: 'center' },
						{ alignment: 'left' },
						{ alignment: 'center' },
						{ alignment: 'right' },
						{ alignment: 'right' },
						{ alignment: 'right' },
						{ alignment: 'right' },
						{ alignment: 'right' },
						{ alignment: 'right' }
					]
				);
			});
	}
}
