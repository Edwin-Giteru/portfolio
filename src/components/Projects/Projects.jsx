import { projects } from "../../data/siteData.js";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section section-alt projects">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            A selection of platforms I've designed and shipped backend
            functionality for.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
