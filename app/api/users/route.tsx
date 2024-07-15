import { NextRequest, NextResponse } from 'next/server';

// si le quitas el parámetro request NextJS cacheará el resultado de la respuesta
// para prevenir el cacheo se mantiene el uso del parámetro

export const GET = (request: NextRequest) =>
	NextResponse.json([
		{ id: 1, name: 'Irene' },
		{ id: 2, name: 'Elvira' },
		{ id: 3, name: 'Sara' },
	]);
