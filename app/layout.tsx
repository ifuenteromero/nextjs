import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import AuthProvider from './auth/Provider';
import './globals.css';
import GoogleAnalyticsScript from './GoogleAnalyticsScript';
import NavBar from './NavBar';

// variable fonts use a single file to represent a wide range of font styles, so we no need to specify the font weight
const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '900'] });

const poppins = localFont({
	src: '../public/fonts/poppins-regular-webfont.woff2',
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'General title',
	description: 'General description',
	openGraph: {
		title: 'General title',
		description: 'General description',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html data-theme='winter' lang='en'>
			<GoogleAnalyticsScript />
			<body className={poppins.variable}>
				<AuthProvider>
					<NavBar />
					<main className='p-5'>{children}</main>
				</AuthProvider>
			</body>
		</html>
	);
}
