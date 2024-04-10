import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Footer.css";
// import { InlineIcon } from "@iconify/react/dist/iconify.js";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container-div">
        <div className="footer-content-div">
          <div className="h-12 w-12 mb-5">
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <p>
            I always welcome new opportunities to exchange ideas and to explore
            collaborations
          </p>
        </div>

        <div className="footer-contact-div">
          <div className="flex gap-10 text-lg">
            <Link to={"/"}>Home</Link>
            <Link to={"/work"}>Work</Link>
            <Link to={"/about-me"}>About Me</Link>
          </div>

          <div className="contact-details flex mt-6">
            <div className="flex items-center mr-5">
              <span className="flex items-center mr-3">
                {/* <InlineIcon icon={"ic:baseline-phone"} /> */}
                Phone-
              </span>
              <p>+91 7385480618</p>
            </div>

            <span>|</span>

            <div className="flex items-center ml-5">
              <span className="flex items-center mr-3">
                {/* <InlineIcon icon={"Vector"} /> */}
                Email-
              </span>
              <p>saalimkhan02@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyRight">
        <p>© Saalim Khan 2024 | UX Designer | saalimkhan02@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
