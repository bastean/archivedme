import { Menu } from '#cli';

import { ListChoice } from '#cli/Menu/Prompts';

export class BackMenu extends ListChoice {
	constructor() {
		super('Back', Menu.show);
	}
}
