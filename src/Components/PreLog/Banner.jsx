/* eslint-disable react/no-unescaped-entities */
import { AllImages } from "@/assets/AllImages";
import { Select } from "antd";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import AvatarRating from "./AvatarRating";

const Banner = () => {
  return (
    <div>
      <div className="relative lg:-mt-28 ">
        <Image
          src={AllImages.PreLog.eBanner}
          className="lg:h-[60%] h-screen w-full object-cover  rounded-md "
          alt="marriage"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-55 flex flex-col justify-center items-center ">
          <h1 className="lg:text-7xl text-xl text-center font-bold text-white  -mt-36">
            Your Trusted Source <br /> for <br />{" "}
            <span className="text-site-color">Learning & Growth</span>
          </h1>
          <p className="lg:text-base text-sm   gap-2 lg:w-[50%] mx-auto text-center text-white lg:my-10 my-2">
            At InfoTech Digital Learning Center, we're dedicated to empowering
            individuals through education. Discover a world of knowledge at your
            fingertips. Join us as we navigate the path to knowledge and
            personal growth together.
          </p>

          <div className="absolute mt-80">
            <AvatarRating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
