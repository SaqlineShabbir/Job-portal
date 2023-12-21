import LatestIntern from '@/components/shared/LatestIntern';
import LatestJobs from '@/components/shared/LatestJobs';
import React from 'react';

const page = () => {
    return (
        <div   className=''>
            <LatestIntern></LatestIntern>
            <LatestJobs></LatestJobs>
        </div>
    );
};

export default page;