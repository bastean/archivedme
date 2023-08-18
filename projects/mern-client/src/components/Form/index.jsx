import ReCAPTCHA from 'react-google-recaptcha';

import { useAlertDataStore, useInputsStore } from '@stores';

import { Button, Links } from './Components';

export function Form({ handle, inputs, captcha, button, links, noticeTerms }) {
	const { setRecaptchaToken } = useInputsStore();
	const { showingAlert } = useAlertDataStore();

	return (
		<form
			onSubmit={handle}
			className="flex h-full w-full flex-col items-center justify-evenly gap-10"
		>
			{inputs}

			<div className="flex w-full flex-col items-center justify-between gap-6 text-mern-white">
				{captcha && (
					<ReCAPTCHA
						sitekey={import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY}
						onChange={(token) => {
							setRecaptchaToken(token);
						}}
						theme="dark"
					/>
				)}

				<Button
					name={button.name}
					type="submit"
					disabled={showingAlert}
				/>

				{noticeTerms}

				{links && (
					<Links
						sectionLeft={{
							link: `${links.left.link}`,
							name: `${links.left.name}`
						}}
						sectionRight={{
							link: `${links.right.link}`,
							name: `${links.right.name}`
						}}
					/>
				)}
			</div>
		</form>
	);
}
