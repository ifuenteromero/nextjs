import prisma from '@/prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const providers = [
	CredentialsProvider({
		credentials: {
			email: {
				label: 'Email',
				type: 'email',
				placeholder: 'Email',
			},
			password: {
				label: 'Password',
				type: 'password',
				placeholder: 'Password',
			},
		},
		async authorize(credentials, req) {
			// TODO: ZOD SCHEMA
			if (!credentials?.email || !credentials.password) return null;
			const user = await prisma.user.findUnique({
				where: { email: credentials.email },
			});
			if (!user) return null;
			const passwordsMatch = await bcrypt.compare(
				credentials.password,
				user.hashedPassword!
			);
			return passwordsMatch ? user : null;
		},
	}),
	GoogleProvider({
		clientId: process.env.GOOGLE_CLIENT_ID!,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
	}),
	GithubProvider({
		clientId: process.env.GITHUB_ID!,
		clientSecret: process.env.GITHUB_SECRET!,
	}),
];

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers,
	session: {
		strategy: 'jwt',
	},
	// pages: {
	// 	// signIn: '/auth/signin',
	// },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
