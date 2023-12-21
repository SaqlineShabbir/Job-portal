'use client'
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoIosApps, IoIosCheckmarkCircle } from 'react-icons/io';
import { FaRegEdit } from "react-icons/fa";
import { MdEditSquare } from 'react-icons/md';
import Link from 'next/link';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` absolute  h-full left-0 ${isOpen ? 'w-64' : 'w-16'} border bg-white p-4 shadow-lg transition-all duration-300`}>
      <button className="" onClick={toggleSidebar}>
     { !isOpen&&<FaPlus />}
    {isOpen&&<FaMinus />}
      </button>

      <div className='flex flex-col space-y-3 justify-start pt-10'>
      
      <Link href='/dashboard/applications'><div className='flex cursor-pointer  space-x-2' > <IoIosApps  size={30}/> {isOpen&& <span className='hover:border-b-2 border-blue-400 cursor-pointer'> My applications</span>}</div></Link>
      <Link href='/dashboard/test'><div className='flex cursor-pointer space-x-2' > <IoIosCheckmarkCircle  size={30}/> {isOpen&& <span className='hover:border-b-2 border-blue-400 cursor-pointer'> Preference</span>}</div></Link>
      <div className='flex cursor-pointer space-x-2 ' > <MdEditSquare  size={25}/> {isOpen&& <span className='hover:border-b-2 border-blue-400 cursor-pointer'> Edit Resume</span>}</div>
        
      
      </div>
      {/* Your sidebar content goes here */}
    </div>
  );
};

export default Sidebar;