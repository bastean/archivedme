export function AboutUs() {
	return (
		<section
			data-aos="fade-right"
			className="flex w-full overflow-hidden py-24"
		>
			<div className="flex w-full rounded-lg bg-green-200/25 bg-gradient-to-r from-[#0D0D0D] to-transparent py-10 px-2 lg:h-[512px] lg:px-36 xl:w-4/5 xl:rounded-r-full">
				<div className="mx-auto flex w-full flex-col items-center justify-center gap-10 text-center lg:w-96 lg:text-left xl:mx-0 xl:items-start">
					<h1 className="text-2xl font-black text-[#F5FBF2] lg:text-4xl">About Us</h1>
					<p className="text-[#80AB9E]">
						A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
						has been the industry's standard dummy text ever since the 1500s.
					</p>

					<p className="text-[#80AB9E]">
						Printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy
						text ever since the 1500s.
					</p>

					<button className="h-14 w-11/12 rounded-md border-2 border-[#00E3A5] text-[#F5FBF2] lg:w-2/3">
						Learn More
					</button>
				</div>
				<div className="absolute right-10 hidden h-[420px] w-1/2 xl:flex">
					<div className="center glassEffect absolute left-4 flex h-48 w-64 flex-col gap-2 rounded-xl">
						<img
							src={new URL(`./Assets/bg-marketplace.png`, import.meta.url).href}
							alt="bg-marketplace"
							className="absolute -top-24 -left-10 -z-10"
						/>
						<img
							src={new URL(`./Assets/marketplace.png`, import.meta.url).href}
							alt="marketplace"
						/>
						<h1 className="text-lg font-extralight tracking-wider text-[#BDF3FF]">Marketplace</h1>
					</div>
					<div className="center glassEffect absolute left-24 top-56 h-48 w-64 flex-col gap-2 rounded-xl">
						<img
							src={new URL(`./Assets/bg-data.png`, import.meta.url).href}
							alt="bg-data"
							className="absolute -top-20 -left-10 -z-10"
						/>
						<img
							src={new URL(`./Assets/data.png`, import.meta.url).href}
							alt="data"
						/>
						<h1 className="text-lg font-extralight tracking-wider text-[#BDF3FF]">
							Data Protection
						</h1>
					</div>
					<div className="center glassEffect absolute left-72 top-28 h-48 w-64 flex-col gap-2 rounded-xl">
						<img
							src={new URL(`./Assets/bg-money.png`, import.meta.url).href}
							alt="bg-money"
							className="absolute -top-24 left-10 -z-10"
						/>
						<img
							src={new URL(`./Assets/money.png`, import.meta.url).href}
							alt="money"
						/>
						<h1 className="text-lg font-extralight tracking-wider text-[#BDF3FF]">
							Money Protection
						</h1>
					</div>

					<div className="center glassEffect absolute left-96 top-80 h-48 w-64 flex-col gap-2 rounded-xl">
						<img
							src={new URL(`./Assets/bg-secure.png`, import.meta.url).href}
							alt="bg-secure"
							className="absolute -top-24 left-10 -z-10"
						/>
						<img
							src={new URL(`./Assets/secure.png`, import.meta.url).href}
							alt="secure"
						/>
						<h1 className="text-lg font-extralight tracking-wider text-[#BDF3FF]">Fast & Secure</h1>
					</div>
				</div>
			</div>
		</section>
	);
}
