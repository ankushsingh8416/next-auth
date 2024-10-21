// src/app/components/ProtectedRoute.js
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return; 
        if (!session) {
            router.push('/login'); 
        }
    }, [session, status, router]);

    return session ? children : null;
};

export default ProtectedRoute;
