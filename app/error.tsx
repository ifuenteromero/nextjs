'use client';

import { useEffect } from 'react';

interface Props {
	error: Error;
	reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
	useEffect(() => {
		// Log the error to an error reporting service. Sentry
		console.error(error);
	}, [error]);

	<div>
		<p>An unexpected error has occurred</p>
		<button className='btn' onClick={() => reset()}>
			Retry
		</button>
	</div>;
};

export default ErrorPage;
