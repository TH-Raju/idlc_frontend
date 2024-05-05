/* eslint-disable react/no-unescaped-entities */
"use client";
import { AllImages } from "@/assets/AllImages";
import { Divider } from "antd";
import Image from "next/image";
import CountUp from "react-countup";
import { PiStudentBold } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

const Welcome = () => {
  return (
    <div className="container mx-auto lg:my-32 my-10  ">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="relative  lg:w-[35%]">
          <Image
            src={AllImages.PreLog.backImg}
            className="h-[500px] w-fit  p-10 z-10"
            alt="image"
          />
          <div className="absolute bottom-0 right-0">
            <Image
              src={AllImages.PreLog.forImg}
              className="h-60 w-fit rounded-tl-3xl rounded-br-3xl"
              alt="image"
            />
          </div>
          <div className="absolute top-0 left-0 -z-10">
            <Image
              src={AllImages.PreLog.cirImg}
              className="h-20 w-fit "
              alt="image"
            />
          </div>
        </div>
        <div className="lg:w-[45%] ">
          <h1 className="lg:text-6xl text-4xl font-bold leading-10 text-gray-700">
            WELCOME TO
            <span className="text-site-color lg:text-4xl text-3xl">
              {" "}
              <br />
              InfoTech Digital Learning Center
            </span>
          </h1>
          <p className="lg:w-[80%] my-5">
            At Infotech Digital Learning Center, we believe that education is
            the cornerstone of a fulfilling life. Just as marriage completes
            half of a person's deen, our mission is to empower individuals to
            embrace knowledge and skill development, thus enriching their lives
            and fulfilling their potential. With a focus on integrity, kindness,
            and righteousness, our center strives to instill a deep sense of
            devotion and reverence towards learning. Join us on the journey of
            self-discovery and growth as we navigate the path to educational
            excellence and personal fulfillment together.
          </p>
          <p className="my-5">
            <button className="text-site-color">Click here to</button> start you
            matrimony service now.
          </p>
          <hr />
          <p className="lg:w-[80%] my-5">
            At IDLC, we're dedicated to offering an unparalleled learning
            experience. We understand that readability and engagement are
            paramount when it comes to absorbing content. That's why our website
            is meticulously crafted to deliver not only readable but also
            captivating learning materials. Explore our platform and embark on a
            journey of discovery and growth with IDLC.
          </p>
          <div className="flex justify-between items-center lg:mr-44">
            <div>
              <h1 className="text-site-color">Enquiry</h1>
              <p>+880 189 765 0987</p>
            </div>
            <div>
              <h1 className="text-site-color">Get Support</h1>
              <p>idlc@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* details  */}
      <div className="lg:my-20 my-10 ">
        <hr />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-5 py-5">
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "10vh" }}
            className="hidden lg:block"
          />
          <div className="flex flex-col items-center gap-2">
            <div className="flex">
              <Image
                src={AllImages.PreLog.bride}
                className="h-10 w-fit "
                alt="image"
              />
              <Image
                src={AllImages.PreLog.groom}
                className="h-10 w-fit -ml-5"
                alt="image"
              />
            </div>
            <p>Total Students</p>
            <p className="text-4xl">
              <CountUp start={0} end={5165} duration={4} />
            </p>
          </div>
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "10vh" }}
            className="hidden lg:block"
          />
          {/* <div className="lg:hidden block">
            <Divider type="horizontal" style={{ borderColor: "gray" }} />
          </div> */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex">
              <PiStudentBold className="h-10 w-fit " />
            </div>
            <p>Total Teacher/Faculty</p>
            <p className="text-4xl">
              <CountUp start={0} end={84} duration={3} />
            </p>
          </div>
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "10vh" }}
            className="hidden lg:block"
          />{" "}
          {/* <Divider
            type="horizontal"
            style={{ borderColor: "gray" }}
            className="lg:hidden block"
          /> */}
          <div className="flex flex-col  items-center gap-2">
            <div className="flex">
              <SiGoogleclassroom className="h-10 w-fit " />
            </div>
            <p>Total Online Class</p>
            <p className="text-4xl">
              <CountUp start={0} end={165} duration={3} />
            </p>
          </div>
          <Divider
            type="vertical"
            style={{ borderColor: "gray", height: "10vh" }}
            className="hidden lg:block"
          />{" "}
          {/* <Divider
            type="horizontal"
            style={{ borderColor: "gray" }}
            className="lg:hidden block"
          /> */}
          {/* <div className="flex flex-col items-center gap-2">
            <div className="flex">
              <Image
                src={AllImages.PreLog.marri}
                className="h-10 w-fit "
                alt="image"
              />
            </div>
            <p>Total Successful Marriages</p>
            <p className="text-4xl">
              <CountUp start={0} end={1500} duration={5.75} />+
            </p>
          </div> */}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Welcome;
