import { Card } from './Components';

export function TopCategories() {
	return (
		<section className="flex w-full flex-col items-center justify-center gap-20">
			<h1
				data-aos="fade-down"
				className="bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] bg-clip-text text-center text-5xl font-bold text-transparent"
			>
				Top Categories
			</h1>
			<div
				data-aos="fade-up"
				className="flex w-full flex-wrap items-center justify-center gap-6"
			>
				<Card name="art" />
				<Card name="collectibles" />
				<Card name="metaverse" />
			</div>
			<div
				data-aos="fade-zoom-in"
				className="flex h-10 w-full justify-center"
			>
				<button className="flex items-center rounded-full border-2 px-14 py-2 text-white">
					see more
				</button>
			</div>
		</section>
	);
}
