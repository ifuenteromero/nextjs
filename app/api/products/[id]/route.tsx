import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

interface Props {
	params: { id: string };
}

export const GET = async (request: NextRequest, { params: { id } }: Props) => {
	const product = await prisma.product.findUnique({
		where: { id: parseInt(id) },
	});
	if (!product)
		return NextResponse.json(
			{ error: 'Product not found' },
			{ status: 404 }
		);

	return NextResponse.json(product);
};

export const PUT = async (request: NextRequest, { params: { id } }: Props) => {
	const product = await prisma.product.findUnique({
		where: { id: parseInt(id) },
	});

	if (!product)
		return NextResponse.json(
			{ error: 'Product not found' },
			{ status: 404 }
		);

	const body = await request.json();
	const savedProduct = schema.strip().safeParse(product).data;
	const newProduct = { ...savedProduct, ...body };
	const validation = schema.safeParse(newProduct);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });

	const updatedProduct = await prisma.product.update({
		where: { id: parseInt(id) },
		data: newProduct,
	});
	return NextResponse.json(updatedProduct);
};

export const DELETE = async (
	request: NextRequest,
	{ params: { id } }: Props
) => {
	const product = await prisma.product.findUnique({
		where: { id: parseInt(id) },
	});
	if (!product)
		return NextResponse.json(
			{ error: 'Product not found' },
			{ status: 404 }
		);
	await prisma.product.delete({ where: { id: parseInt(id) } });
	return NextResponse.json({});
};
