import Mailjs from '@cemalgnlts/mailjs';

import clipboard from 'clipboardy';

import { Coloring, Search, Spinner, Table } from '#utils';

export class Account {
	static #mailjs = new Mailjs();

	static async createRandom() {
		Spinner.loading('Creating a random account');

		await this.#mailjs.createOneAccount().then((response) => {
			if (response.status) {
				this.#mailjs.account = response.data;

				Spinner.succeed(`Random account created\n`);

				Spinner.info(`Address: ${this.#mailjs.account.username}`);

				return Spinner.info(`Password: ${this.#mailjs.account.password}\n`);
			}

			Spinner.fail('Could not create account, please try again');

			return process.exit(0);
		});
	}

	static async login() {
		Spinner.loading('Log in to the account');

		await this.#mailjs
			.login(this.#mailjs.account.username, this.#mailjs.account.password)
			.then((response) => {
				if (response.status) {
					Spinner.succeed('Login successfully\n');

					clipboard.writeSync(this.#mailjs.account.username);

					return Spinner.succeed('Address copied to Clipboard!\n');
				}

				Spinner.fail(response.message ?? 'Login failed, please try again');

				return process.exit(0);
			});
	}

	static async listenToDelete() {
		Spinner.warn("WARNING: This account will be automatically deleted when you press 'q'\n");

		process.stdin
			.setRawMode(true)
			.setEncoding('utf8')
			.resume()
			.on('data', async (key) => {
				if (key.toLowerCase() === 'q') {
					await this.#mailjs.deleteMe().then((response) => {
						if (response.status) {
							Spinner.succeed('Successful account deletion\n');

							return process.exit(0);
						}

						Spinner.fail(response.message ?? 'Unable to delete account, please try manually\n');

						return process.exit(0);
					});
				}
			});
	}

	static async messages() {
		Spinner.toLine();

		let messagesRead = [];

		setInterval(async () => {
			Spinner.loading('Awaiting new messages\n');

			await this.#mailjs.getMessages().then((response) => {
				if (!response.status) {
					Spinner.fail(response.message ?? 'Unable to read messages, please try manually');

					return process.exit(0);
				}

				if (response.data.length > 0) {
					response.data.forEach(async (message) => {
						if (!messagesRead.includes(message.id)) {
							Spinner.succeed(
								`New message from -> ${message.from.address} (${
									message.from.name || 'Anonymous'
								})\n`
							);

							message.text = await this.#mailjs
								.getMessage(message.id)
								.then((response) => response.data.text);

							Table.show([
								[Coloring.tableHeader('Subject')],
								[message.subject],
								[''],
								[Coloring.tableHeader('Message')],
								[message.text]
							]);

							await Search.verificationCode(message.subject.concat(' ' + message.text))
								.then((code) => {
									clipboard.writeSync(code);

									Spinner.succeed(`Verification Code copied to Clipboard!\n`);
								})
								.catch((error) => Spinner.fail(`${error}\n`));

							messagesRead.push(message.id);
						}
					});
				}
			});
		}, 6000);
	}
}
