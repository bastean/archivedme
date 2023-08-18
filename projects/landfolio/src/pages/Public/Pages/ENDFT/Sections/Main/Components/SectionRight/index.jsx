import { Glass } from '@pages/Public/Pages/ENDFT/Sections/Main/Components';

export function SectionRight() {
	return (
		<div className="hidden h-full w-1/2 xl:flex">
			<div className="flex h-full w-full items-center justify-center pb-24">
				<img
					src={new URL(`../../Assets/main-nft.png`, import.meta.url).href}
					alt="main nft"
					className="z-10"
				/>
				<Glass customClass="h-80 w-96 -translate-x-24 -translate-y-32" />

				<Glass customClass="z-20 flex h-20 translate-x-48 -translate-y-60 flex-col items-center p-3">
					<h1 className="text-3xl font-bold tracking-wider ">BID NOW!</h1>
					<span className="tracking-wider">Latest Collection</span>
				</Glass>

				<Glass customClass="z-20 flex h-24 translate-x-36 translate-y-32 items-center gap-5 p-3">
					<div>
						<div className="overflow-hidden rounded-3xl">
							<img
								src={new URL(`../../Assets/collection-logo.png`, import.meta.url).href}
								alt="main nft"
							/>
						</div>

						<img
							src={new URL(`../../Assets/verified.png`, import.meta.url).href}
							alt="main nft"
							className="absolute -translate-y-9 translate-x-16"
						/>
					</div>
					<div>
						<h1 className="text-2xl font-semibold tracking-wider ">HAPE #6959</h1>
						<span className="tracking-wider text-black">HAPES PRIME</span>
					</div>
				</Glass>

				<Glass customClass="h-[512px] w-[440px] translate-x-6 translate-y-12" />

				<Glass customClass="z-20 flex h-24 -translate-x-56 translate-y-52 justify-between items-center p-3 gap-6">
					<div>
						<h1 className="text-2xl font-medium tracking-wider ">5.768 ETH</h1>
						<span className="tracking-wider">Latest Bid</span>
					</div>
					<div className="text-right">
						<h1 className="text-2xl font-medium tracking-wider ">$5758.31</h1>
						<span className="tracking-wider text-green-200">+12.45</span>
					</div>
				</Glass>

				<Glass customClass="z-20 flex h-20 -translate-x-52 translate-y-80 flex-col items-start p-3">
					<h1 className="text-2xl font-medium tracking-wider">Auction</h1>
					<span className="tracking-wider">End In</span>
				</Glass>

				<Glass customClass="z-20 flex h-20 translate-x-20 translate-y-[330px] items-center font-medium justify-center gap-5 p-3">
					<div>
						<h1 className="text-center text-3xl font-medium tracking-wider ">17</h1>
						<span className="tracking-wider">Hour</span>
					</div>
					<h1 className="text-4xl">:</h1>
					<div>
						<h1 className="text-center text-3xl tracking-wider ">56</h1>
						<span className="tracking-wider">Minutes</span>
					</div>
					<h1 className="text-4xl">:</h1>
					<div>
						<h1 className="text-center text-3xl tracking-wider ">03</h1>
						<span className="tracking-wider">Seconds</span>
					</div>
				</Glass>
			</div>
		</div>
	);
}
