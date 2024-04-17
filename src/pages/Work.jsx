import React from "react";
import "./Work.css";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import AnimatedPic from "../assets/3D-img.svg";
import Button from "../shared/Button";
import ProjectCard from "../components/ProjectCard";
import CardData from "../data/cardData";

const Work = () => {
  return (
    <div>
      <Navbar />
      <div className="designFolio-div">
        <div className="img-div">
          <img src={AnimatedPic} alt="Animated" />
        </div>

        <div className="designfolio-content-div">
          <div>
            <p className="main-heading">My Designfolio</p>
            <p style={{ color: "#222222" }}>Showcasing my design work</p>
          </div>

          <div>
            <Button />
          </div>

          <div className="contact-details flex mt-6">
            <div className="flex items-center ">
              <span className="flex items-center mr-3">
                {/* <InlineIcon icon={"ic:baseline-phone"} /> */}
                Phone-
              </span>
              <p>+91 7385480618</p>
            </div>

            <span className="contact-details-span ml-5 mr-5">|</span>

            <div className="flex items-center  ">
              <span className="flex items-center mr-3 ">
                {/* <InlineIcon icon={"Vector"} /> */}
                Email-
              </span>
              <p>saalimkhan02@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="project-div">
        <h1 style={{ fontSize: "30px", fontWeight: "600" }}>My Projects</h1>
        <section className="section-project">
          {CardData.map((card) => {
            return (
              <ProjectCard
                key={Math.random()}
                imgUrl={card.imgUrl}
                name={card.name}
                projectType={card.projectType}
                link={card.link}
              />
            );
          })}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Work;
