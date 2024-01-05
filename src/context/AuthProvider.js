"use client"
import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    const getCookies = () => {
        const accessToken = Cookies.get('accessToken');
        useEffect(() => {
            if (accessToken) {
                const jwttoken = jwt.decode(accessToken);
                setUser(jwttoken);
                console.log('Decoded JWT Token:', jwttoken);
                console.log('Original Access Token:', accessToken);
            }
        }, [accessToken, setUser]);

    }



    getCookies()
    console.log(user)
    const LogoutUser = async () => {
        const response = await AxiosInstance.post('/auth/logout')
        Cookies.remove('accessToken');
        console.log(response)


    }

    const authInfo = {
        user,
        loading,
        LogoutUser,
        getCookies

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;