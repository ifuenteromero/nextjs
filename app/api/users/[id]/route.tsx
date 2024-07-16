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
		params: { id: number };
	}
) => {
	const body = await request.json();
	const validation = schema.safeParse(body);

	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });

	if (id > 10)
		return NextResponse.json({ error: 'User not found' }, { status: 404 });
	return NextResponse.json({ id, name: body.name });
};

export const DELETE = (
	request: NextRequest,
	{ params: { id } }: { params: { id: number } }
) => {
	if (id > 10)
		return NextResponse.json({ error: 'User not found' }, { status: 404 });

	return NextResponse.json({});
};
