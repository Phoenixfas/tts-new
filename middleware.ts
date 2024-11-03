import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
    let token;
    const authorization = (await headers()).get('authorization');
    const jwtSecret = process.env.JWT_SECRET_ADMIN || '';

    if (authorization && authorization.startsWith('Bearer')) {
        try {
            token = authorization.split(' ')[1];
            if (jwtSecret === '') {
                throw new Error('JWT_SECRET_ADMIN is not defined');
            }

            // Verify the JWT
            const { payload } = await jwtVerify(token, new TextEncoder().encode(jwtSecret));
            const admin = (payload as { admin: { id: string } }).admin.id;
            const response = NextResponse.next();
            response.headers.set('admin', admin);
            
            return response;

        } catch (err) {
            console.log(err);
            return NextResponse.json({ message: 'Token is not valid' }, { status: 401 });
        }
    }

    if (!token) {
        return NextResponse.json({ message: 'No token, authorization denied' }, { status: 401 });
    }
}

export const config = {
    matcher: ['/api((?!/administrator/login).*)'],
};
