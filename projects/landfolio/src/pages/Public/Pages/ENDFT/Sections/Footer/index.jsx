import { Logo } from '@pages/Public/Pages/ENDFT/Sections/Header/Components';

export function Footer() {
	return (
		<section className="flex h-full w-full cursor-default flex-col items-center justify-center overflow-hidden">
			<div className="absolute hidden h-[1338px] -translate-y-80 overflow-hidden xl:flex">
				<img
					src={new URL(`./Assets/bg-effect.png`, import.meta.url).href}
					alt="background effect"
					loading="lazy"
					width={2000}
					data-aos="fade-zoom-in"
				/>
			</div>
			<div
				data-aos="fade-zoom-in"
				className="z-10 flex w-full translate-y-10 flex-col items-center justify-center bg-[#0E1135] xl:h-[1064px]"
			>
				<div className="flex h-full w-full flex-col items-center justify-between gap-10 p-20 lg:w-[1368px]">
					<div
						data-aos="fade-down"
						className="flex w-[350px] flex-col items-center gap-10 border-b-[1px] border-white/50 pb-5 text-center text-white lg:h-[368px] lg:w-full lg:p-5"
					>
						<h1 className="text-4xl lg:text-6xl">Get More Updates</h1>
						<p className="text-xl">
							Join our mailing list to stay in the loop with our newest feature releases, NFT drops,
							and tips and tricks{' '}
						</p>
						<div className="flex h-[60px] items-center justify-between gap-10 rounded-full bg-[#D9D9D9] p-1 pl-2 lg:w-[865px] lg:pl-20">
							<span className="text-lg text-black/50">Your Email...</span>
							<button className="h-full rounded-full bg-[#2F80ED] px-10 py-2 lg:px-14">
								I’m In
							</button>
						</div>
					</div>
					<div
						data-aos="fade-down"
						className="flex w-[350px] flex-col items-center justify-between gap-16 lg:w-full lg:px-16 xl:flex-row xl:gap-0"
					>
						<div className="flex h-full w-[350px] flex-col items-center justify-center gap-6 xl:items-start">
							<Logo />
							<p className="text-center text-lg text-white xl:text-start">
								The Leading NFT Marketplace On Ethereum Home To The Next Generation Of Digital
								Creators. Discover The Best NFT Collections.
							</p>
							<div className="flex w-full justify-center gap-10 xl:justify-start">
								<img
									src={new URL(`./Assets/discord.png`, import.meta.url).href}
									alt="discord"
									loading="lazy"
								/>
								<img
									src={new URL(`./Assets/twitter.png`, import.meta.url).href}
									alt="twitter"
									loading="lazy"
								/>
								<img
									src={new URL(`./Assets/instagram.png`, import.meta.url).href}
									alt="instagram"
									loading="lazy"
								/>
								<img
									src={new URL(`./Assets/youtube.png`, import.meta.url).href}
									alt="youtube"
									loading="lazy"
								/>
							</div>
						</div>
						<div
							data-aos="fade-down"
							className="flex h-full flex-col items-center justify-center gap-10 text-white xl:items-start"
						>
							<h1 className="text-4xl">Marketplace</h1>
							<ul className="flex flex-col gap-5 text-center xl:text-start">
								<li>
									<a href="">Explore</a>
								</li>
								<li>
									<a href="">Articles</a>
								</li>
								<li>
									<a href="">How It Works</a>
								</li>
								<li>
									<a href="">Help</a>
								</li>
							</ul>
						</div>
						<div
							data-aos="fade-down"
							className="flex h-full flex-col items-center justify-center gap-10 text-white xl:items-start"
						>
							<h1 className="text-4xl">Links</h1>
							<ul className="flex w-full flex-col gap-5 text-center xl:text-start">
								<li>
									<a href="">Tokens</a>
								</li>
								<li>
									<a href="">API</a>
								</li>
								<li>
									<a href="">Bug Bounty</a>
								</li>
								<li>
									<a href="">Become Partners</a>
								</li>
							</ul>
						</div>
					</div>
					<div
						data-aos="fade-up"
						className="flex w-[350px] flex-col gap-2 text-center"
					>
						<h1 className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-center text-xl font-bold text-transparent">
							<a
								href="https://www.figma.com/community/file/1131138961524331153"
								rel="noopener noreferrer"
								target="_blank"
							>
								Design by Yosep Rendi on Figma
							</a>
						</h1>
						<h1 className="text-white/80">© 2022 ENDFT. All Right Reserved</h1>
					</div>
				</div>
			</div>
		</section>
	);
}
