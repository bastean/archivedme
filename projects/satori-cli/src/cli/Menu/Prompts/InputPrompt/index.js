import { BasePrompt } from '#cli/Menu/Prompts';

export class InputPrompt extends BasePrompt {
	/**
	 * @param {Object} inputConfig
	 */
	constructor({ clearConsole, listInputs }) {
		super({ clearConsole, promptConfig: listInputs });
		this.callback = this.promptInputs;
	}
}
