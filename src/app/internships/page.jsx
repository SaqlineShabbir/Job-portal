"use client"
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import InternCard from '@/components/internships/InternCard';
import InternOfferCard from '@/components/internships/InternOfferCard';
import InternSidebar from '@/components/internships/InternSidebar';
import { AxiosInstance } from '@/utils/axios/axiosInstance';
import React, { useEffect, useState } from 'react';


const page = () => {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [jobs, setJobs] = useState(null)
  console.log('jobss', jobs)
  console.log(search)
  useEffect(() => {
    const fetchData = async () => {
      try {
        let queryString = `?title=${search}`
        if (search) {
          queryString = `?title=${search}`
        }
        // Add location filter if location is provided
        if (location) {
          queryString += `&locationtype=${location}`;
        }
        const response = await AxiosInstance.get(`/jobs${queryString}`);
        //&page=1&jobtimetype=full-time&locationtype=Remote
        setJobs(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, you might want to set an error state or display an error message.
      }
    };

    fetchData();
  }, [search]);

  return (

    <div className='py-5 bg-gray-100 px-10 md:px-[200px] '>
      <div><h2>Home - Internships </h2></div>
      <div className='py-20 lg:flex justify-center lg:space-x-10 '>
        <InternSidebar setSearch={setSearch} setLocation={setLocation}></InternSidebar>
        <div className='space-y-5 pt-20 md:pt-2'>
          <h2 className='text-center'>6318 Total Internships</h2>

          {/* internshipsoffercard */}
          <InternOfferCard></InternOfferCard>
          {/* all the internship card here */}
          <div className='grid grid-cols-1 gap-5'>
            {jobs?.map((intern) => (
              <InternCard key={intern?.id} intern={intern}></InternCard>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default page;