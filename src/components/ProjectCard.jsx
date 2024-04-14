import React from "react";
import "./ProjectCard.css";
import { InlineIcon } from "@iconify/react";
const ProjectCard = (props) => {
  return (
    <div className="projectCard-div">
      <a href={props.link}>
        <div className="projectCard-img">
          <img src={props.imgUrl} alt={props.name} />
        </div>

        <div className="projectCard-content">
          <div className="content-child">
            <h5 style={{ fontSize: "20px" }}>{props.name}</h5>
          </div>

          <div className="projectCard-features content-child">
            <div className="features">
              <InlineIcon icon="ph:desktop" className="projectCard-icons" />
              <p>{props.projectType}</p>
            </div>

            <div className="features">
              <InlineIcon icon="mdi:responsive" className="projectCard-icons" />
              <p>Responsive</p>
            </div>

            <div className="features">
              <InlineIcon
                icon="ion:book-outline"
                className="projectCard-icons"
              />
              <p> Case Study</p>
            </div>
          </div>

          <div className="content-child see-work">
            <p href={props.link}>See Work</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
