import { Logo } from '@components';

import { Showcase } from './Components';

export function Home() {
	return (
		<>
			<div className="flex min-h-screen w-full items-center justify-center overflow-y-auto">
				<div className="bgAnimation h-full w-full bg-gradient-to-r from-landfolio-blue via-landfolio-purple to-landfolio-fuchsia">
					<div className="min-h-screen w-full bg-landfolio-dark bg-opacity-80">
						<a
							className="entryAnimation glassEffect fixed top-3 left-3 z-50 rounded-full p-1 opacity-0 hover:scale-110"
							href="https://github.com/bastean/landfolio"
							rel="noopener noreferrer"
							target="_blank"
						>
							{Logo.github}
						</a>

						<div className="logoAnimation fixed flex h-screen w-full flex-col items-center justify-center bg-landfolio-dark">
							<div className="flex h-full w-full scale-50 items-center justify-center sm:scale-100">
								{Logo.landfolio}
							</div>
						</div>

						<Showcase />
					</div>
				</div>
			</div>
		</>
	);
}
