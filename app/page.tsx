const ArrowUpRight = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M5 15 15 5M7 5h8v8" />
  </svg>
);

const ArrowDown = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M10 3v13M5 11l5 5 5-5" />
  </svg>
);

const featuredProjects = [
  {
    number: "01",
    name: "Payment Uplift",
    company: "NAB Innovation Centre Vietnam",
    description:
      "A new payment flow for the NAB mobile banking app, supporting everyday money transfers for customers across Australia.",
    impact: [
      "Mobile APIs with unit and acceptance test coverage",
      "Microservice integration with circuit breaker patterns",
      "Performance testing, rate-limit analysis, and production support",
    ],
    stack: ["TypeScript", "Node.js", "GraphQL", "OpenSearch", "EKS"],
  },
  {
    number: "02",
    name: "RISA",
    company: "Ringkas",
    description:
      "An AI-native conversational experience that guides customers from mortgage consultation through onboarding.",
    impact: [
      "Low-latency, bidirectional WebSocket streaming",
      "REST services integrated with a loan origination ecosystem",
      "Secure sessions with JWT, RBAC, rate limiting, and Redis",
    ],
    stack: ["Python", "PostgreSQL", "Redis", "React", "WebSocket"],
  },
  {
    number: "03",
    name: "Loan Origination 2.0",
    company: "Ringkas",
    description:
      "A financing platform spanning eKYC, credit checks, OCR, bank submission, approvals, and contracts.",
    impact: [
      "Led architecture and delivery across a 5–8 engineer team",
      "Integrated agentic AI capabilities with core business systems",
      "Delivered nearly 40 major PRDs in one year",
    ],
    stack: ["React", "NestJS", "GraphQL", "PostgreSQL", "AWS"],
  },
];

const experience = [
  {
    period: "May 2026 — Present",
    role: "Software Engineer",
    company: "NAB Innovation Centre Vietnam",
    copy: "Building and operating resilient payment APIs, integrating distributed services, and helping shape production performance for a new mobile banking flow.",
  },
  {
    period: "Nov 2024 — May 2026",
    role: "Senior Software Engineer & Team Leader",
    company: "Ringkas",
    copy: "Led technical decisions and feature delivery, supported engineers, integrated agentic AI, built Open APIs, and improved system performance across the lending platform.",
  },
  {
    period: "Feb 2023 — Nov 2024",
    role: "Software Engineer",
    company: "Ringkas",
    copy: "Productized core financing platforms and independently developed scalable PDF, image processing, notification, and simulation services.",
  },
  {
    period: "Aug 2022 — Feb 2023",
    role: "Software Engineer",
    company: "Samsung Electronics",
    copy: "Developed and maintained the SmartThings Mini App, collaborating across software and hardware teams to improve product reliability and end-to-end quality.",
  },
  {
    period: "May 2022 — Aug 2022",
    role: "Junior Full-stack Developer",
    company: "BioTuring",
    copy: "Turned data science research into practical visualization features for BBrowser, helping scientists explore and analyze experimental data.",
  },
];

const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    label: "Build",
    skills: ["Node.js", "React", "NestJS", "GraphQL", "REST", "WebSocket"],
  },
  {
    label: "Systems",
    skills: ["PostgreSQL", "Redis", "Kafka", "Docker", "AWS", "EKS"],
  },
  {
    label: "Lead",
    skills: ["Software Architecture", "Database Design", "Team Leadership", "Agentic AI"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Back to top">
          HT<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:huytn0601@gmail.com">
          Let&apos;s talk <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="eyebrow reveal">
          <span className="status-dot" /> Available in Ho Chi Minh City
        </div>
        <h1 className="reveal delay-1">
          I engineer systems
          <br />
          that <em>move businesses.</em>
        </h1>
        <div className="hero-bottom reveal delay-2">
          <p>
            Senior Software Engineer building reliable full-stack products, distributed platforms, and intelligent
            experiences — from first architecture decision to production.
          </p>
          <a className="scroll-link" href="#work">
            Explore selected work <ArrowDown />
          </a>
        </div>
        <div className="hero-stats reveal delay-3" aria-label="Career highlights">
          <div>
            <strong>4+</strong>
            <span>Years building products</span>
          </div>
          <div>
            <strong>40</strong>
            <span>Major PRDs in one year</span>
          </div>
          <div>
            <strong>5–8</strong>
            <span>Engineers led</span>
          </div>
          <div className="hero-code" aria-hidden="true">
            <span>01</span>
            <span>Architecture</span>
            <span>02</span>
            <span>Execution</span>
            <span>03</span>
            <span>Impact</span>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <span className="section-kicker">Selected systems</span>
          <h2>Complex problems.<br />Clear outcomes.</h2>
          <p>Three products at the intersection of finance, distributed systems, and intelligent software.</p>
        </div>

        <div className="project-list">
          {featuredProjects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-index">{project.number}</div>
              <div className="project-main">
                <div className="project-title">
                  <h3>{project.name}</h3>
                  <span>{project.company}</span>
                </div>
                <p>{project.description}</p>
                <ul>
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="stack" aria-label={`${project.name} technology stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading compact">
          <span className="section-kicker">Experience</span>
          <h2>Built across domains.<br />Grounded in delivery.</h2>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <span className="timeline-number">0{index + 1}</span>
              <time>{item.period}</time>
              <div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-copy">
          <span className="section-kicker">How I work</span>
          <h2>Systems thinking,<br /><em>human outcomes.</em></h2>
          <p className="lead">
            I turn ambiguous business problems into dependable software — shaping architecture, shipping features,
            supporting teams, and staying close to what happens in production.
          </p>
          <p>
            My background spans banking, mortgage technology, connected devices, and scientific visualization. The
            common thread is a bias for clarity: simple interfaces, observable systems, and technical decisions that
            hold up as products grow.
          </p>

          <div className="education">
            <span>Education</span>
            <strong>Bachelor of Engineering</strong>
            <p>Ho Chi Minh University of Technology (HCMUT), 2018–2022</p>
          </div>
        </div>

        <div className="skills-panel">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.label}>
              <div>
                <span>0{index + 1}</span>
                <h3>{group.label}</h3>
              </div>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div>
          <span className="section-kicker">Start a conversation</span>
          <h2>Have a hard problem?<br /><em>Let&apos;s make it clear.</em></h2>
        </div>
        <div className="contact-actions">
          <a className="primary-cta" href="mailto:huytn0601@gmail.com">
            huytn0601@gmail.com <ArrowUpRight />
          </a>
          <a href="tel:+84778010861">+84 778 010 861</a>
          <span>Ho Chi Minh City, Vietnam</span>
        </div>
      </section>

      <footer>
        <a className="monogram" href="#top" aria-label="Back to top">
          HT<span>.</span>
        </a>
        <p>Senior Software Engineer — Architecture, full-stack & agentic AI.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
