"use client"

import { RotatingLines } from 'react-loader-spinner'

const CardLoader = () => {
    return (
        <div className='flex justify-center items-center my-auto mx-auto '>
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default CardLoader;