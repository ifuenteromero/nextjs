import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
	return (
		<main>
			<h1>Hello World</h1>
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
