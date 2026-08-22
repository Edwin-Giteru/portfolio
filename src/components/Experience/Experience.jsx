import { experience } from "../../data/siteData.js";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-subtitle">
            Contract, attachment, and leadership roles that shaped how I build
            software.
          </p>
        </div>

        <ol className="experience__timeline">
          {experience.map((item) => (
            <li className="experience__item" key={`${item.role}-${item.org}`}>
              <div className="experience__marker" aria-hidden="true" />
              <div className="experience__card card">
                <div className="experience__card-head">
                  <div>
                    <h3 className="experience__role">{item.role}</h3>
                    <p className="experience__org">{item.org}</p>
                  </div>
                  <div className="experience__timing">
                    <span className="experience__period">{item.period}</span>
                    <span className="experience__type">{item.type}</span>
                  </div>
                </div>
                <ul className="experience__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
