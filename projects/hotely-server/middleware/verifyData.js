import verifyInvalidData from '../helpers/verifyInvalidData.js';

const verifyData = async (req, res, next) => {
	if (verifyInvalidData(req.body, res)) return;

	return next();
};

export default verifyData;
