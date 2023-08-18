const verifyInvalidValues = (obj) => {
	const values = Object.values(obj);
	let invalidValues = [];

	for (let i = 0; i < values.length; i++) {
		if (values[i] === null || String(values[i]).match(/^ *$/) !== null) {
			invalidValues[i] = true;
		}
	}

	return invalidValues.length > 0;
};

const verifyInvalidChars = (obj) => {
	const { email, password, newPwd, ...chars } = obj;
	const values = Object.values(chars);

	let invalidValues = [];

	for (let i = 0; i < values.length; i++) {
		if (!String(values[i]).match(/^[0-9a-zA-ZÀ-ÖØ-öø-ÿ\u00f1\u00d1 $.:+-]*$/)) {
			invalidValues[i] = true;
		}
	}

	return invalidValues.length > 0;
};

const verifyInvalidPwd = (obj) => {
	if (String(obj.password).length < 8) {
		return true;
	} else if (obj.newPwd && String(obj.newPwd).length < 8) {
		return true;
	}
};

const verifyInvalidEmail = (obj) => {
	const emailRegExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return !String(obj.email).toLowerCase().match(emailRegExp);
};

const verifyInvalidData = (obj, res) => {
	if (!Object.values(obj).length) {
		res.status(400).json({ msg: 'Empty Values' });
		return true;
	} else if (verifyInvalidValues(obj)) {
		res.status(400).json({ msg: 'Invalid Values' });
		return true;
	} else if (verifyInvalidChars(obj)) {
		res.status(400).json({ msg: 'Invalid Characters' });
		return true;
	} else if (obj.password && verifyInvalidPwd(obj)) {
		res.status(400).json({ msg: 'Invalid Password' });
		return true;
	} else if (obj.email && verifyInvalidEmail(obj)) {
		res.status(400).json({ msg: 'Invalid Email' });
		return true;
	}
};

export default verifyInvalidData;
