import { Account } from './Account';

export class Mailtm {
	static async init() {
		await Account.createRandom();

		await Account.login();

		await Account.listenToDelete();

		await Account.messages();
	}
}
