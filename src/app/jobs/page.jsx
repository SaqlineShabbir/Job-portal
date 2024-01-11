"use client"

import React from 'react';
import Lottie from "lottie-react";
import JobAnimate from '../../assets/animate-files/jobSearch.json';

const Jobs = () => {
    return (
        <div>
            <Lottie
                animationData={JobAnimate}
                loop={true}
            />
        </div>
    )
}

export default Jobs