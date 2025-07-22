import React from 'react';
import Lottie from 'lottie-react';
import './Loader.css';
import loadingAnimation from '../assets/loader.json'; // adjust the path if needed

const Loader = () => {
  return (
    <div className="loader-container">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default Loader;
