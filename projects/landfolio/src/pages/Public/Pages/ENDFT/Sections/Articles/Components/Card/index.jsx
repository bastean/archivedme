export function Card({ imageNumber, title, date }) {
	return (
		<div className="glassEffect flex max-w-[440px] cursor-default flex-col items-center gap-1 rounded-3xl xs:h-[426px] xs:w-[440px]">
			<div>
				<img
					src={new URL(`../../Assets/image-${imageNumber}.png`, import.meta.url).href}
					alt={`image-${imageNumber}`}
					loading="lazy"
				/>
			</div>
			<div className="flex flex-col gap-10 p-5">
				<h1 className="text-xl text-white">{title}</h1>
				<span className="text-slate-400">{date}</span>
			</div>
		</div>
	);
}
