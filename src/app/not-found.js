import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-red-500 mb-2">404</h1>
                <p className="text-xl font-semibold text-gray-800 mb-4">Page not found</p>

                <Link
                    href="/"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Back to Home
                </Link>

                <div className="mt-8 text-gray-600">
                    <p>Looks like you've followed a broken link or entered a URL that doesn't exist.</p>
                    <p className="mt-2">Return to the homepage or contact support if you need assistance.</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound