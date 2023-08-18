import create from 'zustand';

const createActions = (set) => ({
	setAlertData: (alertData) => set({ alertData }),

	setShowingAlert: () => set((state) => ({ showingAlert: !state.showingAlert })),

	setRedirect: (redirect) => {
		if (redirect) {
			return setTimeout(() => {
				set({ redirect });
			}, 3000);
		}

		set({ redirect });
	}
});

export const useAlertDataStore = create((set) => ({
	alertData: {},
	showingAlert: false,
	redirect: false,
	...createActions(set)
}));
