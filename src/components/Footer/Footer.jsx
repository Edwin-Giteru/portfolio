import { navLinks, personalInfo } from "../../data/siteData.js";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{personalInfo.name}</p>
          <p className="footer__title">{personalInfo.title}</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__copyright">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
