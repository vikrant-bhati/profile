import React, { useState } from "react";
import profileImage from "../assets/profile.jpeg";

const Hero = () => {
  const [photoError, setPhotoError] = useState(false);
  const scrollToProjects = () => {
    const el = document.getElementById("about");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="hero">
        <div className="hero__card hero__card--full">
          <div className={`hero__photo ${photoError ? "hero__photo--fallback" : ""}`}>
            {!photoError ? (
              <img
                src={profileImage}
                alt="Vikrant Bhati headshot"
                loading="lazy"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <span className="hero__photo-fallback">VB</span>
            )}
          </div>
          <div className="hero__card-body">
            <h2>Vikrant Bhati</h2>
            <p className="hero__card-title">Software Engineer • AI Engineer • Machine Learning Engineer</p>
            <p className="hero__card-blurb">
              Learning never stops—I’m always excited to take on new challenges and keep upskilling myself.
            </p>
            <div className="hero__badge-row">
              <span className="pill pill--soft">Software Engineering</span>
              <span className="pill pill--soft">Artificial Intelligence</span>
              <span className="pill pill--soft">Data Science</span>
              <span className="pill pill--soft">Computer Vision</span>
              <span className="pill pill--soft">ML Ops</span>
              <span className="pill pill--soft">Cloud Engineering</span>
            </div>
          </div>
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            Hi, I&apos;m <span className="hero__highlight">Vikrant Bhati</span>
          </h1>
          <p className="hero__subtitle">
            I design and build scalable, distributed backend systems in Java and C++, develop advanced ML pipelines from RL frameworks to LLM/RAG workflows, and leverage cloud engineering and data science to deliver robust and scalable solutions.
          </p>
          <div className="hero__contact-links">
            <a
              href="https://github.com/vikrant-bhati"
              target="_blank"
              rel="noreferrer"
              className="hero__icon-link"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" className="hero__icon" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.39-3.87-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.07-.72.08-.7.08-.7 1.19.08 1.82 1.22 1.82 1.22 1.05 1.8 2.75 1.28 3.43.98a2.5 2.5 0 0 1 .72-1.57c-2.55-.29-5.24-1.28-5.24-5.68a4.45 4.45 0 0 1 1.19-3.07 4.13 4.13 0 0 1 .11-3.03s.97-.31 3.2 1.17a10.9 10.9 0 0 1 5.82 0c2.23-1.48 3.2-1.17 3.2-1.17.36.96.39 2.05.11 3.03a4.45 4.45 0 0 1 1.19 3.07c0 4.41-2.7 5.38-5.26 5.67.42.37.79 1.08.79 2.18v3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vikrantbhati/"
              target="_blank"
              rel="noreferrer"
              className="hero__icon-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="hero__icon" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.81 0-2.09 1.42-2.09 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.9 1.66-1.84 3.42-1.84 3.66 0 4.34 2.41 4.34 5.53v6.2ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13.02H7.1V9H3.56v11.45ZM22.2 0H1.8C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.8 24h20.4c.99 0 1.8-.78 1.8-1.75V1.75C24 .78 23.19 0 22.2 0Z" />
              </svg>
            </a>
            <a
              className="hero__icon-link hero__icon-link--ghost"
              href="mailto:bhati.vikrant@outlook.com"
              aria-label="Email me"
            >
              <svg viewBox="0 0 24 24" className="hero__icon" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
              </svg>
            </a>
          </div>
          <div className="hero__buttons">
            <a
              className="btn btn--primary"
              href="https://vikrant-bhati.github.io/Resume/"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <button className="btn btn--ghost" onClick={scrollToContact}>
              Contact me
            </button>
          </div>
          <div className="hero__meta">
            <span className="hero__status" aria-label="Open to work">
              <span className="hero__status-dot" aria-hidden="true"></span>
              Open to work
            </span>
            <span>Actively Seeking Full-Time Roles and Internship Opportunities for May'2026</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll-wrapper">
        <button
          className="hero__scroll-indicator hero__scroll-indicator--floating"
          onClick={scrollToProjects}
          aria-label="Scroll to projects"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="7" y="3.25" width="10" height="17.5" rx="5" />
            <path d="M12 7.5v3.5" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="hero__scroll-label">Scroll</span>
        </button>
      </div>
    </>
  );
};

export default Hero;
