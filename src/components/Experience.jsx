import React, { useState } from "react";

const academicExperience = [
  {
    company: "Virginia Tech",
    role: (
      <>
      Graduate Research Assistant - {" "}
        <a href="https://jinming.tech/research.html" target="_blank" rel="noreferrer">
          SAGE Lab
        </a>
      </>
    ),
    period: "09/2025 – Present",
    description: (
      <>
        Working with Professor Ming Jin on improving LLM safety and adaptive reasoning for incomplete
        and underspecified problem settings as part of the{" "}
        <a href="https://jinming.tech/group.html" target="_blank" rel="noreferrer">
          graduate student at Research Group
        </a>
        .
      </>
    ),
    points: [
      "Designing methods to make LLMs reliably identify missing or ambiguous information in natural-language optimization problems and adaptively request clarification.",
      "Implementing a feedback-driven refinement pipeline that flags incomplete inputs, extracts critical missing details, and rewrites tasks into fully solvable forms.",
    ],
  },
  {
    company: "Virginia Tech",
    role: "Graduate Teaching Assistant - Applied Software Design",
    period: "01/2025 – 05/2025",
    description:
      "Worked as a Teaching Assistant for Applied Software Design at Virginia Tech, evaluating C++ work for 120 students and providing guidance on OOP, Software Design Patterns, unit testing, and code quality.",
    points: [
      "Evaluated programming assignments for efficiency, code organization, and adherence to C++ best practices.",
      "Assessed object-oriented design quality, unit testing coverage, and maintainability of student code.",
      "Reviewed implementations of complex software applications to ensure correctness, scalability, and clarity.",
      "Provided constructive feedback to improve design patterns, algorithmic efficiency, and coding standards."
    ],
  },
];

const professionalExperience = [
  {
    company: "VIAVI Solutions",
    role: "Co-op Software Development Engineer",
    period: "05/2025 – 12/2025",
    techStack:
      "C++, Baysean Optimization, Python, MCP, LangChain, RAG, AI-Agent, Qdrant, Optuna, Reinforcement Learning, TCP/IP, UDP, CMIS, I2C, Bit Error Rate",
    points: [
      "Modernized C++ interfaces for FPGA-driven SONET/SDH applications by completing the 32→64-bit migration and resolving critical bugs to enhance overall system reliability.",
      "Developed a reinforcement learning system for dynamically tuning equalizer settings (precursor, post-cursor, and swing) to reduce inter-symbol interference and improve signal quality in high-speed network testing.",
    ],
  },
  {
    company: "Fiserv Inc.",
    role: "Specialist, Software Development Engineering",
    period: "Apr2021 – Jul2024",
    techStack:
      "Java, GCP (Pub/Sub, GCS, Cloud Functions, Cloud Spanner), GKE, Terraform, REST APIs, Spring Boot, Microservices",
    points: [
      "Designed and deployed a DNC microservice on Google Cloud (Pub/Sub, GCS, Cloud Functions, Kubernetes, Cloud Spanner)  to improve DNC compliance and avoid potential class-action lawsuits.",
      "Led a team of 5 engineers to build a native inventory storage solution that enabled merchants to manage multiple menus, cutting reliance on external apps and potentially reducing the inventory management costs with 75%.",
      "Engineered the migration from a monolithic application to a distributed microservices architecture, enhancing scalability and agility while reducing infrastructure costs by an estimated 32% and downtime by 80%.",
    ],
  },
  {
    company: "Fiserv Inc.",
    role: "Professional, Software Development Engineering",
    period: "Dec2018 – Mar2021",
    techStack:
      "Java, JSP, Spring, REST API, Struts2, MySQL, Docker, OpenShift, Fortify, Sonatype, WebInspect, Voltage (HPE Tool)",
    points: [
      "Engineered the end-to-end Card Free Cash feature, including a standalone server processing ATM/POS requests, a web app, a customer-facing APIs, and supporting infrastructure.",
      "Decreased deployment time by 43% and deployment costs with 24% monthly via CI/CD pipeline automation while integrating Fortify, Sonatype, and WebInspect.",
      "Developed encryption libraries for sensitive PII and PCI data using HPE Voltage, ensuring compliance with industry security standards.",
    ],
  },
    {
    company: "Fiserv Inc.",
    role: "Trainee, Quality Assurance Engineering",
    period: "Oct2017 – Nov2018",
    techStack:
      "Java, IBM Rational Functional Tester, Oracle, Git, Jira, Agile",
    points: [
      "Automated 600+ manual test cases using IBM Rational Functional Tester, reducing regression testing effort per sprint by 60%.",
      "Designed and executed comprehensive test cases and test suites for the Billing module in the IIP application, leading to a 50% reduction in regression bugs each sprint.",
      "Performed functional, regression, and integration testing to ensure software stability and compliance with business requirements.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("professional");
  const currentData = activeTab === "academic" ? academicExperience : professionalExperience;
  const currentLabel = activeTab === "academic" ? "Academic Experience" : "Professional Experience";
  const currentDescription =
    activeTab === "academic"
      ? "LLM research, reinforcement learning, and applied ML systems."
      : "Shipping distributed systems, cloud platforms, and production-grade ML.";
  const isAcademic = activeTab === "academic";

  return (
    <div className="section__inner">
      <h2 className="section__title">Experience</h2>
      {/* <p className="section__subtitle">
        Academic research and professional delivery often overlap for me—but here’s how I structure each pillar.
      </p> */}

      <div className="experience__tabs">
        <button
          className={`experience__tab ${activeTab === "professional" ? "experience__tab--active" : ""}`}
          onClick={() => setActiveTab("professional")}
        >
          Professional
        </button>
        <button
          className={`experience__tab ${activeTab === "academic" ? "experience__tab--active" : ""}`}
          onClick={() => setActiveTab("academic")}
        >
          Academic
        </button>
      </div>

      <div className="experience__group">
        <div className="experience__group-header experience__group-header--inline">
          <div>
            <h3>{currentLabel}</h3>
            <p>{currentDescription}</p>
          </div>
          <span
            className={`experience__tag ${
              activeTab === "professional" ? "experience__tag--secondary" : ""
            }`}
          >
            {activeTab}
          </span>
        </div>

        <div className="experience__timeline">
          {currentData.map((item, idx) => (
            <div
              className={`experience__timeline-item ${
                idx === currentData.length - 1 ? "experience__timeline-item--last" : ""
              }`}
              key={item.company + item.role}
            >
              <div className="experience__timeline-rail">
                <span className="experience__timeline-dot" />
                <span className="experience__timeline-line" />
              </div>

              <div className="card experience__timeline-card">
                <div className="experience__card-top">
                  <div>
                    <p className="experience__company">{item.company}</p>
                    <h4>{item.role}</h4>
                  </div>
                  <span className="experience__pill">{item.period}</span>
                </div>
                {isAcademic ? (
                  <div className="experience__meta">
                    <span className="experience__meta-label">Summary</span>
                    <p className="experience__description">{item.description}</p>
                  </div>
                ) : (
                  <p className="experience__description">{item.description}</p>
                )}
                {item.techStack && (
                  <div className="experience__meta">
                    <span className="experience__meta-label">Tech stack</span>
                    <div className="experience__tech-list">
                      {item.techStack
                        .split(",")
                        .map((stack) => stack.trim())
                        .filter(Boolean)
                        .map((stack) => (
                          <span className="experience__tech-pill" key={stack}>
                            {stack}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
                <ul className="experience__points">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
