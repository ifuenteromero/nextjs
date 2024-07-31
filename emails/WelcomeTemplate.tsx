import {
	Body,
	Container,
	Html,
	Link,
	Preview,
	Tailwind,
	Text,
} from '@react-email/components';
// import { CSSProperties } from 'react';

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Tailwind>
				<Body
					// style={body}
					className='bg-white'
				>
					<Container>
						<Text
							// style={heading}
							className='text-3xl font-bold'
						>
							Hello {name}
						</Text>
						<Link href='https://www.google.com'>google.com</Link>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

// const body: CSSProperties = {
// 	background: '#fff',
// };

// const heading: CSSProperties = {
// 	fontSize: 32,
// };

export default WelcomeTemplate;
