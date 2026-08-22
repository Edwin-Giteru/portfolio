function ProjectCard({ project }) {
  const { name, description, tech, url, linkLabel } = project;

  return (
    <article className="project-card card">
      <div className="project-card__body">
        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__description">{description}</p>

        {tech?.length > 0 && (
          <ul className="project-card__tech">
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
        aria-label={`${linkLabel} (opens in a new tab)`}
      >
        {linkLabel}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17L17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </a>
    </article>
  );
}

export default ProjectCard;
