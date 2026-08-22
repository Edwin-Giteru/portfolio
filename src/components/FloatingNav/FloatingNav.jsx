import { useEffect, useState } from "react";
import { navLinks } from "../../data/siteData.js";
import "./FloatingNav.css";

const icons = {
  Home: (
    <path d="M4 11.5 12 4l8 7.5M6 10v9h12v-9" strokeLinecap="round" strokeLinejoin="round" />
  ),
  About: <circle cx="12" cy="8" r="3.5" />,
  Skills: <path d="M8 6 3 12l5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />,
  Experience: (
    <path
      d="M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm4 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Projects: (
    <path
      d="M4 6h16v13H4zM4 10h16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Education: (
    <path
      d="m12 3 9 4.5-9 4.5-9-4.5L12 3Zm-6 6.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3V9.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Contact: (
    <path
      d="M4 5h16v14H4Zm0 0 8 7 8-7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

function FloatingNav() {
  const [activeSection, setActiveSection] = useState(navLinks[0].href);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="floating-nav" aria-label="Section quick navigation">
      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={activeSection === link.href ? "is-active" : ""}
              aria-current={activeSection === link.href ? "true" : undefined}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                {icons[link.label]}
              </svg>
              <span className="floating-nav__tooltip">{link.label}</span>
              <span className="visually-hidden">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FloatingNav;
