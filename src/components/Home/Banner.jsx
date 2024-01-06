import Image from 'next/image';
import React from 'react';
import img from '../../assets/images/picsgirl.JPG'
const Banner = () => {
    return (
        <>
            <div className='lg:flex  py-[0px]   md:px-[200px]'>
                <div className='space-y-5 lg:pt-[200px]'>
                    <p className='text-5xl font-bold'>A new Step Towards <br />  Your <span className='text-blue-400'>New Job</span></p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ex fugit necessitatibus qui tenetur, velit omnis ea maiores doloribus molestiae fuga asperiores soluta neque blanditiis repellat et, vero, doloremque inventore?</p>
                    <div className="flex  pt-10">
                        <button className='border py-2 px-3   rounded'>Job Title Keyword</button>
                        <button className='border py-2 px-3   rounded'>Job Title Keyword</button>
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
            <div className='bg-blue-600 py-10 px-[200px] text-white flex justify-between mb-20'>
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
        </>
    );
};

export default Banner;