export class Search {
	static verificationCode(message) {
		const code = message.replace(/(https?):\/\/[\S]+/g, '').match(/\d{6}/);

		return code !== null
			? Promise.resolve(code[0])
			: Promise.reject('Verification Code not found automatically, please try manually');
	}
}
