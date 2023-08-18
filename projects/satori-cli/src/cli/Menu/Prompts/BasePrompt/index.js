import figlet from 'figlet';
import inquirer from 'inquirer';

import { Coloring } from '#utils';

/**
 * Abstract Class BasePrompt.
 *
 * @class BasePrompt
 */
export class BasePrompt {
	callback;

	/**
	 * @param {Object} inquirerConfig
	 */
	constructor(inquirerConfig) {
		if (this.constructor === BasePrompt) {
			throw new Error("Abstract classes can't be instantiated.");
		}
		this.showPrompt(inquirerConfig);
	}

	showPrompt({ clearConsole = true, promptConfig }) {
		if (clearConsole) {
			console.clear();
			console.log(Coloring.textGreen('Powered by CoinGecko API\n'));
			console.log(
				Coloring.textBold(
					Coloring.textGreen(
						figlet.textSync('SATORI', {
							font: 'Doom'
						})
					)
				)
			);
		}

		inquirer
			.prompt(promptConfig)
			.then((answers) => {
				this.callback(answers);
			})
			.catch((error) => {
				if (error.isTtyError) {
					console.log("Prompt couldn't be rendered in the current environment");
				} else {
					console.log(error);
				}
			});
	}
}
