'use client'

import { useContext, useState } from 'react';
import Link from 'next/link';
import career from '../../assets/logos/career-removebg-preview.PNG'
import Image from 'next/image';
import { AuthContext } from '@/context/AuthProvider';
import { FaRegUserCircle } from "react-icons/fa";


export default function Navigation() {

  const [navbar, setNavbar] = useState(false);
  const { LogoutUser, user } = useContext(AuthContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(user)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
                <Link href="/internships">
                  <span>Internships</span>
                </Link>
              </li>

              <li className=" hover:text-black-600 cursor-pointer">
                <Link href="/course">
                  <span>Courses</span>
                </Link>
              </li>

              {/* // register aqnd login section */}
              {!user?.email && (
                <li className="relative group h-full">
                  <span className="cursor-pointer text-lg font-semibold text-gray-800 group-hover:text-purple-600">
                    Register/Login
                  </span>

                  <div className="absolute hidden shadow-lg bg-white border border-gray-300 w-[200px] px-5 py-5 space-y-3 rounded-md group-hover:block transition-all duration-300 ease-in-out">
                    <Link href="/student-signup" className="block text-gray-700 hover:text-purple-600">
                      As a Student
                    </Link>
                    <Link href="/employer-signup" className="block text-gray-700 hover:text-purple-600">
                      As an Employer
                    </Link>
                    <Link href="/login" className="block text-gray-700 hover:text-purple-600">
                      Login
                    </Link>
                  </div>
                </li>
              )}


              {/* -------------------------------- */}

              <div className="group relative h-full bg-white hover:shadow-md transition duration-300 border border-gray-200 rounded-md p-4">
                {user && (
                  <div className="flex items-center space-x-4">
                    <div>
                      {/* <FaRegUserCircle /> */}
                      <Image
                        className='rounded-lg'
                        src={user?.photo}
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 group-hover:text-purple-600">
                        {user?.email}
                      </p>

                    </div>
                  </div>
                )}

                <ul className="absolute hidden shadow-md bg-white px-4 py-2 rounded-md group-hover:block space-y-2">
                  <li className="hover:text-purple-600">
                    <Link href="/dashboard" className="block px-2 py-1">
                      Profile
                    </Link>
                  </li>
                  <li className="hover:text-purple-600">
                    <Link href="/dashboard/application" className="block px-2 py-1">
                      My Applications
                    </Link>
                  </li>
                  <li className="hover:text-purple-600">
                    <Link href="/dashboard/resume" className="block px-2 py-1">
                      Edit Resume
                    </Link>
                  </li>

                  <div className="group relative w-36">
                    <p
                      className="cursor-pointer hover:text-purple-600 px-2 py-1"
                      onClick={toggleDropdown}
                    >
                      Manage Account
                    </p>
                    {isDropdownOpen && (
                      <ul className="absolute shadow-md bg-white px-3 py-2 rounded-md mt-2 space-y-2">
                        <li className="hover:text-purple-600 transition duration-300">
                          <Link href="/login/change-email" className="block px-2 py-1">Change Email</Link>
                        </li>
                        <li className="hover:text-purple-600 transition duration-300">
                          <Link href="/login/update-password" className="block px-2 py-1">Change Password</Link>
                        </li>
                        <li className="hover:text-purple-600 transition duration-300">
                          <Link onClick={LogoutUser} href="/login" className="block px-2 py-1">Logout</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </ul>
              </div>
            </ul>

          </div>


        </div>
      </div>
    </nav>
  );
}
