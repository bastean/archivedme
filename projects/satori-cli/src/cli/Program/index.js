import { Command } from 'commander';

import { Version } from '#utils';

import { Interactive, Price, Search, Status, Top } from '#cli/Program/Commands';

export class Program {
	static #program = new Command();

	static init() {
		this.#program
			.name('satori-cli')
			.description(
				'Crypto Market directly from the command-line and through an interactive interface. Powered by CoinGecko API'
			)
			.version(Version.latest);

		this.#program.addCommand(Interactive.command(), { isDefault: true });

		this.#program.addCommand(Top.command());

		this.#program.addCommand(Search.command());

		this.#program.addCommand(Price.command());

		this.#program.addCommand(Status.command());

		this.#program.parse();
	}
}
