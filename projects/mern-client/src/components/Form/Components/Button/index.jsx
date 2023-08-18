export function Button({ type, name, disabled }) {
	return (
		<button
			type={type}
			disabled={disabled}
			className="softHover h-12 w-full rounded-2xl bg-mern-white bg-opacity-10 text-lg font-black tracking-wider text-mern-white hover:bg-opacity-25 hover:text-white"
		>
			{name}
		</button>
	);
}
