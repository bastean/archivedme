import { BaseCommand } from '#cli/Program/Commands';

export class Status extends BaseCommand {
	static command() {
		return this.program
			.command('status')
			.description('Check API Status')
			.action(async () => {
				this.Table.showData(await this.CoinGecko.getStatus(), 'API STATUS', [
					{ alignment: 'center' },
					{ alignment: 'center' }
				]);
			});
	}
}
