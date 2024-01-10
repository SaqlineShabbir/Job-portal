import React from 'react'

const ForgotPassword = () => {
    return (
        <div className="my-20 flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-bold text-slate-700 mb-6 text-center">Forgot Password</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Enter your email address, and we'll send you a link to reset your password.
                </p>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            // value={email}
                            // onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-semibold active:bg-blue-600"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;