import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

// si le quitas el parámetro request NextJS cacheará el resultado de la respuesta
// para prevenir el cacheo se mantiene el uso del parámetro

export const GET = async (request: NextRequest) => {
	const users = await prisma.user.findMany();
	return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });
	const user = await prisma.user.findUnique({ where: { email: body.email } });
	if (user)
		return NextResponse.json(
			{ error: 'User already exists' },
			{ status: 400 }
		);
	const newUser = await prisma.user.create({
		data: { ...body },
	});
	return NextResponse.json(newUser, { status: 201 });
};
