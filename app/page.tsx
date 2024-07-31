// a pesar de que  es un archivo .jpg, se visualiza como un archivo .webp
// el tamaño aparece como memorizado, si desactivamos la cache, se puede ver el tamaño reducido
// import dj from '@/public/images/dj.jpg';
import Image from 'next/image';

export default async function Home() {
	return (
		<main className='relative h-screen'>
			<Image
				// src={dj}
				// alt='dj'
				src='https://bit.ly/react-cover'
				alt='react logo'
				fill
				// style={{ objectFit: 'contain' }}
				// style={{ objectFit: 'cover' }}
				className='object-cover'
				sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
				quality={100}
				priority
			/>
		</main>
	);
}
