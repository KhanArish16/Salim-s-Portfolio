import React from "react";
import Navbar from "../shared/Navbar";
import MainComponent from "../components/MainComponent";
import ProjectCard from "../components/ProjectCard";
import Footer from "../shared/Footer";
import CardData from "../data/cardData";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainComponent />
      <section className="section-projects">
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

      <Footer />
    </div>
  );
};

export default Home;
