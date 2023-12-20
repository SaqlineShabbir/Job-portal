import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 underline decoration-teal-500 decoration-wavy">
                    Sign-Up
                </h1><br />
                <form>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="firstName" className="block text-lg font-medium text-gray-600">
                                First Name
                            </label>
                            <input
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