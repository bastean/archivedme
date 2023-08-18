import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Common } from '@layouts';

import { Public } from '@pages';

import { ServiceWorker } from '@services';

export function App() {
	useEffect(() => {
		ServiceWorker.register();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={Common.root}
				>
					{/* Publics */}
					<Route
						index
						element={Public.home}
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
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
