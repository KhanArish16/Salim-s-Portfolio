import React from "react";
import "../style/Global.css";

import Navbar from "../shared/Navbar";
import MainComponent from "../components/MainComponent";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import bgImg from "../assets/bg-svg-lines.png";

const Home = () => {
  return (
    <div className="main-component">
      <img src={bgImg} alt="bgimg" className="Bg-img" />
      <Navbar />
      <MainComponent />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Home;
