/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoStar } from "react-icons/io5";

const AvatarRating = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5">
      <div className="flex -space-x-2">
        <div className="hs-tooltip inline-block">
          <img
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            James
          </span>
        </div>
        <div className="hs-tooltip inline-block">
          <img
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
            src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            Maria
          </span>
        </div>
        <div className="hs-tooltip inline-block">
          <img
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
            src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
            alt="Image Description"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            Anna
          </span>
        </div>
        <div className="hs-tooltip inline-block">
          <img
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            Brian
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <IoStar className="h-7 w-fit text-site-color" />
        <div className="flex items-center gap-1">
          <IoStar className="h-6 w-fit text-white bg-site-color p-1" />
          <IoStar className="h-6 w-fit text-white bg-site-color p-1" />
          <IoStar className="h-6 w-fit text-white bg-site-color p-1" />
          <IoStar className="h-6 w-fit text-white bg-site-color p-1" />
          <IoStar className="h-6 w-fit text-white bg-site-color p-1" />
          <span className="text-white lg:ml-3">4.5 / 5</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarRating;
