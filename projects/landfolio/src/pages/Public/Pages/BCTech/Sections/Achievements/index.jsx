export function Achievements() {
	return (
		<section className="z-10 w-full flex-col lg:h-[905px]">
			<div
				data-aos="fade-down"
				className="center w-full flex-col gap-10"
			>
				<div className="center flex-col gap-3 text-center">
					<h2 className="text-3xl font-extralight text-[#80AB9E]">Achievements</h2>

					<h1 className="text-3xl font-bold text-[#F5FBF2]">
						Full Decentralized and Currency Security
					</h1>
				</div>

				<div className="flex gap-8 text-center lg:gap-36">
					<div className="center flex-col">
						<h3 className="text-3xl font-extralight text-[#00E3A5]">1M+</h3>
						<span className="font-extralight tracking-wider text-[#9E9E9E]">Happy Users</span>
					</div>
					<div className="center flex-col">
						<h3 className="text-3xl font-extralight text-[#00E3A5]">200K+</h3>
						<span className="font-extralight tracking-wider text-[#9E9E9E]">Community Assets</span>
					</div>
					<div className="center flex-col">
						<h3 className="text-3xl font-extralight text-[#00E3A5]">20K+</h3>
						<span className="font-extralight tracking-wider text-[#9E9E9E]">Build Community</span>
					</div>
				</div>
			</div>

			<div
				data-aos="fade-up"
				className="center relative bottom-3 -z-10 w-full lg:bottom-12"
			>
				<img
					src={new URL(`./Assets/map.png`, import.meta.url).href}
					alt="map"
					width={2000}
				/>
			</div>
		</section>
	);
}
