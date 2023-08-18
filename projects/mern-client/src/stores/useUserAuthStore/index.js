import create from 'zustand';

import { useJWTStore } from '@stores';

const createActions = (set) => ({
	setUser: (user) => set({ user }),

	setAuthLoading: (authLoading) => set({ authLoading }),

	userSignOut: () => {
		if (useJWTStore.getState().jwtoken) {
			useJWTStore.getState().removeJWToken();
		}
		set({ user: {} });
	}
});

export const useUserAuthStore = create((set) => ({
	user: {},
	authLoading: true,
	...createActions(set)
}));
