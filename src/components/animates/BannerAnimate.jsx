"use client";

import Lottie from "lottie-react";
import JobAnimate from "../../assets/animate-files/banner-job.json";

const BannerAnimate = () => {
  return (
    <Lottie animationData={JobAnimate} height={500} width={500} loop={true} />
  );
};

export default BannerAnimate;
