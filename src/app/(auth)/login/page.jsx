'use client'

import { AuthContext } from '@/context/AuthProvider';
import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Cookies from 'js-cookie';


import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { LogoutUser, user, fetchUser } = useContext(AuthContext);

    //handlesubmit
    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            const res = await AxiosInstance.post('/auth/login', {
                email,
                password
            }, {
                withCredentials: true
            })

            console.log('resfrom login', res)

            if (res.data.status === 'success') {



                // Retrieve the saved path from session storage
                const nextPath = sessionStorage.getItem('nextPath') || '/dashboard';
                toast.success("Logged in successfully!")
                // Redirect the user to the saved or default path
                router.push("/dashboard");
                fetchUser()
            }

        } catch (err) {
            toast.error(`Authentication failed cause ${err.message}`)
        }
    }
    return (
        <div className="py-10  lg:min-h-[100vh] flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-bold font-mono mb-6 text-center underline decoration-pink-500 decoration-wavy">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-lg font-medium text-gray-600">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 p-2 w-full border rounded-md"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-lg font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Link href="/login/forgot-password" className='text-lg text-blue-500 flex justify-end items-center cursor-pointer hover:underline'>Forgot Password ?</Link><br />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-semibold active:bg-blue-600"
                    >
                        Log in
                    </button>
                </form> <br />
                <Toaster />
                <p>New to here ? <Link href="/signup" className='text-md text-blue-500 font-mono cursor-pointer hover:underline duration-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default page;