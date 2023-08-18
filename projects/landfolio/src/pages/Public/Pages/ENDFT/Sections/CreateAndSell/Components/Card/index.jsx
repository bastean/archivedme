export function Card({ image, title, description }) {
	return (
		<div className="flex h-[312px] w-[371px] flex-col items-center justify-center gap-5 text-white">
			<div>
				<img
					src={new URL(`../../Assets/${image}.png`, import.meta.url).href}
					alt={image}
					loading="lazy"
				/>
			</div>
			<div>
				<h1>{title}</h1>
			</div>
			<div className="w-[300px] text-center">
				<p>{description}</p>
			</div>
		</div>
	);
}
