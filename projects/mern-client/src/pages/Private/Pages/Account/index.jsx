import { useState } from 'react';

import { FormDelete, FormEdit, FormPassword, Header, NavBar } from './Components';

export function Account() {
	const [selectedForm, setSelectedForm] = useState('Profile');

	const forms = () => {
		switch (selectedForm) {
			case 'Profile':
				return <FormEdit />;

			case 'Password':
				return <FormPassword />;

			case 'Delete':
				return <FormDelete />;
		}
	};

	return (
		<div className="flex flex-col gap-6">
			<Header />
			<div className="flex w-full flex-col gap-10">
				<NavBar
					setSelectedForm={setSelectedForm}
					selectedForm={selectedForm}
				/>

				{forms()}
			</div>
		</div>
	);
}
