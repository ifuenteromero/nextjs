import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

export const GET = async (request: NextRequest) => {
	const products = await prisma.product.findMany();
	return NextResponse.json(products);
};

export const POST = async (request: NextRequest) => {
	const body = await request.json();
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });

	const newProduct = await prisma.product.create({ data: body });
	return NextResponse.json(newProduct, { status: 201 });
};
