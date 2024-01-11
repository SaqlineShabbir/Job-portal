"use client"

import Image from 'next/image';
import React from 'react';
import Lottie from "lottie-react";
import JobAnimate from '../../assets/animate-files/banner-job.json';
// import JobAnimate from '../../assets/animate-files/jobSearch.json';
import BannerBtn1 from '../buttons/BannerBtn1';
import BannerBtn2 from '../buttons/BannerBtn2';


const Banner = () => {
    return (
        <div className='py-10 lg:py-0'>
            <div className='lg:flex justify-between items-center px-5 lg:px-[200px] lg:py-10 py-2'>

                {/* banner title section */}
                <div className='space-y-5 lg:py-10'>
                    <p className='text-5xl font-bold leading-tight'> <span className='text-slate-500'>CareerHub</span>  Discover <br /> Your <span className='text-amber-500 text-6xl '>Next</span> <span className='animate-pulse'>Chapter</span> </p>


                    <p className='text-lg text-slate-700'>Immerse yourself in a seamless experience designed to redefine your job search. <br /> Uncover a multitude of job listings, each representing a chance for growth and success. Whether you're a seasoned professional or a passionate newcomer, we have the opportunities that align with your ambitions.</p>


                    <div className="flex pt-6 space-x-8">
                        <BannerBtn1 />
                        <BannerBtn2 />
                    </div>
                </div>


                {/* banner image section */}
                <div>
                    <Lottie
                        animationData={JobAnimate}
                        height={500}
                        width={500}
                        loop={true}
                    />
                </div>
            </div>

            {/* 4 title section */}
            <div className='bg-gradient-to-r from-slate-500 to-slate-800 py-10 lg:px-[200px] text-white lg:flex lg:justify-between lg:flex-row flex flex-col items-center justify-center mb-20 space-y-10 lg:space-y-0 mt-6'>

                <div className='flex space-x-2'>
                    <p className='text-5xl font-bold text-white'>12</p>
                    <p><br />Innovation</p>
                </div>

                <div className='flex space-x-2'>
                    <p className='text-5xl font-bold text-white'>15</p>
                    <p><br />Dreams Realized</p>
                </div>

                <div className='flex space-x-2'>
                    <p className='text-5xl font-bold text-white'>15</p>
                    <p><br />Achievements</p>
                </div>

                <div className='flex space-x-2'>
                    <p className='text-5xl font-bold text-white'>26</p>
                    <p><br />Excellence</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;