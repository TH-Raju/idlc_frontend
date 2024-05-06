"use client";

import { MailOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import Link from "next/link";
import SubmitButton from "../Shared/SubmitButton";

const Verification = () => {
  const verify = (values) => {
    const data = Object.values(values).join("");
    console.log("Received data: ", data);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="py-5 px-8 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:w-[30%] mx-auto border border-site-color">
        <div className="mb-6 ">
          <div className="flex items-baseline gap-2 text-2xl font-bold mb-4">
            <Link href="/forgot-password">
              <ArrowLeftOutlined />
            </Link>
            <h1 className="font-sans">Enter Verification Code</h1>
          </div>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={verify}
        >
          <Typography.Title level={5} className="font-sans ">
            <span className="text-black">Code </span>
          </Typography.Title>

          <div className="flex gap-2 lg:gap-7 justify-center lg:mx-12">
            <Form.Item
              className="text-black"
              name="1"
              rules={[{ required: true, max: 1 }]}
            >
              <Input
                size="large"
                style={{
                  background: "transparent",
                  color: "black",
                }}
              />
            </Form.Item>
            <Form.Item
              className="text-black"
              name="2"
              rules={[{ required: true, max: 1 }]}
            >
              <Input
                size="large"
                style={{
                  background: "transparent",
                  color: "black",
                }}
              />
            </Form.Item>
            <Form.Item
              className="text-black"
              name="3"
              rules={[{ required: true, max: 1 }]}
            >
              <Input
                size="large"
                style={{
                  background: "transparent",
                  color: "black",
                }}
              />
            </Form.Item>
            <Form.Item
              className="text-black"
              name="4"
              rules={[{ required: true, max: 1 }]}
            >
              <Input
                size="large"
                style={{
                  background: "transparent",
                  color: "black",
                }}
              />
            </Form.Item>
            <Form.Item
              className="text-black"
              name="5"
              rules={[{ required: true, max: 1 }]}
            >
              <Input
                size="large"
                style={{
                  background: "transparent",
                  color: "black",
                }}
              />
            </Form.Item>
            <Form.Item
              className="text-black"
              name="6"
              rules={[{ required: true, max: 1 }]}
            >
              <Input
                size="large"
                style={{
                  background: "transparent",
                  color: "black",
                }}
              />
            </Form.Item>
          </div>

          <p className="text-black -mt-4 mb-4">
            Didn’t receive a code?
            <Button type="link" className="-ml-3 text-orange-400">
              Resend
            </Button>
          </p>
          <Form.Item>
            <Link href="/confirm-password">
              <SubmitButton title="Verify" />
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Verification;
