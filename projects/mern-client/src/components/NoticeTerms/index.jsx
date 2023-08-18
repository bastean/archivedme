import { Link } from 'react-router-dom';

export function NoticeTerms({ project }) {
	return (
		<div className="contentCenter w-full flex-wrap gap-1 text-sm">
			<span>By clicking Sign Up, you agree to the </span>
			<Link
				to="/terms"
				className="font-normal underline"
			>
				{project} Terms
			</Link>
		</div>
	);
}
