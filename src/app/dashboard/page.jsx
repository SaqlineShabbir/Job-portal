'use client'
import LatestIntern from '@/components/shared/LatestIntern';
import LatestJobs from '@/components/shared/LatestJobs';
import { AuthContext } from '@/context/AuthProvider';
import Image from 'next/image';
import React, { useContext } from 'react';

const page = () => {
    const { LogoutUser, user } = useContext(AuthContext);

    const skills = [
        {
            id: '1',
            name: 'HTML'
        },
        {
            id: '2',
            name: 'HTML'
        },
        {
            id: '3',
            name: 'HTML'
        },
        {
            id: '4',
            name: 'HTML'
        },
    ]
    const socialMedia = [
        {
            id: '1',
            name: 'HTML'
        },
        {
            id: '2',
            name: 'HTML'
        },
        {
            id: '3',
            name: 'HTML'
        },
        {
            id: '4',
            name: 'HTML'
        },
    ]
    return (
        <div>
            <div className="max-w-[700px]  bg-white p-20 rounded ">
                <div className="flex items-center mb-6">
                    <Image
                        src={user?.photo}
                        alt="Profile Image"
                        height={200}
                        width={200}
                        className="rounded-full h-20 w-20 mr-4"
                    />
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800">{user?.firstname}</h2>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
                    {/* <p className="text-gray-700">{user.professionalSummary}</p> */}
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Skills</h3>
                    <ul className="flex flex-wrap">
                        {skills.map((skill) => (
                            <li key={skill.id} className="bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2">
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                    <ul className="flex">
                        {socialMedia.map((social) => (
                            <li key={social.id} className="mr-4">
                                <a
                                    href={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    {/* {social.icon} {social.label} */}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* 
      <div>
        <h3 className="text-xl font-semibold mb-2">Professional Website</h3>
        <a
          href={user.professionalWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {user.professionalWebsite}
        </a>
      </div> */}
            </div>
        </div>
    );
};

export default page;