import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const JobPagination = ({ currentPage, totalPages, handleNextClick, handlePreviousClick, isPreviousDisabled, isNextDisabled }) => {


    return (
        <div className="flex items-center justify-center space-x-4">
            <button
                onClick={handlePreviousClick}
                disabled={isPreviousDisabled}
                className={`px-4 py-2 rounded-md ${isPreviousDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    } text-white`}
            >
                <FaChevronLeft className="inline-block mr-2" />
                Previous
            </button>

            <span className="text-gray-600">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={handleNextClick}
                disabled={isNextDisabled}
                className={`px-4 py-2 rounded-md ${isNextDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    } text-white`}
            >
                Next
                <FaChevronRight className="inline-block ml-2" />
            </button>
        </div>
    );
};

export default JobPagination;