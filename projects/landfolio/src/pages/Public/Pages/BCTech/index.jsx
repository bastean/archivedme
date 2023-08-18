import {
	AboutUs,
	Achievements,
	Exchanges,
	Footer,
	Header,
	Main,
	Process,
	Reviews
} from './Sections';

export function BCTech() {
	document.title = 'B.CTech';

	return (
		<div
			id="bctech"
			className="w-full bg-[#0D0D0D] py-10"
		>
			<div className="container mx-auto flex h-full cursor-default flex-col gap-20 overflow-hidden px-2 lg:px-5">
				<Header />
				<Main />
				<Achievements />
				<Exchanges />
				<AboutUs />
				<Process />
				<Reviews />
				<Footer />
			</div>
		</div>
	);
}
