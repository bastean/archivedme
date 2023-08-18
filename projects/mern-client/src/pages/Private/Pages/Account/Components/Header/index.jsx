import { useUserAuthStore } from '@stores';

export function Header() {
	const { userSignOut } = useUserAuthStore();
	return (
		<div className="flex w-full items-center gap-1 text-center text-xl font-black tracking-wider text-mern-white">
			<div className="softHover w-3/5 cursor-default rounded-l-lg bg-mern-white bg-opacity-30 py-3 text-gray-300">
				Account
			</div>
			<button
				className="softHover w-2/5 rounded-r-lg bg-mern-white bg-opacity-20 py-3 tracking-wider hover:bg-red-900 hover:text-gray-300"
				onClick={userSignOut}
			>
				Sign Out
			</button>
		</div>
	);
}
