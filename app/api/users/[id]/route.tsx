import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

export const GET = async (
	request: NextRequest,
	{
		params: { id },
	}: {
		params: { id: string };
	}
) => {
	const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
	if (!user)
		return NextResponse.json({ error: 'User not found' }, { status: 404 });
	return NextResponse.json(user);
};

export const PUT = async (
	request: NextRequest,
	{
		params: { id },
	}: {
		params: { id: string };
	}
) => {
	const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
	if (!user)
		return NextResponse.json({ error: 'User not found' }, { status: 404 });

	const body = await request.json();
	if (body.email) {
		const emailAlreadyUsed = await prisma.user.findFirst({
			where: {
				AND: [{ email: body.email }, { NOT: { id: parseInt(id) } }],
			},
		});
		if (emailAlreadyUsed)
			return NextResponse.json(
				{ error: 'This email is already used' },
				{ status: 400 }
			);
	}

	const savedUser = schema.strip().safeParse(user).data;

	const newUser = { ...savedUser, ...body };
	const validation = schema.safeParse(newUser);

	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });

	const updatedUser = await prisma.user.update({
		where: { id: parseInt(id) },
		data: newUser,
	});

	return NextResponse.json(updatedUser);
};

export const DELETE = async (
	request: NextRequest,
	{ params: { id } }: { params: { id: string } }
) => {
	const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
	if (!user)
		return NextResponse.json({ error: 'User not found' }, { status: 404 });

	await prisma.user.delete({ where: { id: user.id } });
	return NextResponse.json({});
};
