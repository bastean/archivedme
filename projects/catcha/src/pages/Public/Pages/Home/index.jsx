import { useState } from 'react';

import { Alert, Recaptcha } from '@components';

export function Home() {
	const [challengeMet, setChallengeMet] = useState(false);

	return (
		<div className="opacityAnimation flex w-full flex-col items-center justify-center gap-6">
			{!challengeMet && <Recaptcha setChallengeMet={setChallengeMet} />}
			{challengeMet && <Alert msg={'Copied to Clipboard!'} />}
		</div>
	);
}
