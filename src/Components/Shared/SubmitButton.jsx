"use client";
import { Button } from "antd";
import React from "react";

const SubmitButton = ({ title }) => {
  return (
    <Button
      htmlType="submit"
      className="w-full border-none font-bold uppercase"
      style={{ backgroundColor: "#0A6847", color: "white" }}
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
