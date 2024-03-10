"use client"
import JobCard from '@/components/jobs/JobCard';
import JobOfferCard from '@/components/jobs/JobOfferCard';
import JobSidebar from '@/components/jobs/JobSidebar';
import { AuthContext } from '@/context/AuthProvider';
import CardLoader from '@/ui/loaders/CardLoader';
import JobPagination from '@/ui/paginations/JobPagination';
import getJobsWithFilters from '@/utils/apiCalls/getJobsWithFilters';
// import { AxiosInstance } from '@/utils/axios/axiosInstance';
import React, { useContext, useEffect, useState } from 'react';

const Jobs = async () => {
  const [search, setSearch] = useState(null)
  const [locationType, setLocationType] = useState(false)
  const [jobtimetype, setJobtimetype] = useState(false)
  const [jobs, setJobs] = useState(null)
  const { loading, setLoading } = useContext(AuthContext)
  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5)
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

  //for search
  const buildQueryString = () => {
    let queryString = `page=${currentPage}&limit=${limit}`;

    if (search) {
      queryString += `&title=${search}`;
    }
    if (locationType) {
      queryString += `&locationtype=Remote`;
    }
    if (jobtimetype) {
      queryString += `&jobtimetype=Part-Time`;
    }

    return queryString;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryString = buildQueryString();
        const response = await getJobsWithFilters(queryString);

        setJobs(response);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, you might want to set an error state or display an error message.
      }
    };

    fetchData();
  }, [search, locationType, currentPage, jobtimetype]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const queryString = buildQueryString();
  //       const response = await AxiosInstance.get(`/jobs?${queryString}`);

  //       setJobs(response?.data);
  //       setLoading(false)
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       // Handle error, you might want to set an error state or display an error message.
  //     }
  //   };

  //   fetchData();
  // }, [search, locationType, currentPage, jobtimetype]);


  //decide what to render
  let content = null
  if (loading) {
    content = (
      <>
        <CardLoader />
      </>
    );
  }

  if (!loading && jobs?.data?.length === 0) {
    content = <p>No jobs found! </p>;
  }

  if (!loading && jobs?.data?.length > 0) {
    content = <div> <div className='grid grid-cols-1 gap-5'>
      {jobs?.data?.map((job) => (
        <JobCard key={job?._id} job={job}></JobCard>
      ))}
    </div>
      <div className='pt-10'>
        <JobPagination currentPage={currentPage
        } totalPages={jobs?.pagination?.totalPage} handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} isPreviousDisabled={isPreviousDisabled} isNextDisabled={isNextDisabled}>

        </JobPagination>

      </div>
    </div>
  }

  return (

    <div className='py-5 bg-gray-100  md:px-[200px] '>
      <div><h2 className='pl-3 lg:pl-0'>Home - Internships </h2></div>
      <div className='py-20 lg:flex justify-center lg:space-x-10 '>
        <JobSidebar setSearch={setSearch} setLocationType={setLocationType} setJobtimetype={setJobtimetype}></JobSidebar>
        <div className='space-y-5 pt-20 md:pt-2'>
          <h2 className='text-center'>6318 Total Internships</h2>

          {/* internshipsoffercard */}
          <JobOfferCard></JobOfferCard>
          {/* all the internship card here */}
          {content}
        </div>
      </div>
    </div>
  );
};

export default Jobs;