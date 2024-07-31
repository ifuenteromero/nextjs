// a pesar de que  es un archivo .jpg, se visualiza como un archivo .webp
// el tamaño aparece como memorizado, si desactivamos la cache, se puede ver el tamaño reducido
import dj from '@/public/images/dj.jpg';
import Image from 'next/image';

export default async function Home() {
	return (
		<main>
			<Image src={dj} alt='dj' />
		</main>
	);
}
