import { Card } from './Components';

export function Articles() {
	return (
		<section className="flex w-full flex-col items-center justify-center gap-16">
			<h1
				data-aos="fade-down"
				className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-5xl font-bold text-transparent"
			>
				Articles
			</h1>
			<div
				data-aos="fade-up"
				className="flex w-full flex-col items-center justify-between gap-6 xl:flex-row"
			>
				<Card
					imageNumber="01"
					title="We've lowered marketplace fees on all your favorite NFTs"
					date="January 23, 2022"
				/>
				<Card
					imageNumber="02"
					title="Your Ultimate Guide to Getting Started With NFTs on Rarible"
					date="April 03, 2022"
				/>
				<Card
					imageNumber="03"
					title="Why Community Marketplaces are the future of NFT trading"
					date="July 7, 2022"
				/>
			</div>
			<div
				data-aos="fade-zoom-in"
				className="flex h-10 w-full justify-center"
			>
				<button className="flex items-center rounded-full border-2 px-14 py-2 text-white">
					see more
				</button>
			</div>
		</section>
	);
}
