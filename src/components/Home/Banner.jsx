import Image from 'next/image';
import React from 'react';
import img from '../../assets/images/picsgirl.JPG'
const Banner = () => {
    return (
        <div className='py-10 lg:py-0'>
            <div className='lg:flex px-5 lg:px-[200px]'>
                <div className='space-y-5 lg:pt-[180px]'>
                    <p className='text-6xl font-bold loading-loose'>A new Step  Towards <br />  Your <span className='text-blue-400'>New Job</span></p>
                    <p>Lorem ipsum dolor sit, amet   consectetur  adipisicing  elit. Quis   ex  fugit  necessitatibus qui tenetur, velit omnis ea maiores doloribus molestiae fuga asperiores soluta neque blanditiis repellat et, vero, doloremque inventore?</p>
                    <div className="flex  pt-10 space-x-5">
                        <button className='border py-2 px-3  bg-gray-100 rounded'>Job Title Keyword</button>
                        <button className='border py-2 px-3  bg-slate-100 rounded'>Job Title Keyword</button>
                    </div>
                </div>
                <div>
                    <Image
                        src={img}
                        width={1300}
                        height={1500}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className='bg-blue-600 py-10 lg:px-[200px] text-white lg:flex lg:justify-between lg:flex-row flex flex-col  items-center  justify-center mb-20 space-y-10   lg:space-y-0'>
                <div className=''>
                    <div className='flex space-x-2'>
                        <p className='text-5xl font-bold text-white'>26</p>
                        <p>years Of <br />Development</p>
                    </div>

                </div>
                <div className=''>
                    <div className='flex space-x-2'>
                        <p className='text-5xl font-bold text-white'>26</p>
                        <p>years Of <br />Development</p>
                    </div>

                </div>
                <div className=''>
                    <div className='flex space-x-2'>
                        <p className='text-5xl font-bold text-white'>26</p>
                        <p>years Of <br />Development</p>
                    </div>

                </div>
                <div className=''>
                    <div className='flex space-x-2'>
                        <p className='text-5xl font-bold text-white'>26</p>
                        <p>years Of <br />Development</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;