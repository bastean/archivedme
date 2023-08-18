import { Outlet } from 'react-router-dom';

import { Logo } from '@components';

export function Root() {
	return (
		<>
			<div className="min-h-screen w-full overflow-y-auto bg-catcha-dark">
				{Logo.github}

				<div className="mx-auto mt-48 flex flex-col items-center justify-center gap-2 xs:gap-12">
					<div className="opacityAnimation scale-50 xs:scale-75 sm:scale-90">{Logo.catcha}</div>
					<div className="w-full max-w-[420px]">
						<div className="mx-auto flex w-11/12 flex-col items-center gap-5 xs:w-3/4 xs:gap-12">
							<hr className="hrAnimation w-full border-catcha-cream" />
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
