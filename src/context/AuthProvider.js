"use client"

import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //get user from cookies and  decode  it
    // const getCookies = () => {
    const accessToken = Cookies.get('accessToken');

    useEffect(() => {
        if (accessToken) {
            const jwttoken = jwt.decode(accessToken);

            AxiosInstance.get(`/users/${jwttoken.useridneed}`)
                .then(response => {
                    // Handle the successful response here
                    setUser(response.data.data[0]);
                })
                .catch(error => {
                    // Handle the error
                    console.error('Error fetching user data:', error);
                });

        }
    }, [accessToken, setUser, user]);

    // }



    // getCookies()


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