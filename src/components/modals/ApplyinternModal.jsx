'use client'
import React, { useState } from 'react';

import { IoIosCloseCircle } from 'react-icons/io';
import Link from 'next/link';
import { FormEvent } from 'react'
import { AxiosInstance } from '@/utils/axios/axiosInstance';
const ApplyinternModal = ({ setOpenmodal, job }) => {
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

    //     try{
    //         const formData = new FormData();

    //         formData.append('avatar',image);
    //         formData.append('name',name)
    //         formData.append('email',email)
    //         formData.append('password',password)
    //         formData.append('dateofbirth',date)

    //      const result = await AxiosInstance.post('/signup',formData)
    //          //navigate user to home page
    //          console.log(result)
    //    if(result.statusText ==="Created"){
    //     storeTokenToLS(result.data.token)
    //     console.log(result)
    //     navigate("/")
    //    }
    //     }catch(err){
    //         console.log(err)
    //     }
    return (
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
                    Applying for {job.title}
                </h1>
                <hr />

                <div>
                    <p className='text-lg font-bold'>Your resume</p>
                    <div className='flex space-x-5'>
                        <p>Your current resume will be submitted along with this application.</p>
                        <Link href='/'><p className='text-blue-500'>Edit resume</p></Link>
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='text-lg font-bold'>Cover letter</p>
                    <p>Why should you be hired for this role?</p>
                    <textarea className='border  w-full h-[200px] px-3 py-3' name="" id=""></textarea>
                </div>

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
                        <input placeholder='' title='Upload file' type="file" name="resume" id="" />
                        <span className='text-sm  text-gray-400'>Max file size: 10Mb. File type - PDF, DOC, DOCX</span>
                    </div>
                </div>

                <div className='flex justify-center pt-10'>
                    <button className='bg-blue-400 px-10 py-1 text-white'>Submit Application</button>
                </div>

            </div>
        </div>
    );
};

export default ApplyinternModal;
