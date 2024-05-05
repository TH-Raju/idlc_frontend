"use client";

import { Divider } from "antd";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { AllImages } from "@/assets/AllImages";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleMouseEnter2 = () => {
    setHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setHovered3(false);
  };

  return (
    <div className="flex justify-center">
      <div className="container mx-auto py-8 ">
        <Divider style={{ borderBlockColor: " #0A6847" }} />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="leading-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="border border-[#0A6847] rounded-full p-2 ">
                <MdOutlineEmail className="h-7 w-7 text-[#0A6847]" />
              </div>
              <div>
                <h3>Email Drop</h3>
                <p className="text-xs text-gray-400">idlc.support@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="border border-[#0A6847] rounded-full p-2 ">
                <MdLocationCity className="h-7 w-7 text-[#0A6847]" />
              </div>
              <div>
                <h3>Location From</h3>
                <p className="text-xs text-gray-400">
                  Moon-Sun, 9:00 AM -9:00 PM
                </p>
              </div>
            </div>
          </div>
          <Divider
            type="vertical"
            style={{ borderColor: "#0A6847", height: "30vh" }}
            className="hidden lg:block"
          />
          <div className="flex flex-col items-center gap-6">
            <Image src={AllImages.logo} alt="logo" className="h-20 w-fit" />
            <p className="w-52 text-center font-thin">
              There are many variations of product of Image.
            </p>
            <div className="flex items-center justify-center gap-5">
              <div
                className={`border border-[#0A6847] rounded-full p-3 ${
                  hovered ? "bg-[#0A6847] text-white" : "hover:bg-[#0A6847] "
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FaTwitter className="h-5 w-5" />
              </div>
              <div
                className={`border border-[#0A6847] rounded-full p-3 ${
                  hovered2 ? "bg-[#0A6847] text-white" : "hover:bg-[#0A6847] "
                }`}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <FaFacebookF className="h-5 w-5" />
              </div>
              <div
                className={`border border-[#0A6847] rounded-full p-3 ${
                  hovered3 ? "bg-[#0A6847] text-white" : "hover:bg-[#0A6847] "
                }`}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <FaLinkedinIn className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
