import { Logo } from '@components';

export function Terms() {
	return (
		<div className="fixed top-0 left-0 z-50 flex h-screen w-full cursor-default items-start justify-center bg-mern-dark">
			<div className="opacityAnimation container flex h-full flex-col items-center justify-start">
				<div className="contentCenter h-full w-full flex-col p-1 lg:h-[512px]">
					<div className="flex h-full w-full flex-col items-center justify-start gap-5 overflow-y-auto">
						<div className="border-b-2 border-mern-white py-2">
							<div className="scale-[65%]">{Logo.mern}</div>
						</div>
						<div className="flex flex-col gap-5 text-mern-white">
							<div className="w-full text-center text-2xl font-medium text-mern-white">
								<span>Terms and Disclaimer Agreement</span>
							</div>

							<div className="w-full text-center text-xl">
								The information provided by MERN ("we," "us," or "our") on mern.bastean.example (the
								"Site") and our mobile application is for general informational purposes only. All
								information on the Site and our mobile application is provided in good faith,
								however we make no representation or warranty of any kind, express or implied,
								regarding the accuracy, adequacy, validity, reliability, availability, or
								completeness of any information on the Site or our mobile application.{' '}
								<span className="font-medium">
									UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF
									ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR
									RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE APPLICATION. YOUR
									USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON ANY INFORMATION ON
									THE SITE AND OUR MOBILE APPLICATION IS SOLELY AT YOUR OWN RISK.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
