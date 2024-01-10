'use client'
import { AuthContext } from '@/context/AuthProvider'
import { AxiosInstance } from '@/utils/axios/axiosInstance'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'

const ChangeEmail = () => {

    const { LogoutUser, user } = useContext(AuthContext)

    const [email, setEmail] = useState('')

    //update user email

    const handleSubmit = (e) => {
        e.preventDefault()

        AxiosInstance.put(`/user/manage-account/email-update/${user?._id}`, {
            email: email
        }).then((res) => {
            console.log('update email', res)


        })

    }

    return (
        <div className="my-10 flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md border">
                <h2 className="text-3xl font-bold mb-6 text-center text-slate-600">Change Email</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Please enter your new email address and your current password to change your email.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newEmail">
                            New Email
                        </label>
                        <input
                            type="email"
                            name="newEmail"
                            // value={newEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none duration-500"
                    >
                        Change Email
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChangeEmail;
