import { Logo } from '@pages/Public/Pages/BCTech/Sections/Header/Components';

export function Footer() {
	return (
		<footer className="flex w-full flex-col gap-52 lg:gap-20 lg:p-20">
			<div className="flex w-full flex-col items-center gap-16 lg:flex-row lg:gap-0">
				<div
					data-aos="fade-right"
					className="flex h-96 flex-col gap-20 text-center lg:w-1/2 lg:text-left"
				>
					<div className="flex w-full flex-col items-center gap-5 lg:items-start">
						<Logo />
						<p className="w-full text-lg font-extralight tracking-widest text-[#80AB9E] lg:w-4/5">
							A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text ever since the 1500s.
						</p>
					</div>
					<div className="flex flex-col items-center gap-5 lg:items-start">
						<h1 className="text-2xl font-bold text-[#F5FBF2]">Social Media</h1>
						<div className="flex gap-5">
							<img
								src={new URL(`./Assets/facebook.png`, import.meta.url).href}
								alt="facebook"
							/>
							<img
								src={new URL(`./Assets/twitter.png`, import.meta.url).href}
								alt="twitter"
							/>
							<img
								src={new URL(`./Assets/instagram.png`, import.meta.url).href}
								alt="instagram"
							/>
						</div>
					</div>
				</div>
				<div
					data-aos="fade-left"
					className="flex h-96 w-full flex-col gap-10 lg:w-1/2"
				>
					<div className="flex flex-col gap-10 border-b-2 border-[#FFFFFF]/30 pb-10">
						<h1 className="text-center text-3xl font-bold tracking-widest text-[#F5FBF2] lg:text-left">
							Newsletter
						</h1>
						<div className="flex w-full">
							<div className="flex h-16 w-3/4 items-center border-4 border-[#00E3A5] pl-16">
								<span className="text-xl text-[#E5E5E5]/25">Email Address</span>
							</div>
							<div className="center h-16 w-1/4 bg-[#00E3A5]">
								<span className="text-xl font-black text-[#0D0D0D]">Submit</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-10 px-20 text-center lg:flex-row lg:justify-between lg:gap-0">
						<div className="flex flex-col gap-5">
							<h1 className="text-xl font-bold tracking-widest text-[#F5FBF2]">About Us</h1>
							<ul className="flex flex-col gap-2 text-[#80AB9E]">
								<li>Whitepaper</li>
								<li>Blog</li>
								<li>Activity</li>
							</ul>
						</div>
						<div className="flex flex-col gap-5">
							<h1 className="text-xl font-bold tracking-widest text-[#F5FBF2]">Support</h1>
							<ul className="flex flex-col gap-2 text-[#80AB9E]">
								<li>Help & Support</li>
								<li>Community</li>
								<li>Author Profile</li>
								<li>Contact</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				data-aos="fade-up"
				className="center flex h-24 w-full flex-col gap-2 text-center"
			>
				<h1 className="bg-gradient-to-r from-[#00E3A5] to-[#F5FBF2] bg-clip-text text-center text-xl font-black text-transparent">
					<a
						href="https://www.figma.com/community/file/1115204693250349881"
						rel="noopener noreferrer"
						target="_blank"
					>
						Design by Taqwah on Figma
					</a>
				</h1>
				<h1 className="text-white/80">All rights reserved@2022</h1>
			</div>
		</footer>
	);
}
