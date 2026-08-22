import { personalInfo } from "../../data/siteData.js";
import "./About.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="eyebrow">About</span>
          <h2 className="section-title">A little about my approach</h2>
          <p className="about__paragraph">{personalInfo.about}</p>
        </div>

        <div className="about__strengths">
          {personalInfo.strengths.map((item) => (
            <div className="about__strength card" key={item.label}>
              <h3 className="about__strength-title">{item.label}</h3>
              <p className="about__strength-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
