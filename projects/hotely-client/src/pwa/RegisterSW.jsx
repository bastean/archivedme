const RegisterSW = () => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('../../sw.js');
	}
};

export default RegisterSW;
