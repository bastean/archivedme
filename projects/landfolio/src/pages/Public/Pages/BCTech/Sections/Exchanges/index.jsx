export function Exchanges() {
	return (
		<section
			data-aos="flip-up"
			className="center w-full rounded-lg bg-[#091D18]/50 p-10 lg:h-[258px] lg:rounded-full lg:p-0"
		>
			<div className="center flex w-full flex-wrap gap-20">
				<img
					src={new URL(`./Assets/coinbase.png`, import.meta.url).href}
					alt="coinbase"
				/>
				<img
					src={new URL(`./Assets/blockchain.png`, import.meta.url).href}
					alt="blockchain"
				/>
				<img
					src={new URL(`./Assets/binance.png`, import.meta.url).href}
					alt="binance"
				/>
				<img
					src={new URL(`./Assets/bitmex.png`, import.meta.url).href}
					alt="bitmex"
				/>
			</div>
		</section>
	);
}
