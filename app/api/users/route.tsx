import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

// si le quitas el parámetro request NextJS cacheará el resultado de la respuesta
// para prevenir el cacheo se mantiene el uso del parámetro

export const GET = (request: NextRequest) =>
	NextResponse.json([
		{ id: 1, name: 'Irene' },
		{ id: 2, name: 'Elvira' },
		{ id: 3, name: 'Sara' },
	]);

export const POST = async (request: NextRequest) => {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });
	return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
};
