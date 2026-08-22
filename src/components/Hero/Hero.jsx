import { personalInfo } from "../../data/siteData.js";
import profilePhoto from "../../assets/profile.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            {personalInfo.availability}
          </span>

          <h1 className="hero__title">
            Hi, I'm {personalInfo.name.split(" ")[0]}
            <br />
            <span className="hero__title-accent">{personalInfo.title}</span>
          </h1>

          <p className="hero__intro">{personalInfo.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <dl className="hero__meta">
            <div>
              <dt>Based in</dt>
              <dd>{personalInfo.location}</dd>
            </div>
            <div className="hero__meta-divider" aria-hidden="true" />
            <div>
              <dt>Focus</dt>
              <dd>Backend &amp; API Development</dd>
            </div>
          </dl>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img
              src={profilePhoto}
              alt={`Portrait of ${personalInfo.name}, ${personalInfo.title}`}
              width="480"
              height="480"
            />
          </div>
          <div className="hero__portrait-tag" aria-hidden="true">
            <span className="hero__portrait-tag-label">const role =</span>
            <span className="hero__portrait-tag-value">"Software Engineer"</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
