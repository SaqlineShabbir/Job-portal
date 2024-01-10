'use client'
import { AuthContext } from '@/context/AuthProvider'
import { AxiosInstance } from '@/utils/axios/axiosInstance'
import React, { useContext, useState } from 'react'

import toast, { Toaster } from 'react-hot-toast';
const UpdatePassword = () => {
    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const { LogoutUser, user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!(newPass === confirmPass)) {
            return
        }

        AxiosInstance.put(`user/manage-account/change-password/${user._id}`, {

            prePass: oldPass,
            newPass: newPass,
            confirmPass: confirmPass
        }).then((res) => {
            console.log(res)
            toast.success("password changed successfully!")
        })


    }
    return (
        <div className="my-10 flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-lg border">
                <h2 className="text-2xl font-semibold mb-6 text-center">Change Password</h2>

                <div className="mb-4 text-green-600"></div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-md font-semibold mb-2" htmlFor="oldPassword">
                            Old Password
                        </label>
                        <input
                            type="password"
                            name="oldPassword"
                            // value={oldPassword}
                            onChange={(e) => setOldPass(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-md font-semibold mb-2" htmlFor="newPassword">
                            New Password
                        </label>
                        <input
                            type="password"
                            name="newPassword"
                            // value={newPassword}
                            onChange={(e) => setNewPass(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 text-md font-semibold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            // value={confirmPassword}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <Toaster />
                    <button

                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md  active:bg-blue-800 focus:outline-none "
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword