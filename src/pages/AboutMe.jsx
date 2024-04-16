import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import "./AboutMe.css";
import AnimatedPic from "../assets/3D-img.svg";
import Button from "../shared/Button";
import Info from "../data/Info";
import { InlineIcon } from "@iconify/react/dist/iconify.js";
const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <section className="section-aboutme">
        {/* ////////////// */}
        <div className="aboutme-intro-div">
          <div className="aboutme-imgDiv">
            <img src={AnimatedPic} alt="img" />
            <Button />
          </div>

          <div className="aboutme-contentDiv">
            <p className="aboutMe-heading">About Me</p>
            <p style={{ color: "#222222" }}>
              Welcome to my UI/UX design portfolio! I'm thrilled to share my
              journey and the projects I've crafted during my one-year tenure as
              a UI/UX design intern at Fledge. Throughout this transformative
              experience, I've had the privilege of contributing to innovative
              projects and honing my skills in creating seamless digital
              experiences.
            </p>

            <div className="contact-details flex mt-6">
              <div className="flex items-center ">
                <span className="flex items-center mr-3">Phone-</span>
                <p>+91 7385480618</p>
              </div>

              <span className="ml-5 mr-5">|</span>

              <div className="flex items-center  ">
                <span className="flex items-center mr-3 ">Email-</span>
                <p>saalimkhan02@gmail.com</p>
              </div>
            </div>

            <div className="btn-mobile">
              <Button />
            </div>
          </div>
        </div>
        {/* /////////////////// */}
        <div className="myInfo-divContainer">
          <div className="infoContainer">
            <div className="infoHeading-div">
              <InlineIcon icon="cil:education" className="info-icons" />
              <p>Education</p>
            </div>
            <div className="info-contentDiv">
              <li>RTMNU University Nagpur</li>
              <li>Bachelors of Business Administration</li>
            </div>
          </div>

          <div className="infoContainer">
            <div className="infoHeading-div">
              <div className="icon-div">
                <InlineIcon icon="cil:education" className="info-icons" />
              </div>
              <p>Experience</p>
            </div>
            <div className="info-contentDiv">
              <li>Fledge Consulting , UX Designer</li>
              <li>Nagpur | Nov 2022 - Nov 2023</li>
            </div>
          </div>

          <div className="infoContainer">
            <div className="infoHeading-div">
              <InlineIcon
                icon="material-symbols_work-outline"
                className="info-icons"
              />
              <p>Certifications</p>
            </div>
            <div className="info-contentDiv">
              <li>Information Technology Learning Hub</li>
              <li>Nov 2023 </li>
            </div>
          </div>

          <div className="infoContainer">
            <div className="infoHeading-div">
              <InlineIcon icon="cil:education" className="info-icons" />
              <p>Design Skills</p>
            </div>
            <div className="info-contentDiv">
              <li>User Experience</li>
              <li>User Research</li>
              <li>Wireframe</li>
              <li>Prototyping</li>
              <li>Information Architecture</li>
              <li>App / Web Design</li>
              <li>Interaction Design</li>
              <li>Design Thinking</li>
            </div>
          </div>

          <div className="infoContainer">
            <div className="infoHeading-div">
              <InlineIcon icon="cil:education" className="info-icons" />
              <p>Tools & Technologies</p>
            </div>
            <div className="info-contentDiv">
              <li>Figma</li>
              <li>Notion</li>
              <li>Canva</li>
            </div>
          </div>

          <div className="infoContainer">
            <div className="infoHeading-div">
              <InlineIcon icon="cil:education" className="info-icons" />
              <p>Strengths</p>
            </div>
            <div className="info-contentDiv">
              <li>Adaptive</li>
              <li>Problem Solving</li>
              <li>Critical Thinking</li>
              <li>Leadership</li>
            </div>
          </div>
        </div>
        {/* /////////////////// */}
      </section>
      <Footer />
    </div>
  );
};

export default AboutMe;
