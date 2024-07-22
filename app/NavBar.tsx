'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const NavBar = () => {
	const { status, data: session } = useSession();
	return (
		<nav className='flex bg-slate-200 p-3 gap-5'>
			<Link href='/'>Next.js</Link>
			<Link href='/users'>Users</Link>
			<Link href='/admin'>Admin</Link>
			{status === 'loading' ? (
				<div>Loading...</div>
			) : status === 'authenticated' ? (
				<div>{session.user?.name}</div>
			) : (
				<Link href='/api/auth/signin'>Login</Link>
			)}
		</nav>
	);
};

export default NavBar;
