
import { LatestInternships } from '@/utils/LatestInternships';
import Link from 'next/link';

import { LuActivity } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import getJobs from '@/utils/apiCalls/getJobs';


const LatestIntern = async () => {
    const result = await getJobs()


    const internships = result?.data?.filter((internship) => internship?.jobtype === 'Internship')

    return (
        <main>
            <h1 className='text-center text-4xl font-bold'>Latest Internship</h1><br /><br />

            <div className='md:flex justify-center items-center space-x-2'>
                {/* button section */}

                <h3 className='font-semibold my-2 md:my-0 text-center '>POPULAR CATEGORIES : </h3>

                <div className='space-x-2 flex flex-wrap'>
                    {
                        LatestInternships?.map((intern) =>

                            <Link
                                key={intern.indexOf}
                                className='border rounded-full px-4 py-2 font-semibold focus:bg-blue-500 focus:text-white text-sm my-1 md:my-0'
                                href="#">
                                {intern}
                            </Link>
                        )
                    }
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-6'>
                {
                    internships?.slice(-8).map((internship) =>
                        <div key={internship?._id} className='border rounded-xl p-4 space-y-2'>
                            <div className='flex justify-center items-center border py-1 rounded-lg text-sm space-x-2 cursor-pointer'>
                                <LuActivity />
                                <span>{internship?.status}</span>
                            </div>

                            <div>
                                <h2 className='font-semibold'>{internship?.title}</h2>

                                <p className='text-md text-slate-600'>{internship?.positionDes}</p>
                            </div>

                            <br /><hr /><br />

                            <div className='flex space-x-1 items-center text-slate-500'>
                                <FaLocationDot />
                                <p>{internship?.locationtype}</p>
                            </div>

                            <div className='flex space-x-1 items-center text-slate-500'>
                                <IoMdWallet />
                                <p>{internship?.salary}</p>
                            </div>

                            {/* <div className='flex space-x-1 items-center text-slate-500'>
                                <MdOutlineCalendarMonth />
                                <p>{internship?.createdAt.slice(0, 10)}</p>
                            </div> */}

                            <Link href={`/jobs/${internship?._id}`}> <div className='flex space-x-1 items-center text-ms text-blue-500 cursor-pointer'>
                                <span>View details</span>
                                <IoIosArrowForward />
                            </div></Link>
                        </div>
                    )
                }
            </div>
        </main>
    )
}

export default LatestIntern;