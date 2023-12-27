import React from 'react';

const InternOfferCard = () => {
    return (
        <div className='bg-white py-5 px-5 rounded space-y-3 lg:min-w-[700px] w-full'>
        <div className='flex justify-between'>
        <h2> Special Offer for University Students</h2>
        <p className='bg-orange-300 rounded-xl px-5'>OFFER</p>
        </div>
        <p className='text-sm'> Get 55%  off on online trainings</p>
        <div className='flex lg:space-x-3 text-sm'>
        <p>Use Cupon : HGS6HBHS8 </p>
        <p>|</p>
        <p>Offer ends in 12h:38m: 20s</p>
        </div>
        <p className='text-sm'> Choose from Web development, Python, Node, React</p>

        <div className='flex justify-between pt-5  text-sm'>
            <button className='bg-gray-100 px-2 rounded py-1'>Careers Portal Certified Trainings</button>
            <button   className='text-blue-400 shadow font-semibold px-2'>Enroll Now</button>
        </div>
                </div>
    );
};

export default InternOfferCard;