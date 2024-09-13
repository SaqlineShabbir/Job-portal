"use client";

import verify from "@/assets/animate-files/verify.json";
import axios from "axios";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const VerifyToken = ({ params }) => {
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.post("http://localhost:3000/api/verify", {
          token: params.token,
        });

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } catch (error) {
        // Handle error if verification fails
        console.error("Verification failed:", error);
      }
    };

    verifyToken();
  }, [params.token, router]);

  return (
    <div className="flex justify-center items-center">
      <div className="my-10">
        <h1 className="text-5xl font-bold text-center text-pink-500">
          Wellcome to here
        </h1>
        <Lottie
          className="w-80 h-full"
          animationData={verify}
          height={500}
          width={500}
          loop={true}
        />
      </div>
    </div>
  );
};

export default VerifyToken;
