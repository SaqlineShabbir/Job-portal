import React from 'react'

const UpdatePassword = () => {
    return (
        <div className="my-10 flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-lg border">
                <h2 className="text-2xl font-semibold mb-6 text-center">Change Password</h2>

                <div className="mb-4 text-green-600"></div>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-md font-semibold mb-2" htmlFor="oldPassword">
                            Old Password
                        </label>
                        <input
                            type="password"
                            name="oldPassword"
                            // value={oldPassword}
                            // onChange={handleChange}
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
                            // onChange={handleChange}
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
                            // onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none duration-500"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword