import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

interface Props {
	params: { id: number };
}

export const PUT = async (request: NextRequest, { params: { id } }: Props) => {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });

	if (id > 10)
		return NextResponse.json(
			{ error: 'Product not found' },
			{ status: 404 }
		);

	return NextResponse.json({
		id,
		name: body.name,
		price: body.price,
	});
};

export const DELETE = (request: NextRequest, { params: { id } }: Props) => {
	if (id > 10)
		return NextResponse.json(
			{ error: 'Product not found' },
			{ status: 404 }
		);
	return NextResponse.json({});
};
