import React from "react";
import dwnLogo from "../assets/download-logo.png";
import download from "../assets/MyUIUXResume.pdf";
import "./Button.css";
const Button = () => {
  return (
    <div>
      <a href={download} download={"resume"}>
        <button className="btn-resume">
          <img
            src={dwnLogo}
            alt="logo"
            style={{ height: "20px", width: "20px", marginRight: "10px" }}
          />
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Button;
