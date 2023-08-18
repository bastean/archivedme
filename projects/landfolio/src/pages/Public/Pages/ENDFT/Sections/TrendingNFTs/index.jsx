import { Card } from './Components';

export function TrendingNFTs() {
	return (
		<section className="flex w-full justify-center">
			<div
				data-aos="fade-zoom-in"
				className="absolute"
			>
				<img
					src={new URL(`./Assets/bg-effect.png`, import.meta.url).href}
					alt="background effect"
					loading="lazy"
					className="-z-10 hidden -translate-y-[500px] xl:flex"
					width={2000}
				/>
			</div>

			<div className="flex w-full flex-col items-center justify-center gap-20">
				<h1
					data-aos="fade-down"
					className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-center text-5xl font-bold text-transparent"
				>
					Trending NFTs
				</h1>
				<div
					data-aos="fade-up"
					className="flex w-full flex-col items-center justify-center gap-10 xl:flex-row"
				>
					<Card
						imageUrl="nft-02"
						name="CryptoPunk 3D #13"
						collection="3D cryptopunk"
						latestBid="9.61 ETH"
						from="4.12 ETH"
						price="$103,025"
						change="-2.25"
					/>
					<div className="rounded-3xl bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] p-1">
						<div className="rounded-3xl bg-[#141943] lg:w-[440px]">
							<Card
								imageUrl="nft-01"
								name="HAPE #8064"
								collection="HAPE PRIME"
								latestBid="15.8 ETH"
								from="9.45 ETH"
								price="$180,345"
								change="12.45"
								main={true}
							/>
						</div>
					</div>

					<Card
						imageUrl="nft-03"
						name="InvisibleFriend #54"
						collection="INVISIBLE FRIEND"
						latestBid="6.73 ETH"
						from="1.55 ETH"
						price="$9,945.1"
						change="3.57"
					/>
				</div>
				<div className="flex h-10 w-full justify-center">
					<button className="flex items-center rounded-full border-2 px-14 py-2 text-white">
						see more
					</button>
				</div>
			</div>
		</section>
	);
}
