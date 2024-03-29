const Alert = ({ alert }) => {
	return (
		<div
			className={`alertAnimation fixed bottom-5 right-0 z-50 flex w-max items-center justify-center gap-2 rounded-l-md bg-opacity-75 p-3 text-center text-xs font-bold uppercase text-white opacity-0 transition-all duration-200 ease-out md:top-5 md:right-5 md:bottom-auto md:rounded-md md:text-sm ${
				alert.error ? 'bg-red-400' : 'bg-green-400'
			}`}
			id="alertMessage"
		>
			{alert.error ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="#fff"
						strokeWidth="2"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
					></path>
					<path
						stroke="#fff"
						strokeLinecap="round"
						strokeWidth="2"
						d="M12 16.5v.5m0-10v6-6z"
					></path>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="#fff"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M8 12.5l3 3 5-6"
					></path>
					<path
						stroke="#fff"
						strokeWidth="2"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
					></path>
				</svg>
			)}
			{alert.msg}
		</div>
	);
};

export default Alert;
