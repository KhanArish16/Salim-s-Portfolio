import React from "react";
import Navbar from "../shared/Navbar";
import MainComponent from "../components/MainComponent";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainComponent />
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default Home;
