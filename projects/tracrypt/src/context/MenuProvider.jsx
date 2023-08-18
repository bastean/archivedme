import { useState, createContext } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<MenuContext.Provider
			value={{
				showMenu,
				setShowMenu
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

export default MenuContext;
