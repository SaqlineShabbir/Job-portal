import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import InternCard from '@/components/internships/InternCard';
import InternOfferCard from '@/components/internships/InternOfferCard';
import InternSidebar from '@/components/internships/InternSidebar';
import React from 'react';

const internships = [
    {
      id: '1',
      status:'Actively Hiring',
      title: 'Technical Writing - Biochemistry & Environmental Sciences',
      starts:'Immediately',
      duration:'6 month',
      location:'Work from home',
      salary:'12000-25000 / month',
      type:'Intirnship with job offer',
      postedAt:'22 December',
      description:
        'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
      link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
      thumbnail:
        'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
    },
    {
      id: '2',
      title: 'Another Big Apartment Project Slated for Broad Ripple Company',
      description:
        'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
      date: 'may 10, 2023',
      link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
      thumbnail:
        'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
    },
    {
      id: '3',
      title: 'Another Big Apartment Project Slated for Broad Ripple Company',
      description:
        'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
      date: 'may 10, 2023',
      link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
      thumbnail:
        'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
    },
    {
      id: '4',
      title: 'Another Big Apartment Project Slated for Broad Ripple Company',
      description:
        'Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services',
      date: 'may 10, 2023',
      link: 'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-768x588.jpg',
      thumbnail:
        'https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_170815865-825x465.jpg',
    },]
const page = () => {
    return (
        
        <div  className='py-5 bg-gray-100 px-10 md:px-[200px] '>
            <div><h2>Home - Internships </h2></div>
            <div  className='py-20 lg:flex justify-center lg:space-x-10 '>
            <InternSidebar></InternSidebar>
            <div className='space-y-5 pt-20 md:pt-2'>
                <h2 className='text-center'>6318 Total Internships</h2>
                
                {/* internshipsoffercard */}
                <InternOfferCard></InternOfferCard>
              {/* all the internship card here */}
                <div className='grid grid-cols-1 gap-5'>
                {internships?.map((intern) => (
  <InternCard key={intern?.id} intern={intern}></InternCard>
))}
                </div>
            </div>
            </div>
        </div>
      
    );
};

export default page;