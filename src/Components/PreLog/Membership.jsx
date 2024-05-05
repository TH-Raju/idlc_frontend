"use client";
import { AllImages } from "@/assets/AllImages";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Membership = () => {
  const [selectItem, setSelectItem] = useState("gold");
  const select = (item) => {
    setSelectItem(item);
    console.log(selectItem);
  };
  return (
    <div className="mb-20 text-center container mx-auto ">
      <h1 className="text-center lg:text-5xl text-3xl font-bold">
        <span className="text-site-color">Membership</span> Plan
      </h1>

      <div className="flex gap-10 items-center justify-center my-8 bg-[#47586e] py-2 text-white rounded-tl-3xl rounded-br-3xl">
        <button
          onClick={() => setSelectItem("gold")}
          className={`flex items-center  gap-2 text-xl ${
            selectItem === "gold"
              ? "border-b-4 pb-2 border-b-site-color"
              : "border-none"
          }`}
        >
          <Image
            src={AllImages.Membership.gold}
            className="h-6 w-fit"
            alt="image"
          />{" "}
          <span>Gold</span>
        </button>
        <button
          onClick={() => setSelectItem("silver")}
          className={`flex items-center  gap-2 text-xl ${
            selectItem === "silver"
              ? "border-b-4 pb-2 border-b-site-color"
              : "border-none"
          }`}
        >
          <Image
            src={AllImages.Membership.silver}
            className="h-6 w-fit"
            alt="image"
          />{" "}
          <span>Silver</span>
        </button>
        <button
          onClick={() => setSelectItem("bronze")}
          className={`flex items-center  gap-2 text-xl ${
            selectItem === "bronze"
              ? "border-b-4 pb-2 border-b-site-color"
              : "border-none"
          }`}
        >
          <Image
            src={AllImages.Membership.bronze}
            className="h-6 w-fit"
            alt="image"
          />{" "}
          <span>Bronze</span>
        </button>
      </div>
      <p className="lg:w-[50%] mx-auto py-8">
        Enjoy complimentary access to our website for the first 30 days.
        Following this trial period, users will have the option to purchase
        subscriptions tailored to their specific needs. Unlock additional
        features and enhance your learning experience with a premium membership,
        enabling seamless interaction with our platform and increased engagement
        with our resources.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="bg-[#47586e] text-white flex flex-col items-center justify-center lg:w-[22%] px-3 py-2 rounded-lg">
          <h1 className="text-xl font-semibold py-2">3 Months Plan</h1>
          <div className="flex justify-center items-center gap-5 mt-3 mb-4">
            <div className="text-5xl font-bold">
              <div>
                <p>{selectItem === "gold" && <span>$10</span>}</p>
                <p>{selectItem === "silver" && <span>$20</span>}</p>
                <p>{selectItem === "bronze" && <span>$30</span>}</p>
              </div>
            </div>
            <p className="font-bold text-start text-xl leading-5">
              <span>Per Month</span> <br />{" "}
              <span className="font-normal text-sm ">
                Best plan for management
              </span>
            </p>
          </div>
          <p className="w-10 text-white border "></p>
          <p className="text-sm my-3">
            Slate helps you see how many more days you need...
          </p>
          <Link href="/">
            <Button
              className="my-2 w-full "
              style={{
                color: "black",
                fontWeight: "bold",
                backgroundColor: "white",
                borderColor: "white",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Choose Plan
            </Button>
          </Link>
        </div>
        <div className="bg-[#47586e] text-white flex flex-col items-center justify-center lg:w-[22%] px-3 py-2 rounded-lg">
          <h1 className="text-xl font-semibold py-2">6 Months Plan</h1>
          <div className="flex justify-center items-center gap-5 mt-3 mb-4">
            <div className="text-5xl font-bold">
              <div>
                <p>{selectItem === "gold" && <span>$40</span>}</p>
                <p>{selectItem === "silver" && <span>$55</span>}</p>
                <p>{selectItem === "bronze" && <span>$65</span>}</p>
              </div>
            </div>
            <p className="font-bold text-start text-xl leading-5">
              <span>Per Month</span> <br />{" "}
              <span className="font-normal text-sm ">
                Best plan for management
              </span>
            </p>
          </div>
          <p className="w-10 text-white border "></p>
          <p className="text-sm my-3">
            Slate helps you see how many more days you need...
          </p>
          <Link href="/">
            <Button
              className="my-2 w-full "
              style={{
                color: "black",
                fontWeight: "bold",
                backgroundColor: "white",
                borderColor: "white",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Choose Plan
            </Button>
          </Link>
        </div>
        <div className="bg-[#47586e] text-white flex flex-col items-center justify-center lg:w-[22%] px-3 py-2 rounded-lg">
          <h1 className="text-xl font-semibold py-2">1 Year Plan</h1>
          <div className="flex justify-center items-center gap-5 mt-3 mb-4">
            <div className="text-5xl font-bold">
              <div>
                <p>{selectItem === "gold" && <span>$70</span>}</p>
                <p>{selectItem === "silver" && <span>$85</span>}</p>
                <p>{selectItem === "bronze" && <span>$100</span>}</p>
              </div>
            </div>
            <p className="font-bold text-start text-xl leading-5">
              <span>Per Month</span> <br />{" "}
              <span className="font-normal text-sm ">
                Best plan for management
              </span>
            </p>
          </div>
          <p className="w-10 text-white border "></p>
          <p className="text-sm my-3">
            Slate helps you see how many more days you need...
          </p>
          <Link href="/">
            <Button
              className="my-2 w-full "
              style={{
                color: "black",
                fontWeight: "bold",
                backgroundColor: "white",
                borderColor: "white",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Choose Plan
            </Button>
          </Link>
        </div>
      </div>

      {/* <div>
        <p>{selectItem === "gold" && <span>Gold</span>}</p>
        <p>{selectItem === "silver" && <span>Silver</span>}</p>
        <p>{selectItem === "bronze" && <span>Bronze</span>}</p>
      </div> */}
    </div>
  );
};

export default Membership;
