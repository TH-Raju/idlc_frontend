import React from "react";
import Banner from "./Banner";
import Welcome from "./Welcome";
import Works from "./Works";
import Membership from "./Membership";
import Trust from "./Trust";
import Courses from "./Courses";

const PreLog = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <Courses />
      <Works />
      <Membership />
      <Trust />
    </div>
  );
};

export default PreLog;
