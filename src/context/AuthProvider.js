"use client"

import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log('userrrr', user)

    // //   get the user from cookies and set to  user state
    const fetchUser = async () => {
        try {
            console.log('fetch user called');

            const token = Cookies.get('accessToken');

            console.log('token', token)
            // Now you can use the cookie value for further processing
            if (token) {
                const jwttoken = jwt.decode(token);
                console.log('jwttt decoded', jwttoken);

                const response = await AxiosInstance.get(`/users/${jwttoken?.useridneed}`, {
                    withCredentials: true,
                });
                console.log('res from coook', response);

                setUser(response?.data?.data[0]);
            } else {
                // Handle the case where the cookie is not available
                console.error('Access token cookie not found.');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };




    //     console.log('fetch user called');

    //     const token = Cookies.get('accessToken');
    //     console.log('tok', token);
    //     // if (token) {
    //     const jwttoken = jwt.decode(token);
    //     console.log('jwttt decoded', jwttoken);
    //     try {
    //         const response = await AxiosInstance.get(`/users/${jwttoken?.useridneed}`);
    //         console.log('res from coook', response);

    //         setUser(response?.data?.data[0]);
    //     } catch (error) {
    //         console.error('Error fetching user data:', error);
    //     }
    //     // }


    // get the user after reloade
    useEffect(() => {
        fetchUser()
    }, [])


    //logout
    const LogoutUser = async () => {
        console.log('logging out ')
        const response = await AxiosInstance.post('/auth/logout')
        Cookies.remove('accessToken');
        setUser(null)
    }

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