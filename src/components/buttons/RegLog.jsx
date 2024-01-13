import Link from 'next/link'
import React from 'react'

const RegLog = () => {
    return (
        <Link href="/student-signup" className="relative rounded px-5 py-2.5 overflow-hidden group bg-rose-400 hover:bg-gradient-to-r hover:from-rose-500 hover:to-rose-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-rose-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative uppercase">Login / Register</span>
        </Link>
    )
}

export default RegLog;