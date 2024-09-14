"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FiMenu, FiX } from "react-icons/fi"; // Import the cross icon
import { IoIosApps, IoIosCheckmarkCircle } from "react-icons/io";
import { MdEditSquare, MdLibraryAdd } from "react-icons/md";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="relative h-full font-sans antialiased">
      {/* Navbar - always visible */}
      <nav className="bg-white border text-white flex items-center justify-between p-6 shadow-sm">
        {/* Hamburger menu on the left */}
        <button className="md:hidden" onClick={toggleSidebar}>
          {/* Toggle between the hamburger and cross icons */}
          {sidebarOpen ? (
            <FiX className="text-2xl text-black" /> // Cross icon when sidebar is open
          ) : (
            <FiMenu className="text-2xl text-black" /> // Hamburger menu when sidebar is closed
          )}
        </button>
        <div className="text-xl text-black">Dashboard</div>
      </nav>

      <main className="relative flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`bg-white w-[400px] lg:w-[223px] lg:border py-5 fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:block`}
        >
          <div className="flex justify-between items-center  px-5">
            <Link className="cursor-pointer" href="/">
              <FcSearch size={45} />
            </Link>
            {/* Cross icon inside the sidebar */}
            <FiX
              onClick={toggleSidebar}
              className="text-2xl md:hidden cursor-pointer text-black"
            />
          </div>
          <ul className="py-10">
            <li className="mb-4 group">
              <Link href="/dashboard/profile">
                <div
                  className={`flex cursor-pointer space-x-2 items-center px-5 py-3 ${
                    activeLink === "/dashboard/profile"
                      ? "bg-blue-50 text-blue-400 border-r-4 border-blue-400"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleLinkClick("/dashboard/profile")}
                >
                  <FaUserEdit size={26} />
                  <span className="ml-2">Profile</span>
                </div>
              </Link>
            </li>
            <li className="mb-4 group">
              <Link href="/dashboard/my-applications">
                <div
                  className={`flex cursor-pointer space-x-2 items-center px-5 py-3 ${
                    activeLink === "/dashboard/my-applications"
                      ? "bg-blue-50 text-blue-400 border-r-4 border-blue-400"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleLinkClick("/dashboard/my-applications")}
                >
                  <IoIosApps size={26} />
                  <span className="ml-2">My applications</span>
                </div>
              </Link>
            </li>
            <li className="mb-4 group">
              <Link href="/dashboard/test">
                <div
                  className={`flex cursor-pointer space-x-2 items-center px-5 py-3 ${
                    activeLink === "/dashboard/test"
                      ? "bg-blue-50 text-blue-400 border-r-4 border-blue-400"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleLinkClick("/dashboard/test")}
                >
                  <IoIosCheckmarkCircle size={26} />
                  <span className="ml-2">Preference</span>
                </div>
              </Link>
            </li>

            <li className="mb-4 group">
              <Link href="/dashboard/post-job">
                <div
                  className={`flex cursor-pointer space-x-2 items-center px-5 py-3 ${
                    activeLink === "/dashboard/post-job"
                      ? "bg-blue-50 text-blue-400 border-r-4 border-blue-400"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleLinkClick("/dashboard/post-job")}
                >
                  <MdLibraryAdd size={26} />
                  <span className="ml-2">Post Job</span>
                </div>
              </Link>
            </li>
            <li className="mb-4 group">
              <Link href="/dashboard/resume">
                <div
                  className={`flex cursor-pointer space-x-2 items-center px-5 py-3 ${
                    activeLink === "/dashboard/edit-resume"
                      ? "bg-blue-50 text-blue-400 border-r-4 border-blue-400"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleLinkClick("/dashboard/edit-resume")}
                >
                  <MdEditSquare size={26} />
                  <span className="ml-2">Edit Resume</span>
                </div>
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main content */}
        <div className="flex-grow flex-1 pl-[50px] px-0 md:pl-[270px] md:px-20 py-10">
          {children}
        </div>
      </main>

      {/* Overlay when sidebar is open on smaller screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
