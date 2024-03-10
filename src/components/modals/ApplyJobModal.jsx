'use client'
import React, { useContext, useState } from 'react';

import { IoIosCloseCircle } from 'react-icons/io';
import Link from 'next/link';
import { FormEvent } from 'react'
import { AxiosInstance } from '@/utils/axios/axiosInstance';
import PrivateRoute from '../protectedRoutes/PrivateRoute';
import { AuthContext } from '@/context/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const ApplyinternModal = ({ setOpenmodal, job }) => {
    const { user } = useContext(AuthContext)
    //handle checkboxs
    const [checkedvalue, setCheckedValue] = useState('')
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const handleCheckbox1Change = () => {
        setCheckedValue('Yes i am available to join immediately')
        setCheckbox1(!checkbox1);
        setCheckbox2(false);
    };
    const handleCheckbox2Change = (e) => {

        setCheckedValue('No im not available right now')
        setCheckbox2(!checkbox2);
        setCheckbox1(false);
    };
    //state to get inputs vales
    const [coverleter, setCoverleter] = useState('')
    const [resume, setResume] = useState('')

    const formData = new FormData()
    formData.append('job', job?._id)
    formData.append('user', user?._id)
    formData.append('coverleter', coverleter)
    formData.append('resume', resume)
    formData.append('available', checkedvalue)
    formData.append('email', user?.email)


    //post actual data to  backend

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://job-portal-kohl-six.vercel.app/api/apply`, {
                method: 'POST',
                body: formData
            },);
            const result = await response.json();
            console.log(result)

            if (result?.success) {

                toast.success("Applied successfully!")


            } else {
                toast.error(result.message)
            }

        } catch (err) {
            console.error('Unexpected error:', err);
            toast.error(`Unexpected error occurred: ${err.message}`);
        }
    }

    return (
        <PrivateRoute>
            <div
                id="close"
                onClick={(e) => {
                    if (e.target.id === 'close') {
                        setOpenmodal(false);
                    }
                }}
                className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 w-full h-full   overflow-y-scroll"
                style={{ marginLeft: 0 }}
            >
                <div className="rounded  w-[400px] md:w-[900px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 my-[180px]">
                    <IoIosCloseCircle size={20} color='red' className='cursor-pointer' onClick={() => setOpenmodal(false)} />


                    <h1 className=" lg:text-3xl text-gray-700 mb-5">
                        Applying for {job?.title}
                    </h1>
                    <hr />

                    <div>
                        <p className='text-lg font-bold'>Your resume</p>
                        <div className='flex space-x-5'>
                            <p>Your current resume will be submitted along with this application.</p>
                            <Link href='/'><p className='text-blue-500'>Edit resume</p></Link>
                        </div>
                    </div>
                    {/* //helllo */}
                    <form onSubmit={handleSubmit}>
                        <div className='space-y-3'>
                            <p className='text-lg font-bold'>Cover letter</p>
                            <p>Why should you be hired for this role?</p>
                            <textarea onChange={(e) => setCoverleter(e.target.value)} className='border  w-full h-[200px] px-3 py-3' name="" id=""></textarea>
                        </div>
                        <Toaster
                            position="bottom-center"
                            reverseOrder={false}
                        />
                        <div>
                            <p className='text-lg font-bold'>Confirm your availability</p>
                            <div className="max-w-md py-2 rounded-md ">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"

                                        value={'yes'}
                                        className="form-checkbox h-5 w-5 text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
                                        checked={checkbox1}
                                        onChange={handleCheckbox1Change}
                                    />
                                    <span className="text-sm font-medium text-gray-700">Yes i am available to join immediately</span>
                                </label>
                            </div>
                            <div className="max-w-md py-2 rounded-md ">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
                                        checked={checkbox2}
                                        onChange={handleCheckbox2Change}
                                    />
                                    <span className="text-sm font-medium text-gray-700">No  im not available right now</span>
                                </label>
                            </div>

                        </div>

                        {/* //custom resume */}
                        <div>
                            <p className='text-lg font-bold'>Custom resume</p>

                            <div className='space-y-3 flex flex-col'>
                                <label for="files">Upload your resume here </label>
                                <input onChange={(e) => setResume(e.target.files[0])} required placeholder='' title='Upload file' type="file" name="resume" id="" />
                                <span className='text-sm  text-gray-400'>Max file size: 10Mb. File type - PDF, DOC, DOCX</span>
                            </div>
                        </div>

                        <div className='flex justify-center pt-10'>
                            <button type='submit' className='bg-blue-400 px-10 py-1 text-white'>Submit Application</button>
                        </div>

                    </form>

                </div>
            </div>
        </PrivateRoute>
    );
};

export default ApplyinternModal;
