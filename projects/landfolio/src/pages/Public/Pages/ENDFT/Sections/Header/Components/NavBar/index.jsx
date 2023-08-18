export function NavBar() {
	return (
		<nav>
			<ul className="flex gap-6 font-light text-landfolio-white xl:gap-20">
				<div className="hidden gap-6 lg:flex xl:gap-20">
					<li>
						<a href="">Marketplace</a>
					</li>

					<li>
						<a href="">Collection</a>
					</li>

					<li>
						<a href="">Community</a>
					</li>

					<li>
						<a href="">Create</a>
					</li>
				</div>

				<li>
					<a
						className="rounded-full bg-[#2F80ED] px-2 py-3 text-sm lg:px-5 lg:text-base"
						href=""
					>
						Connect Wallet
					</a>
				</li>
			</ul>
		</nav>
	);
}
