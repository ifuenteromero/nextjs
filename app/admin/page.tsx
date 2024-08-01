'use client';
import { useState } from 'react';
import HeavyComponent from '../components/HeavyComponent';

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
