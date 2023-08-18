import { BaseCommand } from '#cli/Program/Commands';

export class Price extends BaseCommand {
	static command() {
		return this.program
			.command('price')
			.description('Obtain coin price')
			.argument('<coinId>', 'Bitcoin, Monero, etc.')
			.argument('<currency>', 'USD, JPY, BTC, etc.')
			.action(async (coinId, currency) => {
				this.Table.showData(
					await this.CoinGecko.getPrice(coinId.toLowerCase().trim(), currency.toLowerCase().trim()),
					'COIN PRICE',
					[{ alignment: 'center' }, { alignment: 'center' }]
				);
			});
	}
}
