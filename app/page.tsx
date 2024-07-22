import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from './api/auth/[...nextauth]/route';
import ProductCard from './components/ProductCard';

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<main>
			<h1>Hello {session?.user?.name}</h1>
			<Link href='/users'>Users</Link>
			<Link
				style={{ display: 'block' }}
				href='/products/grocery/dairy/milk'
			>
				/products/grocery/dairy/milk{' '}
			</Link>
			<Link style={{ display: 'block' }} href='/products'>
				/products no funciona
			</Link>
			<Link
				style={{ display: 'block' }}
				href='/cities/castillaLaMancha/Cuenca/Chillaron'
			>
				/cities/castillaLaMancha/Cuenca/Chillaron
			</Link>
			<Link style={{ display: 'block' }} href='/cities'>
				/cities parametro opcional
			</Link>
			<ProductCard />
		</main>
	);
}
