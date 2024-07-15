'use client';

import { useEffect } from 'react';

interface Props {
	error: Error;
	reset: () => void;
}

const UsersErrorPage = ({ error, reset }: Props) => {
	useEffect(() => {
		// Log the error to an error reporting service. Sentry
		console.error(error);
	}, [error]);

	return (
		<div>
			<p>An unexpected error has occurred in users </p>
			<button className='btn' onClick={() => reset()}>
				Try again
			</button>
		</div>
	);
};

export default UsersErrorPage;
