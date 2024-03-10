'use client'

import ApplyJobModal from '@/components/modals/ApplyJobModal';

import { AxiosInstance } from '@/utils/axios/axiosInstance';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiClock2 } from 'react-icons/ci';
import { FaExternalLinkAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { FaBoltLightning, FaLocationDot } from 'react-icons/fa6';
import { MdOutlineSlowMotionVideo, MdOutlineTurnSlightRight } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

const InternDetails = ({ params }) => {
    const [openmodal, setOpenmodal] = useState(false)
    const [job, setJob] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await AxiosInstance.get(`/jobs/${params.jobId}`);
                const response = await fetch(`http://localhost:3000/api/jobs/${params.jobId}`);
                const result = await response.json();

                setJob(result?.data);
                console.log(response?.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error, you might want to set an error state or display an error message.
            }
        };
        fetchData();
    }, [setJob]);


    return (
        <div className='main border shadow flex justify-center lg:mx-[300px] lg:my-20'>
            <div className=''>
                {/* //card */}
                <div className='bg-white py-10 px-5 space-y-5 lg:w-[800px] '>
                    <button className='flex space-x-1 border px-3 text-sm items-center'>
                        <MdOutlineTurnSlightRight size={16} color='blue' />
                        <p className=''>{job?.status}</p>
                    </button>
                    <p className='text-lg'>{job?.title}</p>

                    <div className='flex space-x-1 items-center'>
                        <FaLocationDot size={13} />
                        <p className='text-sm'>{job?.location}</p>
                    </div>

                    {/* startdate */}
                    <div className='md:flex md:space-x-8'>

                        <div className=' space-x-1 items-center flex md:flex-col'>
                            <div className='flex items-center space-x-2'>
                                <MdOutlineSlowMotionVideo size={13} />
                                <p className='text-sm'>START DATE</p>
                            </div>
                            <p className='text-sm'>{job?.starts}</p>
                        </div>
                        {/* // */}
                        <div className=' space-x-1 items-center  flex  md:flex-col'>
                            <div className='flex items-center space-x-2'>
                                <SlCalender size={13} />
                                <p className='text-sm'>DURATION</p>
                            </div>
                            <p className='text-sm'>{job?.duration}</p>
                        </div>
                        {/* // */}
                        <div className=' space-x-1 items-center flex md:flex-col'>
                            <div className='flex items-center space-x-2'>
                                <FaMoneyCheckAlt size={13} />
                                <p className='text-sm'>STIPEND</p>
                            </div>
                            <p className='text-sm'>{job?.salary}</p>
                        </div>
                    </div>
                    {/* // */}
                    <div className='md:flex   md:space-x-5 space-y-3  md:space-y-0'>
                        <div className='flex items-center space-x-1'>
                            <CiClock2 size={13} />
                            <p>{job?.createdAt.slice(0, 10)}</p>
                        </div>
                        <div>
                            <p className='bg-green-100 px-3 rounded-lg'>{job?.type}</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <FaBoltLightning size={13} color='yellow' />

                        <p className='text-sm'>Be an early applicant</p>
                    </div>
                    <hr />
                    {/* // */}


                    <div>
                        <p className='text-lg'>About {job?.companyname}</p>
                        <p className='flex items-center'>website <FaExternalLinkAlt size={13} className='pl-1' /></p>
                        <p>{job?.aboutcompany}</p>

                        <p className='text-lg pt-5'>About The Job</p>
                        <p>{job?.aboutwork}</p>
                    </div>
                    <div className='flex justify-center '>
                        <button onClick={() => setOpenmodal(true)} className='bg-blue-400 px-5 py-1  my-10 text-white'>Apply Now</button>
                    </div>
                    {openmodal && <ApplyJobModal setOpenmodal={setOpenmodal} job={job}></ApplyJobModal>}
                </div>

            </div>
        </div>
    );
};

export default InternDetails;