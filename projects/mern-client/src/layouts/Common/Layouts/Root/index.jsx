import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Alert, Logo } from '@components';

import { useAlertDataStore } from '@stores';

export function Root() {
	const { alertData, showingAlert, setShowingAlert, setAlertData, redirect, setRedirect } =
		useAlertDataStore();

	useEffect(() => {
		setRedirect(false);

		if (alertData?.msg && !showingAlert) {
			setShowingAlert(true);

			setTimeout(() => {
				setAlertData({});
				setShowingAlert(false);
			}, 3000);
		}
	}, [alertData, redirect]);

	return (
		<>
			<div className="min-h-screen w-full overflow-y-auto bg-mern-dark">
				<a
					className="gitHubAnimation softHover absolute top-3 left-3 hover:scale-110"
					href="https://github.com/bastean/mern-client"
					rel="noopener noreferrer"
					target="_blank"
				>
					{Logo.github}
				</a>

				<div className="contentCenter mx-auto mt-12 flex-col gap-5 sm:gap-10">
					<div className="opacityAnimation scale-75 sm:scale-90">{Logo.mern}</div>
					<div className="w-full max-w-[612px]">
						<div className="mx-auto flex w-11/12 flex-col items-center gap-5 xs:w-3/4 sm:gap-10">
							<hr className="splitterAnimation w-full border-mern-white" />
							<div className="opacityAnimation softHover mb-3 h-full w-full rounded-2xl bg-mern-white bg-opacity-10 px-6 pt-10 pb-8 shadow-md shadow-mern-white hover:shadow-lg hover:shadow-mern-white xs:px-12">
								<Outlet />
							</div>
						</div>
					</div>
				</div>

				{showingAlert && <Alert data={alertData} />}
				{redirect && (
					<Navigate
						to="/"
						replace
					/>
				)}
			</div>
		</>
	);
}
