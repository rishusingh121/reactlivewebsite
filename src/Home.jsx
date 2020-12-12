import React from "react";
import Common from './Common';
import web from "../src/images/img2.svg";

const Home = () => {
  return (
    <>
        <Common 
            title = "Grow your business with"
            btn = "Get Started"
            imgsrc = {web}
        />
    </>
  );
};
export default Home;