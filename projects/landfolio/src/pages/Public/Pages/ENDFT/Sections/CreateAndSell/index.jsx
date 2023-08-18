import { Card } from './Components';

export function CreateAndSell() {
	return (
		<section
			data-aos="fade-up"
			className="glassEffect flex cursor-default flex-col items-center justify-center gap-10 rounded-3xl px-5 py-12"
		>
			<h1
				data-aos="fade-down"
				className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-center text-5xl font-bold text-transparent"
			>
				Create and Sell your NFTs
			</h1>
			<div
				data-aos="fade-zoom-in"
				className="flex flex-col items-center justify-between xl:flex-row "
			>
				<Card
					image="wallet"
					title="Set up your wallet"
					description="Once you’ve set up your wallet of choice, connect it to OpenSea by
					clicking the wallet icon in the top right corner. Learn about the
					wallets we support."
				/>
				<Card
					image="paper"
					title="Upload & Create Collection"
					description="Upload your work then Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
				/>
				<Card
					image="bookmark"
					title="List them for sale"
					description="Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them."
				/>
			</div>
		</section>
	);
}
