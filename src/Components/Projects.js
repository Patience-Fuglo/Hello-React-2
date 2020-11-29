import React from 'react';
import {Link} from "react-router-dom";

function Projects() {
  const project1 = {
    title: "Fav Link", 
    summary: "Summary of FavLinks",
    imgUrl: "https://github.com/camunity/intro-to-web-development/raw/master/hw2/HW2-screenshot.png",
    githubUrl: "https://github.com/Patience-Fuglo/favLink",
    technologies: "HTML, CSS, Git, React, Bootstrap"
  }
  const project2 = {
    title: "Design Pad", 
    summary: "Summary of Design Pad",
    imgUrl: "https://github.com/camunity/intro-to-web-development/raw/master/hw3/Wireframe-4.png",
    githubUrl: "https://github.com/Patience-Fuglo/design-pad-1",
    technologies: "HTML, CSS, Git, React, Bootstrap"
  }

  return (
    <div className="Projects">
      <div className="container" >
        <div class="card">
          <img src="https://github.com/camunity/intro-to-web-development/raw/master/hw2/HW2-screenshot.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Fav Link</h5>
            <p class="card-text"> Summary of FavLinks.</p>
            <Link to={{pathname:"/Project", state: project1}} className="btn btn-primary">Go to Project Details</Link>
          </div>
        </div>
        <div class="card">
          <img src="https://github.com/camunity/intro-to-web-development/raw/master/hw3/Wireframe-4.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Design Pad</h5>
            <p class="card-text"> Summary of Design Pad.</p>
            <Link to={{pathname:"/Project", state: project2}} className="btn btn-primary">Go to Project Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
