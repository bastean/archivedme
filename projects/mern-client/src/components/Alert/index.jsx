import { Icon } from '@components';

export function Alert({ data }) {
	if (!data?.msg) return;

	return (
		<div
			className={`alertAnimation contentCenter fixed right-0 top-5 z-50 w-max cursor-default gap-2 rounded-l-md bg-opacity-75 p-3 text-center text-xs font-bold uppercase text-white opacity-0 transition-all duration-200 ease-out md:right-5 md:rounded-md md:text-sm ${
				data.error ? 'bg-red-400' : 'bg-green-400'
			}`}
			id="alertMessage"
		>
			{data.error ? Icon.error : Icon.success}
			{data.msg}
		</div>
	);
}
