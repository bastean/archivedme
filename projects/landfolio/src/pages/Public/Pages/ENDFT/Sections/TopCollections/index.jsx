import { Card, LogoBg } from './Components';

export function TopCollections() {
	const filterBtn = (name) => {
		return (
			<button
				className={`flex items-center rounded-full border-2 px-10 py-3 text-xl text-white ${
					name === 'Art' && 'border-0 bg-[#2F80ED]'
				}`}
			>
				{name}
			</button>
		);
	};

	return (
		<section className="flex w-full justify-center">
			<div
				data-aos="fade-zoom-in"
				className="absolute w-full overflow-hidden"
			>
				<LogoBg />
			</div>
			<div className="flex w-[90%] flex-col items-center justify-center gap-20">
				<h1
					data-aos="fade-down"
					className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-center text-5xl font-bold text-transparent"
				>
					Top Collections
				</h1>
				<div
					data-aos="flip-up"
					className="flex w-full flex-col flex-wrap items-center justify-between gap-5 xl:flex-row xl:gap-0"
				>
					{filterBtn('Art')}
					{filterBtn('Collectibles')}
					{filterBtn('Metaverse')}
					{filterBtn('Virtual Worlds')}
					{filterBtn('Sports')}
					{filterBtn('Music')}
				</div>
				<div
					data-aos="fade-up"
					className="flex w-full flex-col items-center justify-center gap-10 xl:gap-20"
				>
					<div className="flex w-full flex-wrap items-center justify-center gap-10 xl:flex-row">
						<Card
							nftNumber="01"
							name="COOLGUYZZ"
							collection="Coolguyzz"
							priceETH="1.5"
							priceUSD="2045.12"
							change="-12.45"
						/>
						<Card
							nftNumber="02"
							name="gangstaboi v.1"
							collection="GB_Gangs"
							priceETH="2.53"
							priceUSD="4487"
							change="+34.5"
						/>
						<Card
							nftNumber="03"
							name="HyperApe"
							collection="HyperApe"
							priceETH="1.31"
							priceUSD="1743.4"
							change="-5.6"
						/>
					</div>
					<div className="flex w-full flex-wrap items-center justify-center gap-10 xl:flex-row">
						<Card
							nftNumber="04"
							name="Lyodd$1"
							collection="Naomi Po"
							priceETH="1.156"
							priceUSD="1670"
							change="+12.45"
						/>
						<Card
							nftNumber="05"
							name="Azuki 3D"
							collection="AZUKI.JP"
							priceETH="1.5"
							priceUSD="1907"
							change="+1.6"
						/>
						<Card
							nftNumber="06"
							name="CuteApe White "
							collection="CuteApe_99"
							priceETH="0.045"
							priceUSD="245.6"
							change="-14.5"
						/>
					</div>
					<div className="flex w-full flex-wrap items-center justify-center gap-10 xl:flex-row">
						<Card
							nftNumber="07"
							name="SneakerHead Vol.1"
							collection="SneakerHead"
							priceETH="1.4"
							priceUSD="1790"
							change="+67.9"
						/>
						<Card
							nftNumber="08"
							name="cvltB3AR"
							collection="CVLTBEAR"
							priceETH="0.88"
							priceUSD="545"
							change="+12.45"
						/>
					</div>
				</div>
				<div
					data-aos="fade-zoom-in"
					className="flex h-10 w-full justify-center"
				>
					<button className="flex items-center rounded-full border-2 px-14 py-2 text-white">
						see more
					</button>
				</div>
			</div>
		</section>
	);
}
