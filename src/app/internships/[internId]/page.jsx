'use client'
import ApplyinternModal from '@/components/modals/ApplyinternModal';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiClock2 } from 'react-icons/ci';
import { FaExternalLinkAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { FaBoltLightning, FaLocationDot } from 'react-icons/fa6';
import { MdOutlineSlowMotionVideo, MdOutlineTurnSlightRight } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
const internships = [
    {
        id: '1',
        status: 'Actively Hiring',
        title: 'Technical Writing - Biochemistry & Environmental Sciences',
        starts: 'Immediately',
        duration: '6 month',
        location: 'Work from home',
        salary: '12000-25000 / month',
        type: 'Intirnship with job offer',
        postedAt: '22 December',
        companyname: 'Techlead',
        aboutcompany: 'We are a Hyderabad-based 3D printer manufacturing company. We manufacture 3D printers at an affordable cost. We are expanding our business. For that, we are expecting young and creative candidates who can increase our brand value. It is all about FDM/FFF 3D printing. Garuda3D is one of the leading in-house 3D printer manufacturers in India selling high-quality affordable 3D printers. We are based in Hyderabad, Telangana, and provide a wide range of 3D printers, 3D printing services, 3D filaments, and workshops.',
        aboutinternship: `Garuda3D is a leading in-house manufacturer of affordable 3D printers in India, specializing in FFF/FDM 3D printing technology. With over 6.2 years of experience, our team of professionals produces a wide variety of large format 3D printers that cater to both professional and industrial applications. Our latest innovation, the Independent Dual Extruder 3D Printer (IDEX), allows for dual material or dual-colored objects to be printed simultaneously, offering a new level of efficiency and convenience. Additionally, we also manufacture Pellet Extruder 3D Printers, which offer several advantages over filament-based printers.

        This is an on-site internship role for a Mechanical Engineering Intern located in Chandanagar, Hyderabad. The Mechanical Engineering Intern will be responsible for Slicing, 3D Printing, Post-processing, Local fabrication, Machine assembly Troubleshooting etc.
        
        
        Selected intern's day-to-day responsibilities include:
        
        1. Performing full lifecycle product development
        2. Designing systems and components that meet needs and requirements
        3. Conducting experiments methodically, analyzing data and interpreting results
        
        Request the candidates to go through the description fully. Candidates who are in Hyderabad only eligible to apply. Other candidates, kindly do not apply.`
    },
    {
        id: '2',
        title: 'Another Big Apartment Project Slated for Broad Ripple Company',
        description:
            'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
        date: 'may 10, 2023',
        link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
        thumbnail:
            'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
    },

]
const InternDetails = ({ params }) => {
    const [openmodal, setOpenmodal] = useState(false)
    const intern = internships.find((intern) => intern.id === params.internId)

    return (
        <div className='main border shadow flex justify-center lg:mx-[300px] lg:my-20'>
            <div className=''>
                {/* //card */}
                <div className='bg-white py-10 px-5 space-y-5 lg:w-[800px] '>
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


                    <div>
                        <p className='text-lg'>About {intern.companyname}</p>
                        <p className='flex items-center'>website <FaExternalLinkAlt size={13} className='pl-1' /></p>
                        <p>{intern.aboutcompany}</p>

                        <p className='text-lg pt-5'>About The internship</p>
                        <p>{intern.aboutinternship}</p>
                    </div>
                    <div className='flex justify-center '>
                        <button onClick={() => setOpenmodal(true)} className='bg-blue-400 px-5 py-1  my-10 text-white'>Apply Now</button>
                    </div>
                    {openmodal && <ApplyinternModal setOpenmodal={setOpenmodal} intern={intern}></ApplyinternModal>}
                </div>

            </div>
        </div>
    );
};

export default InternDetails;