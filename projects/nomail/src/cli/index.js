import { program } from 'commander';

import figlet from 'figlet';

import { Mailtm } from '#services';

import { Coloring, Version } from '#utils';

export class Cli {
	static async init() {
		program
			.name('nomail')
			.description(
				'No Mail? No Problem. Generate random addresses for email confirmations and detect verification codes automatically from the command-line.'
			)
			.version(Version.latest)
			.action(() => {
				console.clear();

				console.log(
					`${Coloring.logo(
						figlet.textSync('noMail', {
							font: 'Nipples'
						})
					)}\n`
				);

				Mailtm.init();
			});

		program.parse();
	}
}
