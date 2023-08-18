import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Icon } from '@components';

import { MERNServer } from '@services';

import { useJWTStore, useUserAuthStore } from '@stores';

export function VerifyAuth() {
	const { user, authLoading, setAuthLoading } = useUserAuthStore();
	const { jwtoken } = useJWTStore();

	useEffect(() => {
		const userSignIn = async () => {
			if (jwtoken && String(window.location.pathname).toLowerCase().match('/account')) {
				await MERNServer.private.getProfile();

				setAuthLoading(false);
			}
		};
		userSignIn();
	}, []);

	if (jwtoken && authLoading) {
		return <div className="contentCenter h-[363px] w-full">{Icon.loading}</div>;
	}

	if (jwtoken && user?.email) return <Outlet />;

	return (
		<Navigate
			to="/"
			replace
		/>
	);
}
