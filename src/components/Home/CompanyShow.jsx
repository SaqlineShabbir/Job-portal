import React from 'react';
import google from "@/assets/company/google.png";
import github from "@/assets/company/github.png";
import microsoft from "@/assets/company/microsoft.png";
import openai from "@/assets/company/openai.png";
import amazon from "@/assets/company/amazon.png";
import paypal from "@/assets/company/paypal.png";
import tesla from "@/assets/company/tesla.png";
import Image from 'next/image';
import Achivements from './Achivements';

const CompanyShow = () => {
    const images = [google, github, microsoft, openai, amazon, paypal, tesla];

    return (
        <div className='md:my-32'>
            <div>
                <h1 className='text-center md:text-2xl font-semibold text-gray-400'>Trusted by the world's leading companies</h1>
            </div><br />

            <div className='flex justify-center items-center space-x-2 md:space-x-10 my-10'>
                {/* {
                    images.map((image) => (
                        <Image
                            key={image.indexOf}
                            src={image}
                            alt='company logo'
                            width={0}
                            height={0}
                            className='grayscale hover:grayscale-0 hover:scale-125 duration-500 cursor-pointer md:h-20 md:w-20 h-10 w-10'
                        />
                    ))
                } */}
            </div>

            <hr />

            <Achivements />
        </div>
    )
}

export default CompanyShow;