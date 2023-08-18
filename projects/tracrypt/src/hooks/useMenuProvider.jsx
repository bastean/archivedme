import { useContext } from 'react';

import MenuContext from '../context/MenuProvider';

const useMenuProvider = () => {
	return useContext(MenuContext);
};

export default useMenuProvider;
