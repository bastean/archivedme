export function Card({ nftNumber, name, collection, priceETH, priceUSD, change }) {
	return (
		<div className="glassEffect flex h-[470px] w-[325px] cursor-default flex-col items-center justify-center gap-2 rounded-3xl p-5">
			<div className="h-[285px] w-[285px]">
				<img
					src={new URL(`../../Assets/nft-${nftNumber}.png`, import.meta.url).href}
					alt="nft image"
					loading="lazy"
				/>
			</div>
			<div className="h-[58px] w-full">
				<div className="flex flex-col">
					<span className="text-xl font-medium text-white">{name}</span>
					<span className="text-slate-400">{collection}</span>
				</div>
			</div>
			<div className="flex h-[58px] w-full items-center justify-between text-white">
				<div>
					<h1 className="text-xl tracking-wider">{`${priceETH} ETH`}</h1>
					<span className="text-sm font-light tracking-wider">Floor Price</span>
				</div>

				<div className="text-right">
					<h1 className="text-xl tracking-wider">{`$${priceUSD}`}</h1>
					<span
						className={`font-light tracking-wider ${
							Math.sign(change) <= 0 ? 'text-red-500' : 'text-green-500'
						}`}
					>{`${change}%`}</span>
				</div>
			</div>
		</div>
	);
}
