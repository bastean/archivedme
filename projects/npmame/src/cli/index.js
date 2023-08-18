import { program } from 'commander';

import { Version } from '#utils';

export class CLI {
	static init() {
		program
			.name('npmame')
			.description('NPMame directly from the command-line.')
			.version(Version.latest)
			.action(program.help);

		program.parse();
	}
}
