"use client"

import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    //get user from cookies and  decode  it
    // const getCookies = () => {
    const accessToken = Cookies.get('accessToken');

    useEffect(() => {
        if (accessToken) {
            const jwttoken = jwt.decode(accessToken);
            setUser(jwttoken);
            AxiosInstance.get(`/users/${jwttoken.useridneed}`)
                .then(res => res.json())
                .then(data => console.log(data))
            // console.log('Decoded JWT Token:', jwttoken);
            // console.log('Original Access Token:', accessToken);
        }
    }, [accessToken, setUser]);

    // }



    // getCookies()


    //logout
    const LogoutUser = async () => {
        const response = await AxiosInstance.post('/auth/logout')
        Cookies.remove('accessToken');
    }

    const authInfo = {
        user,
        LogoutUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;