import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Common } from '@layouts';

import { Private, Public } from '@pages';

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
						element={Public.login}
					/>

					<Route
						path="register"
						element={Public.register}
					/>

					<Route
						path="email-confirm/:emailToken"
						element={Public.login}
					/>

					<Route
						path="forgot-password"
						element={Public.forgotPassword}
					/>

					<Route
						path="forgot-password/:emailToken"
						element={Public.resetPassword}
					/>

					<Route
						path="/terms"
						element={Public.terms}
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

					{/* Privates */}
					<Route
						path="/account"
						element={Private.verifyAuth}
					>
						<Route
							index
							element={Private.account}
						/>

						<Route
							path="*"
							element={
								<Navigate
									to="/account"
									replace
								/>
							}
						/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
