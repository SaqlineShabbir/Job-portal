import React from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaBoltLightning, FaLocationDot } from 'react-icons/fa6';
import { MdOutlineSlowMotionVideo, MdOutlineTurnSlightRight } from 'react-icons/md';
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import Link from 'next/link';
const InternCard = ({ intern }) => {

  return (
    <div className='bg-white py-10 px-5 space-y-5'>
      <button className='flex space-x-1 border px-3 text-sm items-center'>
        <MdOutlineTurnSlightRight size={16} color='blue' />
        <p className=''>{intern.status}</p>
      </button>
      <p className='text-lg'>{intern.title}</p>
      {/* // */}
      <div className='flex space-x-1 items-center'>
        <FaLocationDot size={13} />
        <p className='text-sm'>{intern.location}</p>
      </div>

      {/* startdate */}
      <div className='md:flex md:space-x-8'>

        <div className=' space-x-1 items-center flex md:flex-col'>
          <div className='flex items-center space-x-2'>
            <MdOutlineSlowMotionVideo size={13} />
            <p className='text-sm'>START DATE</p>
          </div>
          <p className='text-sm'>{intern.starts}</p>
        </div>
        {/* // */}
        <div className=' space-x-1 items-center  flex  md:flex-col'>
          <div className='flex items-center space-x-2'>
            <SlCalender size={13} />
            <p className='text-sm'>DURATION</p>
          </div>
          <p className='text-sm'>{intern.duration}</p>
        </div>
        {/* // */}
        <div className=' space-x-1 items-center flex md:flex-col'>
          <div className='flex items-center space-x-2'>
            <FaMoneyCheckAlt size={13} />
            <p className='text-sm'>STIPEND</p>
          </div>
          <p className='text-sm'>{intern.salary}</p>
        </div>
      </div>
      {/* // */}
      <div className='md:flex   md:space-x-5 space-y-3  md:space-y-0'>
        <div className='flex items-center space-x-1'>
          <CiClock2 size={13} />
          <p>{intern.postedAt}</p>
        </div>
        <div>
          <p className='bg-green-100 px-3 rounded-lg'>{intern.type}</p>
        </div>
      </div>
      <div className='flex items-center space-x-1'>
        <FaBoltLightning size={13} color='yellow' />

        <p className='text-sm'>Be an early applicant</p>
      </div>
      <hr />
      {/* // */}

      <div className='flex justify-between'>
        <Link href={`/internships/${intern._id}`}> <button className='px-5 py-2 text-sm text-blue-400'>View details</button></Link>
        <button className='px-5 py-2 text-sm text-blue-400 shadow'>Apply now</button>
      </div>

    </div>
  );
};

export default InternCard;