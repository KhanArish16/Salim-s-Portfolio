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
        <div>
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

      <section className="section-projects">
        {CardData.map((card) => {
          return (
            <ProjectCard
              key={card.key}
              imgUrl={card.imgUrl}
              name={card.name}
              projectType={card.projectType}
              link={card.link}
            />
          );
        })}
      </section>

      <Footer />
    </div>
  );
};

export default Work;
