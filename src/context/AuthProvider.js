"use client"

import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [accessToken, setAccessToken] = useState('')


    //get user from cookies and  decode  it
    // const getCookies = () => {


    const token = Cookies.get('accessToken');
    useEffect(() => {

        setAccessToken(token)

    }, [token])

    console.log('outside', accessToken)
    useEffect(() => {


        // console.log('inside', accessToken);
        const fetchUser = async () => {
            console.log('fetchUser called');
            if (accessToken) {
                const jwttoken = jwt.decode(accessToken);

                try {
                    const response = await AxiosInstance.get(`/users/${jwttoken.useridneed}`);
                    console.log('User data response:', response.data);
                    setUser(response.data.data[0]);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            }
        }

        fetchUser();
    }, [accessToken]);
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