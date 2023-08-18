import useFilterSelected from '../../hooks/useFilterSelected';

const ButtonFiat = ({ fiatCurrency }) => {
	const { selectedCurrency, setSelectedCurrency } = useFilterSelected();
	return (
		<button
			className={`w-1/2 bg-tracrypt-gr-dk py-2 ${
				selectedCurrency === fiatCurrency.toLowerCase() ? 'bg-tracrypt-bl-dk' : `bg-tracrypt-dk`
			}`}
			onClick={() => {
				setSelectedCurrency(fiatCurrency.toLowerCase());
			}}
		>
			{fiatCurrency.toUpperCase()}
		</button>
	);
};

export default ButtonFiat;
