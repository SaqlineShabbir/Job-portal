import React from 'react'

const DeleteAccount = () => {
    return (
        <div className="my-20 flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Delete Account</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Enter your password to confirm and delete your account. This action is irreversible.
                </p>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            // value={password}
                            // onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none duration-500"
                    >
                        Delete Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DeleteAccount