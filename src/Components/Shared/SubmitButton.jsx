"use client";
import { Button } from "antd";
import React from "react";

const SubmitButton = ({ title }) => {
  // Destructure title from props
  return (
    <Button
      htmlType="submit"
      className="w-full border-none font-bold uppercase"
      style={{ backgroundColor: "#ffe6b9", color: "black" }}
    >
      {title} {/* Access title as a string */}
    </Button>
  );
};

export default SubmitButton;
