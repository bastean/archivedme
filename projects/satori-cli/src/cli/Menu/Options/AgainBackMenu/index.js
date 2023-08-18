import { ListChoice, ListPrompt } from '#cli/Menu/Prompts';

import { BackMenu } from '#cli/Menu/Options';

export class AgainBackMenu {
	constructor(PromptObject) {
		new ListPrompt({
			clearConsole: false,
			listChoices: [
				new ListChoice('Again', () => {
					new PromptObject();
				}),
				new BackMenu()
			]
		});
	}
}
