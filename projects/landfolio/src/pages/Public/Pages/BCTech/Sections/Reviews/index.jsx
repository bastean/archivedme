export function Reviews() {
	return (
		<section
			data-aos="fade-right"
			className="flex w-full overflow-hidden py-24"
		>
			<div className="flex h-[420px] w-full rounded-lg bg-green-200/25 bg-gradient-to-r from-[#0D0D0D] to-transparent py-10 px-2 lg:w-11/12 lg:rounded-r-full lg:pr-28 lg:pl-10">
				<div className="flex w-full flex-col items-center justify-start gap-10 text-center">
					<div>
						<h1 className="text-2xl font-bold tracking-widest text-[#F5FBF2]">
							Our community with User reviews
						</h1>
					</div>
					<div className="h-full w-full rounded-lg bg-green-200/10 py-1 lg:w-11/12 lg:rounded-full lg:py-0">
						<div className="flex h-full">
							<div className="flex w-full items-center justify-between">
								<img
									src={new URL(`./Assets/arrow.png`, import.meta.url).href}
									alt="arrow"
									className="relative -left-8 hidden lg:flex"
								/>
								<div className="center h-full w-full lg:w-2/3 lg:p-8">
									<img
										src={new URL(`./Assets/quote.png`, import.meta.url).href}
										alt="quote"
										className="absolute opacity-50"
									/>
									<div className="center relative z-10 w-full flex-col gap-8 text-center lg:w-[520px]">
										<p className="px-10 text-xl font-extralight text-[#80AB9E]">
											A Lorem Ipsum is simply dummy text of the printing and typesetting industry.
											Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
										</p>
										<span className="px-10 text-xl font-bold text-[#80AB9E]">
											-Dake M. Chill, Business Owner
										</span>
									</div>
								</div>
								<img
									src={new URL(`./Assets/arrow.png`, import.meta.url).href}
									alt="arrow"
									className="relative -right-8 hidden rotate-180 lg:flex"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
