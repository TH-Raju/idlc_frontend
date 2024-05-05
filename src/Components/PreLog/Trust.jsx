/* eslint-disable react/no-unescaped-entities */
"use client";
import { AllImages } from "@/assets/AllImages";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Trust = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1); // Small screens
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(3); // Medium screens
      }
    };

    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial values
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="py-20 ">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-site-color font-bold text-xl">Trusted Brand</h1>
        <p className="text-4xl font-semibold">Trust by 1600+ Students</p>
        <div>
          <Image
            src={AllImages.PreLog.p1}
            className="h-full w-fit mt-5"
            alt="image"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between  items-center relative">
        <div className="left-0 absolute">
          <Image
            src={AllImages.PreLog.p2}
            className="h-full w-fit  -mt-20 -pt-40"
            alt="image"
          />
        </div>
        <div className="lg:w-[80%] w-[90%] mx-auto">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide className="lg:px-10 px-5  py-10">
              <div className=" px-10 border border-site-color border-opacity-40 rounded-br-3xl rounded-tl-3xl">
                <div>
                  <Image
                    src={AllImages.PreLog.user}
                    className="h-20 w-fit rounded-tl-3xl rounded-br-3xl -mt-10"
                    alt="image"
                  />
                </div>
                <p className="text-sm py-5">
                  IDLC has been a game-changer for my learning journey. The
                  resources are comprehensive, the instructors are
                  knowledgeable, and the platform is user-friendly. I highly
                  recommend it to anyone looking to enhance their skills.
                </p>
                <p className="font-bold">MD Akash</p>
                <p className="text-sm font-bold">Dhaka</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="lg:px-10 px-5  py-10">
              <div className=" px-10 border border-site-color border-opacity-40 rounded-br-3xl rounded-tl-3xl">
                <div>
                  <Image
                    src={AllImages.PreLog.user2}
                    className="h-20 w-fit rounded-tl-3xl rounded-br-3xl -mt-10"
                    alt="image"
                  />
                </div>
                <p className="text-sm py-5">
                  As a student, I've found IDLC to be invaluable. The content is
                  engaging, the courses are well-structured, and the support
                  team is responsive. It's truly a one-stop destination for
                  anyone seeking quality education online.
                </p>
                <p className="font-bold">Jekkins Dropa</p>
                <p className="text-sm font-bold">USA</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="lg:px-10 px-5 py-10">
              <div className=" px-10 border border-site-color border-opacity-40 rounded-br-3xl rounded-tl-3xl">
                <div>
                  <Image
                    src={AllImages.PreLog.user3}
                    className="h-20 w-fit rounded-tl-3xl rounded-br-3xl -mt-10"
                    alt="image"
                  />
                </div>
                <p className="text-sm py-5">
                  IDLC exceeded my expectations in every aspect. The variety of
                  courses available, coupled with the flexibility to learn at my
                  own pace, has made it the perfect platform for me. I've
                  already recommended it to all my friends!
                </p>
                <p className="font-bold">Mostain Billah</p>
                <p className="text-sm font-bold">Afghanistan</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="lg:px-10 px-5  py-10">
              <div className=" px-10 border border-site-color border-opacity-40 rounded-br-3xl rounded-tl-3xl">
                <div>
                  <Image
                    src={AllImages.PreLog.user4}
                    className="h-20 w-fit rounded-tl-3xl rounded-br-3xl -mt-10"
                    alt="image"
                  />
                </div>
                <p className="text-sm py-5">
                  I've tried several online learning platforms, but none compare
                  to IDLC. The instructors are passionate about their subjects,
                  the community is supportive, and the learning environment is
                  conducive to success. I'm grateful to have found such a
                  valuable resource.
                </p>
                <p className="font-bold">Dhanvi</p>
                <p className="text-sm font-bold">Nepal</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="right-0 absolute">
          <Image
            src={AllImages.PreLog.p3}
            className="h-167 w-fit mt-20 pt-40"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Trust;
