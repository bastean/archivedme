import { SectionLeft, SectionRight } from './Components';

export function Main() {
	return (
		<main
			data-aos="fade-up"
			className="flex h-[calc(100vh-150px)] w-full flex-col items-center xl:flex-row"
		>
			<SectionLeft />
			<SectionRight />
		</main>
	);
}
