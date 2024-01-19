"use client"

import React from 'react';
import Lottie from "lottie-react";
import JobAnimate from '../../assets/animate-files/banner-job.json';

const BannerAnimate = () => {
    return (
        <Lottie
            animationData={JobAnimate}
            height={700}
            width={700}
            loop={true}
        />
    )
}

export default BannerAnimate;