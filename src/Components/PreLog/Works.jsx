"use client";
import { AllImages } from "@/assets/AllImages";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";
import { BsSearchHeart } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

const Works = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="py-32">
      <div className="relative lg:-mt-28 -z-20">
        <Image
          src={AllImages.PreLog.eBanner}
          className="lg:h-[50vh] h-screen w-full object-cover  rounded-md "
          alt="marriage"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-55 flex flex-col justify-center items-center">
          <h1 className="lg:text-5xl text-2xl font-semibold text-white">
            How InfoTech Digital Learning Center Works
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 my-10">
            <div
              data-aos="fade-right"
              className="lg:w-[15%] bg-white px-1 py-4 flex flex-col items-center justify-center gap-2 rounded-lg"
            >
              <RiUserAddFill
                className="h-12 w-fit text-site-color"
                data-aos="fade-up-right"
              />
              <p className="text-lg">Create Account</p>
              <p className="text-center text-sm">
                You can easily create a Account on IDLC completely free of cost
                within some steps. and start learning.
              </p>
            </div>
            <div
              data-aos="fade-down"
              className="lg:w-[15%] bg-white px-1 py-4 flex flex-col items-center justify-center gap-2 rounded-lg"
            >
              <MdOutlineLibraryAddCheck
                className="h-12 w-fit text-site-color "
                data-aos="fade-up"
              />
              <p className="text-lg">Enrolled Course</p>
              <p className="text-center text-sm">
                Explore our vast collection of free and paid courses to enhance
                your skills and expand your horizons
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="lg:w-[15%] bg-white px-1 py-4 flex flex-col items-center justify-center gap-2 rounded-lg "
            >
              <FaChalkboardTeacher
                className="h-12 w-fit text-site-color "
                data-aos="fade-up"
              />
              <p className="text-lg">Start learning</p>
              <p className="text-center text-sm">
                If you create Account and enroll any course, you can start
                learning on your chosen course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
