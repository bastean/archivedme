import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { FilterSelected } from './context/FilterSelected';
import { MenuProvider } from './context/MenuProvider';

import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage';

function App() {
	return (
		<BrowserRouter>
			<MenuProvider>
				<FilterSelected>
					<Routes>
						<Route
							path="/"
							element={<AppLayout />}
						>
							<Route
								index
								element={<HomePage />}
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
				</FilterSelected>
			</MenuProvider>
		</BrowserRouter>
	);
}

export default App;
