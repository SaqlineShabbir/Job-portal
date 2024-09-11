"use client";
import dynamic from "next/dynamic";

// Dynamically import Lottie with server-side rendering disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import JobAnimate from "../../assets/animate-files/banner-job.json";

const BannerAnimate = () => {
  return (
    <Lottie animationData={JobAnimate} height={500} width={500} loop={true} />
  );
};

export default BannerAnimate;
