import {
	Body,
	Container,
	Html,
	Link,
	Preview,
	Text,
} from '@react-email/components';

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<Html>
			<Preview>Welcome aboard!</Preview>
			<Body>
				<Container>
					<Text>Hello {name}</Text>
					<Link href='https://www.google.com'>google.com</Link>
				</Container>
			</Body>
		</Html>
	);
};

export default WelcomeTemplate;
