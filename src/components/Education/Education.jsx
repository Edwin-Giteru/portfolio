import { education } from "../../data/siteData.js";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Education</span>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div className="education__grid">
          {education.map((item) => (
            <div className="education__card card" key={item.school}>
              <span className="education__period">{item.period}</span>
              <h3 className="education__credential">{item.credential}</h3>
              <p className="education__school">{item.school}</p>
              <p className="education__detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
