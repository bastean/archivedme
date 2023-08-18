import { BasePrompt } from '#cli/Menu/Prompts';

export class ListPrompt extends BasePrompt {
	#choicesList;

	/**
	 * @param {Object} listConfig
	 */
	constructor({ clearConsole, listChoices }) {
		super({
			clearConsole,
			promptConfig: {
				type: 'list',
				name: 'choice',
				message: 'Menu\n',
				choices: listChoices.map((choice) => choice.name)
			}
		});

		this.callback = this.promptChoice;
		this.#choicesList = listChoices;
	}

	promptChoice({ choice }) {
		this.#choicesList.find((choiceList) => choiceList.name === choice && choiceList.callback);
	}
}
