import {
	Body,
	Container,
	Html,
	Link,
	Preview,
	Text,
} from '@react-email/components';
import { CSSProperties } from 'react';

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Body style={body}>
				<Container>
					<Text style={heading}>Hello {name}</Text>
					<Link href='https://www.google.com'>google.com</Link>
				</Container>
			</Body>
		</Html>
	);
};

const body: CSSProperties = {
	background: '#fff',
};

const heading: CSSProperties = {
	fontSize: 32,
};

export default WelcomeTemplate;
