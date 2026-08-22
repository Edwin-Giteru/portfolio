import { skillGroups } from "../../data/siteData.js";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section section-alt skills">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">
            Tools and technologies I use to design, build, and ship backend
            systems.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skills__card card" key={group.category}>
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__tags">
                {group.skills.map((skill) => (
                  <li key={skill} className="skills__tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
