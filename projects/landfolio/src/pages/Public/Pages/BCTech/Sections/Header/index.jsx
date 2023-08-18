import { Logo } from './Components';

export function Header() {
	return (
		<header
			data-aos="fade-down"
			className="center z-50 h-24 w-full rounded-full bg-green-200 bg-opacity-5 px-24 lg:h-36"
		>
			<div className="flex h-20 w-full justify-center lg:justify-between">
				<div className="center">
					<Logo />
				</div>
				<div className="hidden w-2/3 justify-end gap-10 lg:flex">
					<div className="center w-full">
						<ul className="flex w-full cursor-default justify-around text-[#F5FBF2]">
							<li>
								<span className="border-b-2 border-[#00E3A5] pb-3 text-[#00E3A5]">About Us</span>
							</li>
							<li>
								<span>Services</span>
							</li>
							<li>
								<span>How it works</span>
							</li>
							<li>
								<span>Community</span>
							</li>
						</ul>
					</div>
					<div className="center w-64">
						<button className="h-full w-full rounded-md border-2 border-[#00E3A5] text-[#F5FBF2]">
							Join For Free
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
