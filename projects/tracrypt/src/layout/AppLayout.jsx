import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

import RegisterSW from '../pwa/RegisterSW';

const AppLayout = () => {
	useEffect(() => {
		RegisterSW();
	}, []);

	return (
		<>
			<div className="max-w-fill flex max-h-full min-h-full min-w-full flex-col justify-between bg-tracrypt-dk xl:gap-8">
				<Header />
				<Outlet />
			</div>
		</>
	);
};

export default AppLayout;
