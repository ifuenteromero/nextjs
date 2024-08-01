'use client';
import { useState } from 'react';

const AdminHomePage = () => {
	const [isVisible, setVisible] = useState(false);

	return (
		<div className='font-poppins'>
			<p>AdminPage</p>

			<button
				onClick={async () => {
					const users = [{ name: 'c' }, { name: 'a' }, { name: 'b' }];
					const _ = (await import('lodash')).default;
					const sortedUsers = _.sortBy(users, 'name');
					console.log({ sortedUsers });
				}}
			>
				Show
			</button>
		</div>
	);
};

export default AdminHomePage;
