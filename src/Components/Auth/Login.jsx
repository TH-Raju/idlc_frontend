"use client";

import React from "react";
import {
  Button,
  Checkbox,
  Form,
  FormProps,
  Input,
  Typography,
  Divider,
} from "antd";
import UpperPart from "./UpperPart";
import Link from "next/link";
import SubmitButton from "../Shared/SubmitButton";
import Image from "next/image";
import { AllImages } from "@/assets/AllImages";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => (
  <div className="flex justify-center items-center container mx-auto gap-10">
    <div className="lg:w-[40%] mx-auto h-screen flex justify-center items-center ">
      <Form
        className="w-[80%] mx-auto"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className=" text-black">
          <div>
            <div className=" text-center">
              <h1 className="mb-3 text-3xl font-bold ">
                {" "}
                <div>
                  <div className="flex justify-center mb-5">
                    <Image
                      src={AllImages.logo}
                      alt="logo"
                      className="h-20 w-fit"
                    />
                  </div>
                  <div className=" text-center">
                    <h1 className="mb-3 text-3xl font-bold ">
                      Great to have you back !
                    </h1>
                  </div>
                </div>
              </h1>
            </div>
          </div>

          <Divider style={{ borderBlockColor: "gray" }}></Divider>
        </div>
        <Typography.Title level={5}>
          <span className="text-black">User Name or Email</span>
        </Typography.Title>
        <Form.Item
          name="username"
          className="mb-6"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            className="bg-transparent"
            style={{
              background: "transparent",
              color: "black",
            }}
          />
        </Form.Item>

        <div className="flex justify-between items-baseline ">
          <Typography.Title level={5}>
            <span className="text-black">Password</span>
          </Typography.Title>
          <Link href="/forgot-password">
            <Button
              type="link"
              className="border-b-site-color text-site-color mb-3"
            >
              Forgot
            </Button>
          </Link>
        </div>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className="bg-transparent "
            style={{
              background: "transparent",
              color: "black",
            }}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            <span className="text-black">Remember me</span>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Link href="/home">
            <SubmitButton title={"Sign in"} />
          </Link>
        </Form.Item>
        <div>
          <div className="flex justify-center items-center text-black ">
            <p>New here?</p>
            <Link href="/signup">
              <Button
                type="link"
                style={{
                  color: "#0A6847",
                  border: "none",
                  borderBottom: "1px solid #0A6847",
                }}
                className="hover:text-blue-500 hover:border-blue-500 ml-3 "
              >
                Create a IDLC Account
              </Button>
            </Link>
          </div>
          <Divider style={{ borderBlockColor: "white" }} className="py-2" />
          <p className="text-black  text-center w-full ">
            IDLC collects and uses personal data in accordance with our Privacy
            Policy. By creating an account, you agree to our Terms & Conditions.
          </p>
        </div>
      </Form>
    </div>
  </div>
);

export default Login;
