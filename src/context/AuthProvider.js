"use client"

import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [accessToken, setAccessToken] = useState(Cookies.get('accessToken'));

    useEffect(() => {
        const handleCookieChange = (newAccessToken) => {
            setAccessToken(newAccessToken);
        };

        // Subscribe to changes in the 'accessToken' cookie
        const cookieChangeListener = (event) => {
            if (event.cookieName === 'accessToken') {
                handleCookieChange(event.newValue);
            }
        };

        // Add the event listener
        window.addEventListener('storage', cookieChangeListener);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('storage', cookieChangeListener);
        };
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            console.log('fetchUser called');
            if (accessToken) {
                const jwttoken = jwt.decode(accessToken);
                console.log('inside jwt', jwttoken);

                try {
                    const response = await AxiosInstance.get(`/users/${jwttoken.useridneed}`);
                    console.log('User data response:', response.data);
                    setUser(response.data.data[0]);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        };

        fetchUser();
    }, [accessToken]);


    //logout
    const LogoutUser = async () => {
        const response = await AxiosInstance.post('/auth/logout')
        Cookies.remove('accessToken');
    }

    const authInfo = {
        user,
        loading,
        setLoading,
        LogoutUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;