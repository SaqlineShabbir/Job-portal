'use client'
import { AuthContext } from '@/context/AuthProvider';
import { AxiosInstance } from '@/utils/axios/axiosInstance';
import React, { useContext, useEffect, useState } from 'react';

const page = () => {
    const [applications, setApplications] = useState(null)
    const { LogoutUser, user } = useContext(AuthContext)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosInstance.get(`/applyjob?email=sabbir@gmail.com`);
                setApplications(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error, you might want to set an error state or display an error message.
            }
        };

        fetchData();
    }, []);
    return (
        <div className="container mx-auto">

            <h1 className="text-2xl font-bold mb-4">Responsive Application Tracking System</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden ">
                    <thead className="bg-gray-200 text-sm">
                        <tr className=''>
                            <th className="py-2 px-4 border-b">COMPANY</th>
                            <th className="py-2 px-4 border-b">Job Title</th>
                            <th className="py-2 px-4 border-b">APPLIED ON</th>
                            <th className="py-2 px-4 border-b">NUMBER OF APPLICANTS</th>
                            <th className="py-2 px-4 border-b">APPLICATION STATUS</th>
                            <th className="py-2 px-4 border-b">REVIEW APPLICATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- Example data, replace with dynamic data from your backend --> */}
                        {applications?.data?.map((application) => (


                            <tr key={application._id}>
                                <td className="py-2 px-4 border-b">{application.jobId?.companyName}</td>
                                <td className="py-2 px-4 border-b">{application.jobId?.title.slice(0, 15)}</td>
                                <td className="py-2 px-4 border-b">2024-01-04</td>
                                <td className="py-2 px-4 mx-auto border-b">25</td>
                                <td className="py-2 px-4 border-b">In Progress</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="py-1 px-2 rounded-md focus:outline-none focus:shadow-outline-blue">
                                        Review
                                    </button>
                                </td>
                            </tr>
                        ))}


                        {/* <!-- Add more rows as needed --> */}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default page;