import { useState } from 'react';

import useFilterSelected from '../../hooks/useFilterSelected';

const ButtonMVP = ({ name }) => {
	const { setOrderChoose } = useFilterSelected();
	const [mvpTopLow, setMvpTopLow] = useState(false);

	return (
		<button
			className={`w-1/2 py-2 ${mvpTopLow ? 'hover:bg-green-700' : `hover:bg-red-700`} ${
				name === '24h' ? 'border-x-2 border-x-tracrypt-dk-f' : ''
			}`}
			onClick={() => {
				setOrderChoose(`${mvpTopLow ? name.concat('Top') : name.concat('Low')}`);
				setMvpTopLow(!mvpTopLow);
			}}
		>
			{name}
		</button>
	);
};

export default ButtonMVP;
