import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Public } from '@pages';

import { ServiceWorker } from '@services';

export function App() {
	useEffect(() => {
		ServiceWorker.register();
		AOS.init();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={Public.home}
				/>
				<Route
					path="/endft"
					element={Public.endft}
				/>
				<Route
					path="/bctech"
					element={Public.bctech}
				/>
				<Route
					path="*"
					element={
						<Navigate
							to="/"
							replace
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
