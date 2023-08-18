export function Card({ name }) {
	return (
		<div className="glassEffect flex cursor-default flex-col items-center justify-center gap-5 rounded-3xl p-5 lg:h-[385px] lg:w-[445px]">
			<div className="flex gap-2 lg:h-[295px] lg:w-[404px]">
				<div className="flex flex-col gap-2">
					<img
						src={new URL(`../../Assets/nft-${name}-01.png`, import.meta.url).href}
						alt="nft image"
						loading="lazy"
					/>
					<img
						src={new URL(`../../Assets/nft-${name}-02.png`, import.meta.url).href}
						alt="nft image"
						loading="lazy"
					/>
				</div>
				<div>
					<img
						src={new URL(`../../Assets/nft-${name}-03.png`, import.meta.url).href}
						alt="nft image"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="h-[33px] w-full text-center">
				<h1 className="text-2xl text-white">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
			</div>
		</div>
	);
}
