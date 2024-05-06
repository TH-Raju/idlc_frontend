"use client";

import { MailOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Form, Input, Typography, Button, message, Space } from "antd";
import Link from "next/link";
import { GrShieldSecurity } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import SubmitButton from "../Shared/SubmitButton";
import { useRouter } from "next/navigation";

export default function ConfirmPassword() {
  const router = new useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Password was successfully changed",
    });

    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Something went wrong",
    });
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="py-5 px-5 lg:px-8 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:w-[30%] w-full mx-auto border border-site-color">
        <div className="mb-6 ">
          <div className="flex items-baseline gap-2 text-2xl font-bold mb-4">
            <Link href="/verification">
              <ArrowLeftOutlined />
            </Link>
            <h1 className="font-sans">Set New Password </h1>
          </div>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Typography.Title level={5} className="font-sans ">
            <span className="text-black">Enter New Password </span>
          </Typography.Title>
          <Form.Item
            className="text-black"
            name="new_password"
            rules={[{ required: true, message: "Please Enter new password" }]}
          >
            <Input.Password
              size="large"
              prefix={<GrShieldSecurity className="site-form-item-icon mr-2" />}
              placeholder="Enter New password"
              style={{
                background: "transparent",
                color: "black",
              }}
            />
          </Form.Item>
          <Typography.Title level={5} className="font-sans ">
            <span className="text-black">Confirm Password </span>
          </Typography.Title>
          <Form.Item
            className="text-black"
            name="confirm_password"
            rules={[{ required: true, message: "Please confirm password" }]}
          >
            <Input.Password
              size="large"
              prefix={
                <RiLockPasswordFill className="site-form-item-icon mr-2" />
              }
              placeholder="Re-enter your password"
              style={{
                background: "transparent",
                color: "black",
              }}
            />
          </Form.Item>
          {contextHolder}
          <Form.Item>
            <div onClick={success}>
              <SubmitButton title="Confirm" />
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
