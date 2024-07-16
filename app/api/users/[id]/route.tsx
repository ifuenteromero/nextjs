import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

export const GET = (
	request: NextRequest,
	{
		params: { id },
	}: {
		params: { id: number };
	}
) => {
	if (id > 10)
		return NextResponse.json({ error: 'User not found' }, { status: 404 });
	return NextResponse.json({ id: 1, name: 'Irene' });
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
