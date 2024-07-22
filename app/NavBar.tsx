import Link from 'next/link';

const NavBar = () => {
	return (
		<nav className='flex bg-slate-200 p-3 gap-5'>
			<Link href='/'>Next.js</Link>
			<Link href='/users'>Users</Link>
			<Link href='/admin'>Admin</Link>
			<Link href='/api/auth/signin'>Login</Link>
		</nav>
	);
};

export default NavBar;
