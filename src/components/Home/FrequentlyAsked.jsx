'use client'
import React, { useState } from 'react';


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
      
      <div className="">
       
        <h2 className=" font-bolder text-xl md:text-3xl  lg:text-4xl text-blue-700  lg:leading-9 md:leading-7 leading-9  ">
        Frequently Asked Questions
      </h2>
          <p className=" font-normal text-base leading-6 text-gray-600  pt-4 ">
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
            <div>
              <div>
                <div className=" cursor-pointer">
                  {active && data.id === active ? (
                    <div
                      onClick={() => setActive('')}
                      className="flex justify-between items-center "
                    >
                      <h3 className=" w-4/5  text-xl leading-5 text-gray-800">
                        {data.title}
                      </h3>
                      {/* //plus svg */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
                    </div>
                  ) : (
                    <div
                      onClick={() => setActive(data?.id)}
                      className="flex justify-between items-center "
                    >
                      <h3 className=" w-4/5  text-xl leading-5 text-gray-800">
                        {data.title}
                      </h3>
                      
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
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
