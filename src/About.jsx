import React from "react";
import Common from "./Common";
import web from "../src/images/hero-img.png";

const About = () => {
  return (
    <>
      <Common 
            title = "All Information About Us"
            btn = "Join Us"
            imgsrc = {web}
        />
    </>
  );
};
export default About;