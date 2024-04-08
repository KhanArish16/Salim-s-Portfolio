import React from "react";
import "../style/Global.css";
import AvatarImg from "../assets/banner-avatar-img.png";
import Dot from "../assets/Ellipse-1.png";
import dwnLogo from "../assets/download-logo.png";
import bgImg from "../assets/bg-svg-lines.png";

const MainComponent = () => {
  return (
    <div className="main-component">
      <img src={bgImg} alt="bgimg" className="Bg-img" />

      <div className=" main-div">
        <div>
          <p className="main-heading">
            Hi, i'm <span className="gradient-text">Saalim</span>
          </p>

          <p style={{ color: "#222222" }}>
            UI/UX Designer driven by the desire to innovate and elevate user
            experiences
          </p>

          <ul className="subHeading ">
            <li>
              <img src={Dot} alt="dot" />
              Designer
            </li>
            <li>
              <img src={Dot} alt="dot" />
              Researcher
            </li>
            <li>
              <img src={Dot} alt="dot" />
              Problem Solver
            </li>
          </ul>

          <button className="btn-resume">
            <img
              src={dwnLogo}
              alt="logo"
              style={{ height: "20px", width: "20px", marginRight: "10px" }}
            />
            Download Resume
          </button>
        </div>

        <div>
          <img src={AvatarImg} alt="avtr" className="avatar-img" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
