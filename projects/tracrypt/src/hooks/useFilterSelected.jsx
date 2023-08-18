import { useContext } from 'react';

import FilterContext from '../context/FilterSelected';

const useFilterSelected = () => {
	return useContext(FilterContext);
};

export default useFilterSelected;
