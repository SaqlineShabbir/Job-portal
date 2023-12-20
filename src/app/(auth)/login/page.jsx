import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-bold font-mono mb-6 text-center underline decoration-pink-500 decoration-wavy">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-lg font-medium text-gray-600">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 p-2 w-full border rounded-md"
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
                        />
                    </div>

                    <span className='text-lg text-blue-500 flex justify-end items-center cursor-pointer hover:underline'>Forgot Password ?</span><br />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 duration-500 text-lg font-semibold"
                    >
                        Log in
                    </button>
                </form> <br />

                <p>New to here ? <Link href="/signup" className='text-md text-blue-500 font-mono cursor-pointer hover:underline duration-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default page;