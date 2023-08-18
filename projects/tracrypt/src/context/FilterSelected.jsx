import { createContext, useState } from 'react';

const FilterContext = createContext();

export const FilterSelected = ({ children }) => {
	const [selectedCurrency, setSelectedCurrency] = useState('usd');
	const [orderChoose, setOrderChoose] = useState('Mkt Cap');

	return (
		<FilterContext.Provider
			value={{
				selectedCurrency,
				setSelectedCurrency,
				orderChoose,
				setOrderChoose
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterContext;
