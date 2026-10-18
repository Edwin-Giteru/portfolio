// Central data source for the portfolio.
// Keeping content here (instead of inline in components) makes it easy
// for Edwin to update his info without touching any markup/JSX.

export const personalInfo = {
  name: "Edwin Giteru",
  title: "Software Engineer",
  tagline: "Backend-focused Software Engineer",
  location: "Nairobi, Kenya",
  email: "egiteru5@gmail.com",
  phone: "+254 707 913 754",
  github: "https://github.com/Edwin-Giteru",
  linkedin: "https://www.linkedin.com/in/edwin-giteru-4773a7306",
  availability: "Open to new opportunities",
  intro:
    "I'm a software engineer with two years of experience building software solutions — specializing in backend development with Python (FastAPI, Flask), Node.js, and databases like PostgreSQL and MySQL. I build APIs and scalable applications that improve efficiency and user experience.",
  about:
    "I have strong problem-solving, teamwork, and project management skills gained through both academic and industry projects. I care most about clean API design, reliable data handling, and building software that's genuinely useful day-to-day — and I'm eager to contribute to impactful solutions in a professional, dynamic environment.",
  strengths: [
    {
      label: "Backend Engineering",
      detail:
        "Two years building RESTful APIs and scalable services with Python and Node.js.",
    },
    {
      label: "Database Design",
      detail:
        "Designing, managing, and optimizing PostgreSQL & MySQL schemas for real production data.",
    },
    {
      label: "Project Leadership",
      detail:
        "Led a university healthcare-system team and managed club finances as Treasurer.",
    },
    {
      label: "Payments & Integrations",
      detail:
        "Integrated Paystack and Safaricom Daraja APIs for secure, real-world transaction flows.",
    },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    category: "Backend Development",
    skills: ["Python", "FastAPI", "Flask", "Node.js", "MVC Architecture"],
  },
  {
    category: "API Development",
    skills: ["RESTful APIs", "Swagger", "Postman", "API Testing"],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Schema Design",
      "Query Optimization",
      "Migrations",
    ],
  },
  {
    category: "Cloud & Deployment",
    skills: ["Render", "Vercel", "Cloudflare R2", "Cloudinary"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "GitHub", "Debugging", "Deployment"],
  },
];

export const experience = [
  {
    role: "Backend Developer",
    org: "Litmall (litmall.co.ke)",
    period: "Apr 2025 — Apr 2026",
    type: "Contract · 1 year",
    points: [
      "Developed and maintained backend services for a student-focused e-commerce platform supporting stationery, fashion, toiletries, and more.",
      "Designed and implemented RESTful APIs using Next.js to support core platform functionality.",
      "Designed, managed, and optimized PostgreSQL databases for user, product, and order data.",
      "Implemented secure user authentication and transaction-processing functionality.",
      "Integrated the Paystack API to enable secure online payment processing.",
      "Built and maintained product, cart, and order management features for a reliable user experience.",
    ],
  },
  {
    role: "Software Engineering Attachee",
    org: "Bunifu Technologies, Ngong",
    period: "May 2025 — Aug 2025",
    type: "Attachment",
    points: [
      "Assisted senior developers in building APIs using FastAPI and Python, contributing to backend system design and maintenance.",
      "Developed test cases and test scripts for API endpoints to ensure functionality and reliability.",
      "Conducted UI/UX evaluations for ongoing projects and recommended improvements to user experience.",
      "Provided onsite technical support to clients, resolving issues through strong problem-solving skills.",
    ],
  },
  {
    role: "Project Manager — Healthcare System Project",
    org: "Egerton University",
    period: "Jan 2025 — Apr 2025",
    type: "Academic Project",
    points: [
      "Led a team to design and develop a healthcare management system for patient-doctor appointment scheduling.",
      "Implemented medicine inventory management to improve stock tracking and reduce shortages.",
      "Coordinated project tasks, assigned responsibilities, and ensured timely delivery of milestones.",
      "Developed backend functionality using React and Node.js, ensuring secure and efficient data handling.",
    ],
  },
  {
    role: "Treasurer",
    org: "Computer Science Student Association (EUCOSSA), Egerton University",
    period: "Sep 2024 — Apr 2025",
    type: "Leadership",
    points: [
      "Managed club funds including income from membership fees and sponsorships, and expenses for events and software licenses.",
      "Prepared and monitored budgets to ensure efficient allocation of resources.",
      "Provided regular financial reports and recommendations to the executive team.",
    ],
  },
];

export const projects = [
  {
    name: "Litmall",
    description:
      "A student-focused e-commerce platform for buying and selling stationery, fashion, toiletries, and more. Built the backend, database, authentication, and payment integration as part of a year-long contract.",
    tech: ["Next.js", "PostgreSQL", "Paystack API", "REST APIs"],
    url: "https://litmall.co.ke/",
    linkLabel: "Visit Litmall",
  },
  {
    name: "SWM Advocates",
    description:
      "A professional website built for a law firm, designed to present the firm's practice areas and services clearly to prospective clients.",
    tech: ["Frontend Development", "Responsive Design"],
    url: "https://swm-advocates.netlify.app/",
    linkLabel: "Visit SWM Advocates",
  },
  {
    name: "NannyLink",
    description:
      "A digital platform connecting families with nannies through a structured matching system, with secure authentication and mobile payments.",
    tech: ["FastAPI", "Relational Database", "Safaricom Daraja API", "Cloudinary", "Vercel"],
    url: "https://nanny-link-kenya.vercel.app/",
    linkLabel: "Visit NannyLink",
  },
];

export const education = [
  {
    school: "Egerton University",
    credential: "Bachelor of Science in Computer Science",
    period: "2022 — 2026",
    detail:
      "Completed all coursework and academic projects by April 2026, with graduation expected in November 2026. On track to graduate with Second Class Upper Division.",
  },
  {
    school: "Kangema High School",
    credential: "Kenya Certificate of Secondary Education (KCSE)",
    period: "2018 — 2021",
    detail:
      "Attained a mean grade of B+ (67 points), with an A- in Mathematics and a B in English.",
  },
];
