export function Glass({ children, customClass }) {
	return (
		<div
			className={`glassEffect absolute -skew-x-[11deg] cursor-default rounded-3xl text-white ${customClass}`}
		>
			{children}
		</div>
	);
}
