import {
	Articles,
	CreateAndSell,
	Footer,
	Header,
	Main,
	TopCategories,
	TopCollections,
	TrendingNFTs,
	Wallets
} from './Sections';

export function ENDFT() {
	document.title = 'ENDFT';

	return (
		<div
			className="flex w-full cursor-default flex-col items-center justify-center overflow-hidden bg-[#141943]"
			id="endft"
		>
			<div className="flex w-full flex-col items-center gap-10 p-3 lg:p-10 xl:w-[1280px]">
				<Header />
				<Main />
				<Wallets />
				<div className="flex w-full flex-col items-center gap-80 pt-20 xl:pt-80">
					<TrendingNFTs />
					<TopCollections />
					<TopCategories />
					<CreateAndSell />
					<Articles />
				</div>
			</div>
			<div className="mt-40 flex w-full flex-col">
				<Footer />
			</div>
		</div>
	);
}
