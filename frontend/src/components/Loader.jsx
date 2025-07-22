import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/loader.json"; // replace with your actual path
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-background" />
      <div className="lottie-animation">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};

export default Loader;
