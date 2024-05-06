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

const Courses = () => {
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
  return (
    <div className="my-40">
      <h1 className="text-center lg:text-5xl text-3xl font-bold mb-20">
        Our <span className="text-site-color">Courses</span>
      </h1>
      <div className="lg:w-[75%] w-[90%] mx-auto">
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
            <div className="relative h-[450px] bg-site-color bg-opacity-15 mx-auto backdrop-filter backdrop-blur-5 bg-trueGray-800  border border-white border-opacity-10 rounded-lg p-4">
              <div className=" aspect-video ">
                <iframe
                  className=" h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/ajdRvxDWH4w?si=bbbCZKbqygXuVx1I"
                  width="100%"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>{" "}
              <h1 className="text-2xl my-2 font-semibold">
                JavaScript Variable
              </h1>
              <p>
                JavaScript is one of the most used coding language by Developers
                & is heavily used in Website Development. Learning this will
                give you great edge and confidence for Job preparation.
              </p>
              <button className="bg-site-color w-full py-1 mt-5 font-semibold rounded-sm absolute bottom-0 left-0">
                Start Learning
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="lg:px-10 px-5  py-10">
            <div className="relative h-[450px] bg-site-color bg-opacity-15 mx-auto backdrop-filter backdrop-blur-5 bg-trueGray-800  border border-white border-opacity-10 rounded-lg p-4">
              <div className=" aspect-video ">
                <iframe
                  className=" h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/-g969furGik?si=qWVxW49v809GdzIF"
                  width="100%"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>{" "}
              <h1 className="text-2xl my-2 font-semibold">Tailwind CSS</h1>
              <p>
                Tailwind CSS is one of the most used styling language by
                Developers & is heavily used in Website Design. Learning this
                will give you great edge and confidence for Job preparation.
              </p>
              <button className="bg-site-color w-full py-1 mt-5 font-semibold rounded-sm absolute bottom-0 left-0">
                Start Learning
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="lg:px-10 px-5  py-10">
            <div className="relative h-[450px] bg-site-color bg-opacity-15 mx-auto backdrop-filter backdrop-blur-5 bg-trueGray-800  border border-white border-opacity-10 rounded-lg p-4">
              <div className=" aspect-video ">
                <iframe
                  className=" h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/QkeMrwEnGAw?si=eMmBUf7S_ibBLbQT"
                  width="100%"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>{" "}
              <h1 className="text-2xl my-2 font-semibold">HSC ICT</h1>
              <p>
                ICT is one of the most used coding language by Student & is
                heavily used in Software Development. Learning this will give
                you great edge and confidence for Job preparation and Exams.
              </p>
              <button className="bg-site-color w-full py-1 mt-5 font-semibold rounded-sm absolute bottom-0 left-0">
                Start Learning
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="lg:px-10 px-5  py-10">
            <div className="relative h-[450px] bg-site-color bg-opacity-15 mx-auto backdrop-filter backdrop-blur-5 bg-trueGray-800  border border-white border-opacity-10 rounded-lg p-4">
              <div className=" aspect-video ">
                <iframe
                  className=" h-full w-full rounded-lg"
                  src="https://www.youtube.com/embed/OEV8gMkCHXQ?si=Gj_sIWDlGV5ZQawd"
                  width="100%"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>{" "}
              <h1 className="text-2xl my-2 font-semibold">100 Second CSS</h1>
              <p>
                CSS is one of the most used styling language by Developers & is
                heavily used in Website Design. Learning this will give you
                great edge and confidence for Job preparation.
              </p>
              <button className="bg-site-color w-full py-1 mt-5 font-semibold rounded-sm absolute bottom-0 left-0">
                Start Learning
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Courses;
