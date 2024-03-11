"use client"

import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // //   get the user from cookies and set to  user state
    const fetchUser = async () => {
        try {

            const response = await fetch('http://localhost:3000/api/user');

            const result = await response.json();
            setUser(result?.user);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


    // get the user after reloade
    useEffect(() => {
        fetchUser()
    }, [])


    //logout
    const LogoutUser = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/logout', {
                method: "POST"
            });
            console.log(response);
            if (response.ok) {
                Cookies.remove('accessToken');
                setUser(null);
            } else {
                console.error(`Logout failed with status: ${response.status}`);
                // Handle the error as needed
            }
        } catch (error) {
            console.error('Logout failed:', error);
            // Handle the error as needed
        }
    };

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        LogoutUser,
        fetchUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;