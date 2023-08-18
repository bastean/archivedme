import ReCAPTCHA from 'react-google-recaptcha';

export function Recaptcha({ setChallengeMet }) {
	return (
		<ReCAPTCHA
			sitekey={import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY}
			onChange={(token) => {
				navigator.clipboard.writeText(token);
				setChallengeMet(true);
				setTimeout(() => {
					setChallengeMet(false);
				}, 3000);
			}}
			theme="dark"
		/>
	);
}
