import prisma from '@/prisma/client';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z
	.object({
		email: z.string().email(),
		password: z.string().min(5),
		confirmPassword: z.string().min(5),
	})
	.strict()
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'], // Se aplica el error a `confirmPassword`
	});

export const POST = async (request: NextRequest) => {
	const body = await request.json();
	// validación
	const validation = schema.safeParse(body);
	if (!validation.success)
		return NextResponse.json(validation.error.errors, { status: 400 });

	const validatedRequest = validation.data;

	// chequear si ya existe
	const user = await prisma.user.findUnique({
		where: { email: validatedRequest.email },
	});
	if (user)
		return NextResponse.json(
			{ error: 'User already exists' },
			{ status: 400 }
		);

	// crear usuario
	const hashedPassword = await bcrypt.hash(validatedRequest.password, 10);
	const newUser = await prisma.user.create({
		data: {
			email: validatedRequest.email,
			hashedPassword,
		},
	});

	return NextResponse.json(
		{
			email: newUser.email,
		},
		{ status: 201 }
	);
};
