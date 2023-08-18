export function Main() {
	return (
		<main className="center w-full p-1">
			<div className="center absolute top-0 left-0 w-full overflow-hidden">
				<img
					src={new URL(`./Assets/bg-01.png`, import.meta.url).href}
					alt="bg-01"
					width={2000}
					data-aos="zoom-out"
				/>
			</div>
			<div className="z-10 flex h-[calc(100vh-224px)] w-full flex-col lg:flex-row">
				<div
					data-aos="fade-right"
					className="flex h-full w-full flex-col items-center justify-center gap-8 text-center lg:w-1/2 lg:items-start lg:text-left"
				>
					<h2 className="text-2xl font-extralight text-[#80AB9E] lg:text-4xl">
						Build the Future with
					</h2>
					<h1 className="text-4xl font-bold text-[#F5FBF2] lg:text-6xl">
						Blockchain technology and Currency
					</h1>
					<button className="h-[72px] w-[318px] rounded-lg bg-[#00E3A5] text-xl font-semibold shadow-lg shadow-[#00E3A5]/50">
						Get Whitepaper
					</button>
				</div>
				<div
					data-aos="fade-left"
					className="center h-full w-full lg:w-1/2"
				>
					<img
						src={new URL(`./Assets/nodes.png`, import.meta.url).href}
						alt="bg-01"
						width={2000}
					/>
				</div>
			</div>
		</main>
	);
}
