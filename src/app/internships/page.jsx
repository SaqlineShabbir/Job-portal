"use client"
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import InternCard from '@/components/internships/InternCard';
import InternOfferCard from '@/components/internships/InternOfferCard';
import InternSidebar from '@/components/internships/InternSidebar';
import { AuthContext } from '@/context/AuthProvider';
import CardLoader from '@/ui/loaders/CardLoader';
import JobPagination from '@/ui/paginations/JobPagination';
import { AxiosInstance } from '@/utils/axios/axiosInstance';
import React, { useContext, useEffect, useState } from 'react';


const page = () => {
  const [search, setSearch] = useState(null)
  const [locationType, setLocationType] = useState(false)
  const [jobs, setJobs] = useState(null)
  const { loading, setLoading, user } = useContext(AuthContext)
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  console.log('currr', currentPage)
  const handlePageChange = (newPage) => {
    // Add logic to fetch data for the new page or update your UI accordingly

  };

  console.log('jobs', jobs?.pagination.currentpage)
  // incriment   and decrement buttons

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === jobs?.pagination?.totalPage;
  const handlePreviousClick = () => {
    if (!isPreviousDisabled) {
      setCurrentPage(currentPage - 1)
    }
  };

  const handleNextClick = () => {
    if (!isNextDisabled) {
      setCurrentPage(currentPage + 1)
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      let queryString = ''
      try {

        if (search) {
          queryString = `&title=${search}`
        }
        // Add location filter if location is provided
        if (locationType) {
          queryString = `&locationtype=Remote`;
        }
        if (locationType && search) {
          queryString = `&title=${search}&locationtype=Remote`;
        }
        const response = await AxiosInstance.get(`/jobs?page=${currentPage}${queryString}`);
        //&page=1&jobtimetype=full-time&locationtype=Remote
        setJobs(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, you might want to set an error state or display an error message.
      }
    };

    fetchData();
  }, [search, locationType]);


  //decide what to render

  let content = null

  if (loading) {
    content = (
      <>
        <CardLoader />

      </>
    );
  }
  if (!loading && jobs?.length === 0) {
    content = <p>No jobs found! </p>;
  }

  if (!loading && jobs?.length > 0) {
    content = <div> <div className='grid grid-cols-1 gap-5'>
      {jobs?.data.map((intern) => (
        <InternCard key={intern?._id} intern={intern}></InternCard>
      ))}
    </div>
      <div className='pt-10'>
        <JobPagination currentPage={currentPage
        } totalPages={jobs?.pagination?.totalPage} handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} isPreviousDisabled={isPreviousDisabled} isNextDisabled={isNextDisabled}></JobPagination>

      </div>
    </div>
  }

  return (

    <div className='py-5 bg-gray-100 px-10 md:px-[200px] '>
      <div><h2>Home - Internships </h2></div>
      <div className='py-20 lg:flex justify-center lg:space-x-10 '>
        <InternSidebar setSearch={setSearch} setLocationType={setLocationType}></InternSidebar>
        <div className='space-y-5 pt-20 md:pt-2'>
          <h2 className='text-center'>6318 Total Internships</h2>

          {/* internshipsoffercard */}
          <InternOfferCard></InternOfferCard>
          {/* all the internship card here */}
          {content}
        </div>
      </div>
    </div>

  );
};

export default page;