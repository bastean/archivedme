export function Input({ inputType, inputValue, setInputValue, spanText, downUpEffect = true }) {
	return (
		<div className="downUpEffect relative w-full">
			<input
				type={inputType}
				value={inputValue}
				{...(downUpEffect && { placeholder: ' ' })}
				className={`w-full border-b-[1px] border-mern-white bg-transparent py-1 pl-1 text-mern-white outline-none`}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<span className="softHover pointer-events-none absolute left-1 translate-y-0 text-xl font-extralight tracking-wider text-mern-white text-opacity-70">
				{spanText}
			</span>
		</div>
	);
}
