import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import yuval_pic from "../Assets/yuvalPic.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div>
        <div className="hand-hand-icon">
          <p>new</p>
        </div>

          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={yuval_pic} alt="" />
      </div>
    </div>
  );
};

export default Hero;
