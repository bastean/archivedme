import { Menu } from '#cli';
import { BaseCommand } from '#cli/Program/Commands';

export class Interactive extends BaseCommand {
	static command() {
		return this.program
			.command('interactive')
			.description('Start Interactive CLI (Default Command)')
			.action(() => {
				Menu.show();
			});
	}
}
