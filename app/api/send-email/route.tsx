import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async () => {
	await resend.emails.send({
		from: 'mydomain.com',
		to: 'ifuenteromero@gmail.com',
		subject: 'Welcome!',
		react: <WelcomeTemplate name='Ivan' />,
	});

	return NextResponse.json({});
};
