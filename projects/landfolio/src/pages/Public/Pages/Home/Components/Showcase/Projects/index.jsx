export function Projects() {
	const loadImage = (url) => {
		return (
			<img
				src={new URL(`../../../Assets/${url}`, import.meta.url).href}
				alt="image"
				loading="lazy"
				width={420}
				className="rounded-3xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-slate-50"
			/>
		);
	};

	return {
		endft: {
			title: (
				<>
					<h1>Discover</h1>
					<h1>Collect, & Sell</h1>
					<h1 className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text font-bold text-transparent">
						Extraordinary
					</h1>
					<h1>NFTs</h1>
				</>
			),
			buttonColor: 'from-landfolio-blue via-landfolio-purple to-landfolio-fuchsia',
			image: loadImage('endft/nft.png'),
			url: '/endft'
		},
		bctech: {
			title: (
				<>
					<h1 className="text-2xl font-extralight text-[#80AB9E]">Build the Future with</h1>
					<h1 className="bg-gradient-to-r from-[#00E3A5] to-[#F5FBF2] bg-clip-text font-bold text-transparent">
						Blockchain Technology and Currency
					</h1>
				</>
			),
			buttonColor: 'from-[#00E3A5] to-[#80AB9E]',
			image: loadImage('bctech/nodes.png'),
			url: '/bctech'
		}
	};
}
