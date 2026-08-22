import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../../data/siteData.js";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
          Edwin<span className="navbar__logo-accent">.</span>Giteru
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary navbar__cta">
          Let's Talk
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${isMenuOpen ? "navbar__mobile--open" : ""}`}
        aria-label="Mobile"
        aria-hidden={!isMenuOpen}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${personalInfo.email}`}
          className="btn btn-primary navbar__mobile-cta"
          onClick={handleLinkClick}
        >
          Get In Touch
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
