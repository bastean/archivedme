import Filter from '../components/aside/Filter';
import CryptoTable from '../components/main/CryptoTable';

const CryptoData = () => {
	return (
		<>
			<div className="flex h-screen xl:mx-auto xl:gap-6 2xl:gap-12">
				<Filter />
				<CryptoTable />
			</div>
		</>
	);
};

export default CryptoData;
