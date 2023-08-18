export function Alert({ msg }) {
	return (
		<div className="alertAnimation flex h-10 w-11/12 cursor-default items-center justify-center rounded-xl bg-green-500 font-black tracking-widest text-white opacity-0">
			{msg.toUpperCase()}
		</div>
	);
}
