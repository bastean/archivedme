export function SectionLeft() {
	return (
		<section className="h-full w-full xs:w-1/2">
			<div className="flex h-full w-full flex-col items-center justify-center gap-10 text-white xs:gap-14 xl:items-start">
				<div className="cursor-default text-center text-4xl tracking-wider xs:text-6xl xl:text-left">
					<h1>Discover</h1>
					<h1>Collect, & Sell</h1>
					<h1 className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text font-bold text-transparent">
						Extraordinary
					</h1>
					<h1>NFTs</h1>
				</div>

				<div className="w-[340px] cursor-default text-center text-sm xs:w-[420px] xs:text-lg xl:text-left">
					<p>
						The Leading NFT Marketplace On Ethereum Home To The Next Generation Of Digital Creators.
					</p>
					<p>Discover The Best NFT Collections</p>
				</div>

				<div className="flex flex-col gap-6 text-lg xs:flex-row xs:gap-16">
					<button className="rounded-full bg-[#2F80ED] px-14 py-2">Explore</button>
					<button className="rounded-full border-2 px-14 py-2">Create</button>
				</div>

				<div className="flex cursor-default gap-10 text-center text-xl font-semibold tracking-wide xs:pl-4 xs:text-4xl">
					<div>
						<h1>432K</h1>
						<span className="text-sm font-extralight xs:text-lg">Collections</span>
					</div>
					<div>
						<h1>200K</h1>
						<span className="text-sm font-extralight xs:text-lg">Artist</span>
					</div>
					<div>
						<h1>10K</h1>
						<span className="text-sm font-extralight xs:text-lg">Community</span>
					</div>
				</div>
			</div>
		</section>
	);
}
