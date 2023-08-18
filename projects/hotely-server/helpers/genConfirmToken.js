import crypto from 'crypto';

const genConfirmToken = () => {
	return crypto.randomUUID();
};

export default genConfirmToken;
