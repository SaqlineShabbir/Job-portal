import { AuthContext } from '@/context/AuthProvider';
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    const router = useRouter();

    useEffect(() => {
        if (!user) {
            // Save the current path in the session storage
            const not = sessionStorage.setItem('nextPath', router.asPath);
            console.log(not)

            // Redirect to the login page
            router.push('/login');
        }
    }, [user, router]);

    return <div>
        {children}
    </div>;
};

export default PrivateRoute;
