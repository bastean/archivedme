import create from 'zustand';
import { persist } from 'zustand/middleware';

const createActions = (set) => ({
	setJWToken: (jwtoken) => set({ jwtoken }),

	removeJWToken: () => set({ jwtoken: '' })
});

export const useJWTStore = create(
	persist(
		(set) => ({
			jwtoken: '',
			...createActions(set)
		}),
		{
			name: import.meta.env.VITE_JWT_STORED_NAME
		}
	)
);
