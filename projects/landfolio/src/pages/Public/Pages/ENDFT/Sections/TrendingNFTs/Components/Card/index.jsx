export function Card({ imageUrl, name, collection, latestBid, from, price, change, main }) {
	return (
		<div className="glassEffect flex cursor-default flex-col items-center justify-center gap-5 rounded-3xl p-5 lg:w-[440px]">
			<div className="w-full overflow-hidden rounded-3xl">
				<img
					src={new URL(`../../Assets/${imageUrl}.png`, import.meta.url).href}
					alt="nft image"
					loading="lazy"
				/>
			</div>
			<div className="flex h-[63px] w-full items-center justify-between">
				<div className="flex items-center gap-2">
					<img
						src={new URL(`../../Assets/${imageUrl}-avatar.png`, import.meta.url).href}
						alt="nft avatar"
						loading="lazy"
					/>
					<div className="flex flex-col">
						<span className={`text-xl font-medium text-white ${main && 'text-[#6A58F1]'}`}>
							{name}
						</span>
						<span className="text-slate-400">{collection}</span>
					</div>
				</div>
				<div>
					<img
						src={new URL(`../../Assets/eth-logo.png`, import.meta.url).href}
						alt="eth logo"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="flex h-[56px] w-full items-center justify-between text-white">
				<div>
					<h1 className="text-xl tracking-wider">{latestBid}</h1>
					<span className="text-sm font-light tracking-wider">Latest Bid</span>
				</div>
				<div>
					<h1 className="text-xl tracking-wider">{from}</h1>
					<span className="text-sm font-light tracking-wider">From</span>
				</div>
				<div className="text-right">
					<h1 className="text-xl tracking-wider">{price}</h1>
					<span
						className={`font-light tracking-wider ${
							Math.sign(change) <= 0 ? 'text-red-500' : 'text-green-500'
						}`}
					>{`${change}%`}</span>
				</div>
			</div>
			{main && (
				<div className="w-full">
					<button className="w-full rounded-full bg-[#2F80ED] px-14 py-3 text-xl text-white">
						Collect Now
					</button>
				</div>
			)}
		</div>
	);
}
