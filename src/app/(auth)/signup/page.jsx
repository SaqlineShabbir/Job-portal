"use client"
import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
    const router = useRouter()
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await AxiosInstance.post('/auth/sign-up', {
                firstname,
                lastname,
                email,
                password
            }, {
                withCredentials: true
            })
            //navigate user to home page
            console.log(result)
            if (result.statusText === "Created") {

                router.push('/');

            }
        } catch (err) {
            console.log(err)
        }

    }


    return (
        <div className="py-10 flex items-center justify-center bg-gray-100 lg:min-h-[100vh]">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 underline decoration-teal-500 decoration-wavy">
                    Sign-Up
                </h1><br />
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-lg font-medium text-gray-600">
                                First Name
                            </label>
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-lg font-medium text-gray-600">
                                Last Name
                            </label>
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-lg font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500 text-lg font-semibold duration-500"
                    >
                        Sign Up
                    </button>
                </form><br />


                <div className='text-center'>
                    <p>Already registered? <Link href="/login" className='text-blue-500 cursor-pointer font-mono'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default page;