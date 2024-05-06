"use client";

import React, { useState } from "react";
import "./index.css";
import {
  Button,
  Checkbox,
  Form,
  FormProps,
  Input,
  Typography,
  Divider,
  Radio,
} from "antd";
import UpperPart from "./UpperPart";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { SiGoogle } from "react-icons/si";
import Image from "next/image";
import SubmitButton from "../Shared/SubmitButton";
import { AllImages } from "@/assets/AllImages";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Signup = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex justify-center items-center container mx-auto gap-20">
      <div className="mx-auto my-10  lg:w-[50%]">
        <Form
          className="lg:w-[80%] mx-auto"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className=" text-black">
            {/* Upper for google and facebook signup  */}

            <div>
              <div className="flex justify-center mb-5">
                <Image src={AllImages.logo} alt="logo" className="h-20 w-fit" />
              </div>
              <div className=" text-center">
                <h1 className="mb-3 text-3xl font-bold ">Sign Up form</h1>
                <p>Create your account easily with less information.</p>
              </div>
            </div>

            <Divider style={{ borderBlockColor: "gray" }}></Divider>
          </div>

          <Typography.Title level={5}>
            <span className="text-black">First Name</span>
          </Typography.Title>
          <Form.Item
            name={["username", "firstName"]}
            rules={[
              { required: true, message: "Please Write your First Name!" },
            ]}
          >
            <Input
              size="large"
              className="bg-transparent  "
              placeholder="Enter your First name"
              style={{
                background: "transparent",
                color: "black",
              }}
              // Define a className for the input and set the placeholder color in CSS
              // Using the ::placeholder pseudo-element
              // Make sure to define the placeholder color in your CSS
            />
          </Form.Item>

          <Typography.Title level={5}>
            <span className="text-black">Last Name</span>
          </Typography.Title>
          <Form.Item
            name={["username", "LastName"]}
            rules={[
              { required: true, message: "Please Write your Last Name!" },
            ]}
          >
            <Input
              size="large"
              className="bg-transparent  "
              placeholder="Enter your Last name"
              style={{
                background: "transparent",
                color: "black",
              }}
            />
          </Form.Item>

          <Typography.Title level={5}>
            <span className="text-black">Contact Number </span>
          </Typography.Title>
          <Form.Item
            name="contact"
            rules={[{ required: true, message: "Write your Last Name!" }]}
          >
            <Input
              size="large"
              className="bg-transparent  "
              placeholder="Enter your Contact Number"
              style={{
                background: "transparent",
                color: "black",
              }}
            />
          </Form.Item>

          <Typography.Title level={5}>
            <span className="text-black">Email</span>
          </Typography.Title>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              size="large"
              className="bg-transparent  "
              placeholder="--@gmail.com"
              style={{
                background: "transparent",
                color: "black",
              }}
            />
          </Form.Item>

          <div className="flex justify-between items-baseline ">
            <Typography.Title level={5}>
              <span className="text-black">Set Password</span>
            </Typography.Title>
          </div>

          <Form.Item
            name="newPassword"
            rules={[{ required: true, message: "Please Enter new password!" }]}
          >
            <Input.Password
              size="large"
              className="bg-transparent  "
              placeholder="Set Password"
              style={{
                background: "transparent",
                color: "black",
              }}
            />
          </Form.Item>
          <div className="flex justify-between items-baseline ">
            <Typography.Title level={5}>
              <span className="text-black">Confirm Password</span>
            </Typography.Title>
          </div>

          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              size="large"
              className="bg-transparent  "
              placeholder="Re-enter your password"
              style={{
                background: "transparent",
                color: "black",
              }}
            />
          </Form.Item>

          <Link href="/profile">
            <Form.Item>
              <SubmitButton title={"Create Account"} />
            </Form.Item>
          </Link>
          <div>
            <div className="flex justify-center items-center text-black ">
              <p>Already have an account?</p>
              <Link href="/login">
                <Button
                  type="link"
                  style={{
                    color: "#0A6847",
                    border: "none",
                    borderBottom: "1px solid #0A6847",
                  }}
                  className="hover:text-blue-500 hover:border-blue-500 ml-3 "
                >
                  Log in here
                </Button>
              </Link>
            </div>
            {/* <Divider style={{ borderBlockColor: "white" }} className="py-2" />
          <p className="text-black text-balance text-center">
            Your Capture Awards collects and uses personal data in accordance
            with our Privacy Policy. By creating an account, you agree to
            our Terms & Conditions.
          </p> */}
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Signup;
