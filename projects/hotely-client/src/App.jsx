import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { RegisterProvider } from './context/pubContext/RegisterProvider';
import { AuthProvider } from './context/privContext/AuthProvider';
import { BookingProvider } from './context/privContext/BookingProvider';

import PubAppLayout from './layout/PubAppLayout';
import GenPubPage from './pages/pubPages/GenPubPage';
import Terms from './pages/pubPages/Terms';

import PrivAppLayout from './layout/PrivAppLayout';
import HotelAdmin from './pages/privPages/HotelAdmin';
import HotelProfile from './pages/privPages/HotelProfile';

function App() {
	return (
		<BrowserRouter>
			<RegisterProvider>
				<AuthProvider>
					<BookingProvider>
						<Routes>
							{/* Public Routes (noAuth) */}
							<Route
								path="/"
								element={<PubAppLayout />}
							>
								<Route
									index
									element={
										<GenPubPage
											aboutType="login"
											formType="login"
										/>
									}
								/>
								<Route
									path="register"
									element={
										<GenPubPage
											aboutType="register"
											formType="register"
										/>
									}
								/>
								<Route
									path="email-confirm/:emailToken"
									element={
										<GenPubPage
											aboutType="email-confirm"
											formType="login"
										/>
									}
								/>
								<Route
									path="forgot-password"
									element={
										<GenPubPage
											aboutType="forgot-password"
											formType="forgot-password"
										/>
									}
								/>
								<Route
									path="forgot-password/:emailToken"
									element={
										<GenPubPage
											aboutType="password-reset"
											formType="password-reset"
										/>
									}
								/>
								<Route
									path="/terms"
									element={<Terms />}
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

							{/* Private Routes (Auth) */}
							<Route
								path="/hotel"
								element={<PrivAppLayout />}
							>
								<Route
									index
									element={<HotelAdmin />}
								/>
								<Route
									path="profile"
									element={<HotelProfile />}
								/>
								<Route
									path="*"
									element={
										<Navigate
											to="/hotel"
											replace
										/>
									}
								/>
							</Route>
						</Routes>
					</BookingProvider>
				</AuthProvider>
			</RegisterProvider>
		</BrowserRouter>
	);
}

export default App;
