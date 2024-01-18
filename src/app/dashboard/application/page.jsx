import Link from 'next/link'
import React from 'react'

const application = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-bold'>My applications</h1> <br /><br />

                <h3 className='text-center text-xl font-semibold'>Hello, You don't have any applications yet.</h3><br />

                <p className='text-slate-600 text-center text-lg font-medium'>Start applying to boost your career with top hiring companies on Internshala</p> <br /><br />

                <div className='text-center'>
                    <Link href="/internships" className='border px-4 py-2 bg-blue-400 active:bg-blue-500 font-semibold text-white rounded-md'>Browse jobs</Link>
                </div>
            </div>
        </div>
    )
}

export default application