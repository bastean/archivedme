import { BaseCommand } from '#cli/Program/Commands';

export class Search extends BaseCommand {
	static command() {
		return this.program
			.command('search')
			.description('Search coin data')
			.argument('<coinId>', 'Bitcoin, Monero, etc.')
			.action(async (coinId) => {
				this.Table.showData(await this.CoinGecko.getData(coinId.toLowerCase().trim()), 'COIN DATA');
			});
	}
}
