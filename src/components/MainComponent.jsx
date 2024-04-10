import React from "react";
import "./MainComponent.css";
import AvatarImg from "../assets/banner-avatar-img.png";
import Dot from "../assets/Ellipse-1.png";
// import dwnLogo from "../assets/download-logo.png";
import Button from "../shared/Button";

const MainComponent = () => {
  return (
    <div>
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

          <Button />
        </div>

        <div>
          <img src={AvatarImg} alt="avtr" className="avatar-img" />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
