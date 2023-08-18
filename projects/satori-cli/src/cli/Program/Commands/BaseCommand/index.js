import { Command } from 'commander';

import { Table } from '#utils';

import { CoinGecko } from '#services';

/**
 * Abstract Class BaseCommand.
 *
 * @class BaseCommand
 */
export class BaseCommand {
	static Table = Table;
	static CoinGecko = CoinGecko;
	static program = new Command();

	static command() {
		// Command Config
	}
}
