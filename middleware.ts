// import { NextRequest, NextResponse } from 'next/server';
// import middleware from 'next-auth/middleware';
// export default middleware;
// equivalente
export { default } from 'next-auth/middleware';

// export const middleware = (request: NextRequest) => {
// 	return NextResponse.redirect(new URL('/new-page', request.url));
// };

export const config = {
	// * zero or more parameters users, users/1, users/1/2
	// + one or more parameters users/1 users/1/2
	// ? zero or one parameter , users, users/1
	matcher: ['/users/:id?'],
};
