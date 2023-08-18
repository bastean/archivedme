import { Link } from 'react-router-dom';

export function Links({ sectionLeft, sectionRight }) {
	const linkButton = (link, name) => (
		<Link
			to={link}
			className="softHover text-center opacity-75 hover:opacity-100"
		>
			{name}
		</Link>
	);

	return (
		<>
			<div className="flex w-full items-center justify-between">
				{linkButton(sectionLeft.link, sectionLeft.name)}
				{linkButton(sectionRight.link, sectionRight.name)}
			</div>
		</>
	);
}
