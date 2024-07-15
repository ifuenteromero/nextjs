'use client';

import { useEffect } from 'react';

// To specifically handle errors in root layout.js,
// use a variation of error.js called app/global-error.js
// located in the root app directory.

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<html>
			<body>
				<h2>Something went wrong!</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}
