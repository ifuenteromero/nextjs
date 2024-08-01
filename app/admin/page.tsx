'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const HeavyComponent = dynamic(
	() => import('@/app/components/HeavyComponent'),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);

const AdminHomePage = () => {
	const [isVisible, setVisible] = useState(false);

	return (
		<div className='font-poppins'>
			<p>AdminPage</p>
			{isVisible && <HeavyComponent />}
			<button onClick={() => setVisible(true)}>Show</button>
		</div>
	);
};

export default AdminHomePage;
