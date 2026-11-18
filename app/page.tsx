const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const capabilities = [
  {
    number: "01",
    title: "Backend & architecture",
    description: "Designing service boundaries, APIs, data models, and production-ready backend systems.",
    skills: ["Node.js", "TypeScript", "Python", "Java", "NestJS", "Spring Boot"],
  },
  {
    number: "02",
    title: "Distributed & real-time",
    description: "Building low-latency experiences and resilient communication between services.",
    skills: ["GraphQL", "REST", "WebSocket", "Kafka", "Redis", "Message Queue"],
  },
  {
    number: "03",
    title: "Cloud, data & delivery",
    description: "Operating software with a clear view of performance, scalability, and reliability.",
    skills: ["AWS", "EKS", "Docker", "PostgreSQL", "OpenSearch", "Serverless"],
  },
  {
    number: "04",
    title: "AI-enabled products",
    description: "Connecting agentic AI systems to real business workflows through secure tools and APIs.",
    skills: ["Agentic AI", "Tool Design", "API Integration", "React", "System Design"],
  },
];

const experience = [
  {
    company: "NAB Innovation Centre Vietnam",
    role: "Software Engineer",
    period: "May 2026 — Present",
    summary:
      "Building a new payment experience for the NAB mobile banking app, with a focus on reliable APIs, service integration, and production performance.",
    projects: [
      {
        name: "Payment Uplift",
        description: "A new payment flow supporting money transfers for customers across Australia.",
        work: [
          "Implemented mobile APIs with unit and acceptance test coverage.",
          "Integrated microservices using circuit breaker patterns.",
          "Supported performance testing, rate-limit analysis, and production operations.",
        ],
        stack: ["TypeScript", "Node.js", "GraphQL", "OpenSearch", "Cucumber", "Jest", "EKS"],
      },
    ],
  },
  {
    company: "Ringkas",
    role: "Senior Software Engineer & Team Leader",
    period: "Feb 2023 — May 2026",
    summary:
      "Progressed from Software Engineer to Team Leader, shaping architecture, delivering lending products, supporting engineers, and integrating AI capabilities into core systems.",
    projects: [
      {
        name: "RISA",
        description: "An AI-native chat experience for mortgage consultation and onboarding.",
        work: [
          "Built low-latency, bidirectional WebSocket streaming.",
          "Architected REST services that connect chat with the loan origination ecosystem.",
          "Designed conversation data models, Redis-backed sessions, JWT, RBAC, and rate limiting.",
        ],
        stack: ["Python", "PostgreSQL", "Redis", "React", "REST", "WebSocket"],
      },
      {
        name: "Loan Origination System 2.0",
        description: "A financing ecosystem spanning eKYC, credit checks, OCR, bank submissions, approvals, and contracts.",
        work: [
          "Led technical planning and delivery with product, quality, and compliance stakeholders.",
          "Built agentic AI integrations, Open APIs, and supporting tools for the core platform.",
          "Developed scalable PDF, image processing, notification, and simulation services.",
        ],
        stack: ["React", "Node.js", "NestJS", "GraphQL", "PostgreSQL", "Redis", "AWS"],
      },
      {
        name: "Loan Origination System 1.0",
        description: "A CRM connecting property developers and homebuyers with banks for mortgage processing.",
        work: [
          "Drafted requirements and developed product features from scratch.",
          "Resolved production issues and supported operational data needs.",
        ],
        stack: ["Java 11", "Spring Boot", "Keycloak", "PostgreSQL", "Redis", "Kafka", "React"],
      },
    ],
  },
  {
    company: "Samsung Electronics",
    role: "Software Engineer",
    period: "Aug 2022 — Feb 2023",
    summary:
      "Developed and maintained connected-device experiences, working across software and hardware boundaries to improve reliability.",
    projects: [
      {
        name: "SmartThings Mini App",
        description: "A mobile experience for controlling devices in the Samsung ecosystem.",
        work: [
          "Collaborated with a cross-functional team on product improvements.",
          "Implemented end-to-end tests spanning software and hardware devices.",
        ],
        stack: ["TypeScript", "Angular", "Node.js", "React", "HTML", "CSS"],
      },
    ],
  },
  {
    company: "BioTuring",
    role: "Junior Full-stack Developer",
    period: "May 2022 — Aug 2022",
    summary:
      "Translated data science research into practical visualization features for scientists working with experimental data.",
    projects: [
      {
        name: "BBrowser",
        description: "A desktop application for visualizing and analyzing biological experiment data.",
        work: [
          "Designed new analysis and visualization features for scientific users.",
          "Researched bioinformatics technologies and brought relevant findings into the product.",
        ],
        stack: ["JavaScript", "Three.js", "D3.js", "ECharts", "Node.js", "Python"],
      },
    ],
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Huy Tu — Home">
          Huy Tu<span>/SE</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#capabilities">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="mailto:huytn0601@gmail.com">
          Email me <Arrow />
        </a>
      </header>

      <section className="hero">
        <div className="hero-main">
          <div className="availability">
            <span /> Senior Software Engineer · Ho Chi Minh City
          </div>
          <h1>
            Building reliable software from <em>architecture</em> to production.
          </h1>
          <p className="hero-intro">
            Five years across fintech, AI-native lending, connected devices, and scientific software — designing
            full-stack products and backend systems that stay clear, scalable, and dependable.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">
              View experience <Arrow />
            </a>
            <a className="button secondary" href="mailto:huytn0601@gmail.com">
              huytn0601@gmail.com
            </a>
          </div>
        </div>

        <aside className="hero-profile" aria-label="Profile summary">
          <div className="profile-top">
            <span className="profile-label">Profile / 2026</span>
            <strong>5+</strong>
            <p>years of software engineering experience</p>
          </div>
          <div className="profile-focus">
            <span>Current focus</span>
            <ul>
              <li>Backend architecture</li>
              <li>Distributed systems</li>
              <li>Agentic AI integration</li>
              <li>Technical leadership</li>
            </ul>
          </div>
          <div className="profile-stack">
            <span>Primary stack</span>
            <p>TypeScript · Node.js · Python · React · PostgreSQL · AWS</p>
          </div>
        </aside>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="section-intro">
          <span className="section-index">01 / Capabilities</span>
          <div>
            <h2>Skills that connect product needs with production systems.</h2>
            <p>
              My strongest work sits between product context and engineering depth: turning ambiguous requirements
              into services, data flows, and user experiences that teams can confidently operate.
            </p>
          </div>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.title}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul>
                {capability.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-intro inverse">
          <span className="section-index">02 / Experience</span>
          <div>
            <h2>Experience, with the work inside it.</h2>
            <p>Projects are grouped under the role and business context where the work happened.</p>
          </div>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-meta">
                <span className="experience-number">0{index + 1}</span>
                <time>{item.period}</time>
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
                <p className="experience-summary">{item.summary}</p>
              </div>

              <div className="project-stack">
                {item.projects.map((project) => (
                  <section className="project-card" key={project.name}>
                    <span className="project-label">Project</span>
                    <h4>{project.name}</h4>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-work">
                      {project.work.map((work) => (
                        <li key={work}>{work}</li>
                      ))}
                    </ul>
                    <div className="project-tech">
                      {project.stack.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education section">
        <span className="section-index">03 / Education</span>
        <div>
          <p>Bachelor of Engineering · 2018 — 2022</p>
          <h2>Ho Chi Minh University of Technology</h2>
          <span>HCMUT · Ho Chi Minh City, Vietnam</span>
        </div>
      </section>

      <section className="contact section" id="contact">
        <span className="section-index">04 / Contact</span>
        <div>
          <p>Open to thoughtful engineering conversations.</p>
          <h2>Let&apos;s build something reliable.</h2>
          <a href="mailto:huytn0601@gmail.com">
            huytn0601@gmail.com <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <span>Huy Tu · Senior Software Engineer</span>
        <span>Ho Chi Minh City, Vietnam</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
