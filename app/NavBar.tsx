'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const NavBar = () => {
	const { status, data: session } = useSession();
	return (
		<nav className='flex bg-slate-200 p-3 gap-5'>
			<Link href='/'>Next.js</Link>
			<Link href='/users'>Users</Link>
			<Link className='font-extrabold italic' href='/admin'>
				Admin
			</Link>
			{status === 'loading' ? (
				<div>Loading...</div>
			) : status === 'authenticated' ? (
				<div className='flex gap-5'>
					<p>{session.user?.name}</p>
					<Link href='/api/auth/signout'>Sign out</Link>
				</div>
			) : (
				<div className='flex gap-5'>
					<Link href='/api/auth/signin'>Login</Link>
					<Link href='/signup'>Sign up</Link>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
