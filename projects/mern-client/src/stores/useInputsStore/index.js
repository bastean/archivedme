import create from 'zustand';

const createActions = (set, get) => ({
	setName: (name) =>
		set((state) => ({
			inputs: { ...state.inputs, name }
		})),

	setEmail: (email) =>
		set((state) => ({
			inputs: { ...state.inputs, email }
		})),

	setPassword: (password) =>
		set((state) => ({
			inputs: { ...state.inputs, password }
		})),

	setNewPassword: (newPassword) =>
		set((state) => ({
			inputs: { ...state.inputs, newPassword }
		})),

	setRepeatPassword: (repeatPassword) =>
		set((state) => ({
			inputs: { ...state.inputs, repeatPassword }
		})),

	setRecaptchaToken: (recaptchaToken) =>
		set((state) => ({
			inputs: { ...state.inputs, recaptchaToken }
		})),

	inputsData: () => get().inputs,

	cleanStore: () => {
		const inputsClean = Object.keys(get().inputs).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
		set({ inputs: inputsClean });
	}
});

export const useInputsStore = create((set, get) => ({
	inputs: {
		name: '',
		email: '',
		password: '',
		newPassword: '',
		repeatPassword: '',
		recaptchaToken: ''
	},
	...createActions(set, get)
}));
