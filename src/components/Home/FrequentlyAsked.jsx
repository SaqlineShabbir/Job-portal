'use client'

import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";

const datas = [
  {
    id: '1',
    title:
      'How do i search for internship in my preferred cetagory?',
    description:
      'Click here if you are looking for internships. Next, update your preferred profile or location on the web page and use relevant filters to find internships as per your preference.',
  },

  {
    id: '2',
    title: 'How Can i apply for an internship on Carrers Portal?',
    description:
      'You can apply for an internship on Internshala using the following steps-Click on View Details to get details about the company and the profile Go through the details thoroughly and apply for internships where your profile matches the requirements of the company.Click on Apply Now and follow the steps to submit your application.',
  },
  {
    id: '3',
    title: 'Do i need to pay to apply for an internship on carrers portal?',
    description:
      'Absolutely not! Carrers Portal is a free platform. You dont have to pay anything to apply for internships on Carrers Portal.',
  },
  {
    id: '4',
    title: 'What all internships are available on Carrers Portal?',
    description:
      'You can find 2,000+ internships, work from home internships and part time internships in your preferred location or profile on You can find 2,000+ internships, work from home internships and part time internships in your preferred location or profile on Carrers Portal.',
  },
  {
    id: '5',
    title: 'Are there any courses available on Carrers Portal?',
    description:
      'Not right now but courses are coming very soon so please wait for it we are working on courses.',
  },
  {
    id: '6',
    title: 'How do I get certified Online?',
    description:
      'Not right now but certification system coming very soon so please wait for it we are working on certificate.',
  },
];

const FrequentlyAsked = () => {
  const [active, setActive] = useState('');


  return (
    <div className=" 2xl:container 2xl:mx-auto md:py-12  md:px-6  px-5 ">

      <div className=" flex flex-col  justify-center items-center py-10">

        <h2 className="font-bolder font-semibold text-2xl  md:text-3xl  lg:text-4xl lg:leading-9 md:leading-7 leading-9  decoration-blue-500 decoration-wavy">
          Frequently Asked Questions.
        </h2>

        <p className="text-lg font-medium leading-6 text-gray-400 pt-6">
          Here are few of the most frequently asked questions by our valueable
          users
        </p>

      </div>
      <div className=" flex flex-col justify-center items-center  md:flex-row  md:mt-16 mt-8 ">
        <div className="w-fit mx-0 md:mx-auto">
          {/* //image */}
        </div>
        <div className="   w-full md:mt-0 sm:mt-14 mt-10">


          {datas.map((data) => (
            <div key={data.id}>
              <div>
                <div className=" cursor-pointer">
                  {active && data.id === active ? (
                    <div
                      onClick={() => setActive('')}
                      className="flex justify-between items-center "
                    >
                      <h3 className="w-4/5 leading-5">
                        {data.title}
                      </h3>
                      {/* //plus svg */}
                      <FaPlus />
                    </div>
                  ) : (
                    <div
                      onClick={() => setActive(data?.id)}
                      className="flex justify-between items-center "
                    >
                      <h3 className=" w-4/5   leading-5 ">
                        {data.title}
                      </h3>

                      <FaPlus />
                    </div>
                  )}
                </div>
                <p
                  className={
                    'font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 ' +
                    (data.id === active ? 'block' : 'hidden')
                  }
                >
                  {data?.description}
                </p>
              </div>
              <hr className=" my-7 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
