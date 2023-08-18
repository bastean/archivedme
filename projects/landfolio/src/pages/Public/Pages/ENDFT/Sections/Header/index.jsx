import { Logo, NavBar } from './Components';

export function Header() {
	return (
		<header className="flex w-full items-center justify-between">
			<div data-aos="fade-right">
				<Logo />
			</div>
			<div data-aos="fade-left">
				<NavBar />
			</div>
		</header>
	);
}
