export function Process() {
	return (
		<section className="flex w-full flex-col gap-20">
			<div
				data-aos="fade-down"
				className="center w-full"
			>
				<h1 className="text-center text-2xl font-black text-[#F5FBF2]">
					How Do We Work Our System and Our Journey
				</h1>
			</div>
			<div
				data-aos="fade-left"
				className="flex w-full justify-end"
			>
				<div className="flex w-full flex-col gap-5 rounded-lg bg-green-200/25 bg-gradient-to-l from-[#0D0D0D] to-transparent py-10 px-2 lg:h-48 lg:w-11/12 lg:flex-row lg:justify-start lg:gap-0 lg:rounded-l-full lg:px-20">
					<div className="flex h-full w-full gap-5 lg:w-4/5">
						<div className="flex items-center">
							<h1 className="text-9xl font-bold text-[#0D0D0D]">01</h1>
						</div>
						<div className="flex w-full flex-col justify-center gap-2 lg:w-96">
							<h1 className="text-xl font-extralight tracking-widest text-[#FFFFFF]">Consulting</h1>
							<p className="font-extralight text-[#80AB9E]">
								A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s.
							</p>
						</div>
					</div>
					<div className="center">
						<img
							src={new URL(`./Assets/connect.png`, import.meta.url).href}
							alt="connect"
						/>
					</div>
				</div>
			</div>

			<div
				data-aos="fade-right"
				className="flex w-full flex-col justify-end gap-5 rounded-lg bg-green-200/25 bg-gradient-to-r from-[#0D0D0D] to-transparent py-10 px-2 lg:h-48 lg:w-11/12 lg:flex-row lg:rounded-r-full lg:px-20"
			>
				<div className="center">
					<img
						src={new URL(`./Assets/chart.png`, import.meta.url).href}
						alt="chart"
					/>
				</div>
				<div className="flex h-full w-full items-center justify-end gap-5 lg:w-4/5">
					<div className="flex w-full flex-col justify-end gap-2 lg:w-96">
						<h1 className="text-right text-xl font-extralight tracking-widest text-[#FFFFFF]">
							Research & Compliance
						</h1>
						<p className="text-right font-extralight text-[#80AB9E]">
							A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text ever since the 1500s.
						</p>
					</div>
					<div className="flex items-center">
						<h1 className="text-9xl font-bold text-[#0D0D0D]">02</h1>
					</div>
				</div>
			</div>

			<div
				data-aos="fade-left"
				className="flex w-full justify-end"
			>
				<div className="flex w-full flex-col gap-5 rounded-lg bg-green-200/25 bg-gradient-to-l from-[#0D0D0D] to-transparent py-10 px-2 lg:h-48 lg:w-11/12 lg:flex-row lg:justify-start lg:gap-0 lg:rounded-l-full lg:px-20">
					<div className="flex h-full w-full gap-5 lg:w-4/5">
						<div className="flex items-center">
							<h1 className="text-9xl font-bold text-[#0D0D0D]">03</h1>
						</div>
						<div className="flex w-full flex-col justify-center gap-2 lg:w-96">
							<h1 className="text-xl font-extralight tracking-widest text-[#FFFFFF]">Technology</h1>
							<p className="font-extralight text-[#80AB9E]">
								A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the industry's standard dummy text ever since the 1500s.
							</p>
						</div>
					</div>
					<div className="center">
						<img
							src={new URL(`./Assets/technology.png`, import.meta.url).href}
							alt="technology"
						/>
					</div>
				</div>
			</div>

			<div
				data-aos="fade-down"
				className="center w-full"
			>
				<button className="h-14 w-64 rounded-md border-2 border-[#00E3A5] text-[#F5FBF2]">
					Let's see more
				</button>
			</div>
		</section>
	);
}
