import { personalInfo } from "../../data/siteData.js";
import "./Contact.css";

const contactMethods = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    label: "GitHub",
    value: "Edwin-Giteru",
    href: personalInfo.github,
  },
  {
    label: "LinkedIn",
    value: "edwin-giteru",
    href: personalInfo.linkedin,
  },
];

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__panel card">
          <div className="contact__intro">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Let's build something together</h2>
            <p className="contact__lead">
              I'm currently {personalInfo.availability.toLowerCase()} in
              backend and full-stack roles. Based in {personalInfo.location},
              open to remote and on-site work.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary contact__cta"
            >
              Say Hello
            </a>
          </div>

          <ul className="contact__list">
            {contactMethods.map((method) => (
              <li key={method.label} className="contact__item">
                <a
                  href={method.href}
                  className="contact__link"
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <span className="contact__label">{method.label}</span>
                  <span className="contact__value">{method.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
