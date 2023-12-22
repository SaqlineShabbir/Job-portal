import React from 'react';
import { FaFilter } from 'react-icons/fa6';
import MaxWidthWrapper from '../MaxWidthWrapper';

const InternSidebar = () => {
    return (
       
        <div className='main bg-white rounded lg:w-[300px] h-full border px-5 py-5  lg:mt-[50px]'>
           <div>
           <div  className='flex text-xl justify-center py-5'>
               
               <FaFilter className='pt-1'/>
               <h1 className=''>Filters </h1>
           </div>
      {/* //form */}
           <div>
           <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                            Profile
                        </label>
                        <input
                           
                            type="text"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your full name"
                        />
                    </div>
           <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                            Location
                        </label>
                        <input
                           
                            type="text"
                            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your full name"
                        />
                    </div>

     <div className="max-w-md py-2 rounded-md ">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
        //   checked={isChecked}
        //   onChange={handleCheckboxChange}
        />
        <span className="text-sm font-medium text-gray-700">Work from home</span>
      </label>
    </div>
     <div className="max-w-md py-2 rounded-md ">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
        //   checked={isChecked}
        //   onChange={handleCheckboxChange}
        />
        <span className="text-sm font-medium text-gray-700">Part time</span>
      </label>
    </div>
                    

                    
           </div>
           </div>
        </div>
       
    );
};

export default InternSidebar;