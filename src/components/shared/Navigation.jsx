'use client'

import { useState } from 'react';
import Link from 'next/link';
import img from '../../assets/images/user-profile-icon-free-vector.JPG'
import career from '../../assets/logos/career-removebg-preview.PNG'
import Image from 'next/image';
export default function Navigation() {
  const [navbar, setNavbar] = useState(false);



  return (
    <nav
      id="home"
      className="w-full relative py-5 border-b-[1px] shadow"
    >
      <div className="  md:flex  justify-between items-center md:px-[100px] px-5 ">
        <div>
    {/* comment */}
          <div className="flex items-center justify-between  md:block ">
       <div className='cursor-pointer'> 
      <Link href='/'> <Image
      src={career}
      width={150}
      height={150}
      alt="Picture of the author"
    /></Link>
    </div>
            <div className="md:hidden">
              <button
                className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>


        </div>

        
        <div>
          {/* nav links */}
          <div
            className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              <li className=" hover:text-black-600 focus:border-gray-100 cursor-pointer">
                <Link href="/">
                  <span>Internships</span>
                </Link>
              </li>

              <li className=" hover:text-black-600 cursor-pointer">
                <Link href="/about-us">
                  <span>Courses</span>
                </Link>
              </li>
             
          <li className="group relative    h-full">
          <span  className="cursor-pointer">
          Register/Login
          </span>
          <span className="absolute hidden shadow bg-white w-[100px] px-5 py-5 space-y-3 rounded-md group-hover:block">
            <Link href="/signup">Register as a Student</Link><br/>
              <div> <Link  href="/dropdown-link-2 " >Register as a employer</Link></div><br />
            <Link href="/login">Login</Link>
          </span>
        </li>
      
        
      <li className="group relative    h-full bg-white">
      <Image src={img} width={50} height={50}   alt="Picture of the author" />
          <ul className="absolute hidden  shadow-xl bg-white  px-5 space-y-4 py-3 rounded-md group-hover:block">
          <li> <Link href="/dashboard">Profile</Link></li>
              <li> <Link  href="/dropdown-link-2 " >My Applications</Link></li>
           <li> <Link href="/login">Edit resume</Link></li>
           
          <li className="group relative  w-[200px]  h-full">
          <p  className="cursor-pointer">
          Manage Account
          </p>
          <ul className="absolute hidden  shadow-xl bg-white  px-5 py-5 space-y-3 rounded-md group-hover:block">
            <li><Link href="/dropdown-link-1">Change Email</Link></li><br/>
              <li> <Link  href="/dropdown-link-2 " >Change password</Link></li><br />
            <Link href="/login">Logout</Link>
          </ul>
        </li>
        
          </ul>

        </li>

            </ul>

          </div>


        </div>
      </div>
    </nav>
  );
}
