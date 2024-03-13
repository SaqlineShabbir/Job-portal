'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='flex justify-center items-center h-screen'>
            <div>
                <h2 className='text-2xl font-bol py-4'>Something went wrong!</h2>
                <button
                    className='py-2 px-4 rounded bg-red-400'
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Try again
                </button>
            </div>
        </div>
    )
}