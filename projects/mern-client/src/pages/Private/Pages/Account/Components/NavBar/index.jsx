export function NavBar({ setSelectedForm, selectedForm }) {
	const navBarButton = (btn) => (
		<button
			className={`softHover w-1/3 bg-mern-white bg-opacity-10 py-3 text-xl font-extralight tracking-wider hover:bg-opacity-25 hover:text-gray-300 
            ${btn.roundedLeft && 'rounded-l-lg'} 
            ${btn.roundedRight && 'rounded-r-lg'}
            ${selectedForm === btn.name && 'bg-opacity-25 text-gray-300'}`}
			onClick={() => {
				setSelectedForm(btn.name);
			}}
		>
			{btn.name}
		</button>
	);

	return (
		<nav className="first: flex w-full justify-evenly gap-1 rounded-2xl text-mern-white">
			{navBarButton({ name: 'Profile', roundedLeft: true })}
			{navBarButton({ name: 'Password' })}
			{navBarButton({ name: 'Delete', roundedRight: true })}
		</nav>
	);
}
