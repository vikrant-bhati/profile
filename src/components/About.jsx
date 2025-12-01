import React from "react";

const About = () => {
  return (
    <div className="section__inner">
      <h2 className="section__title">About</h2>
      <p className="section__subtitle">
        I’m a Computer Engineering grad student at Virginia Tech (Machine Intelligence track) with seven years of end-to-end software experience—bridging AI research, large-scale backend systems, and cloud-native delivery.
      </p>

      <div className="about__highlights">
        <div className="card about__highlight">
          <span className="about__highlight-label">Experience</span>
          <ul className="about__highlight-points">
            <li>Graduate Student @VT</li>
            <li>7+ Years @Fiserv @VIAVI Solutions</li>
          </ul>
        </div>
        <div className="card about__highlight">
          <span className="about__highlight-label">Focus</span>
          <ul className="about__highlight-points">
            <li>Machine Learning Engineer</li>
            <li>Software Development Engineer</li>
          </ul>
        </div>
        <div className="card about__highlight">
          <span className="about__highlight-label">Current Work</span>
          <ul className="about__highlight-points">
            <li>LLM Reasoning @ VT</li>
            <li>Co-op @ VIAVI Solutions</li>
          </ul>
        </div>
      </div>

      <div className="grid grid--two about__grid">
        <div className="card about__card">
          <div className="about__card-header">
            <h3>AI / Research</h3>
            <p>Virginia Tech • VIAVI Solutions</p>
          </div>
          <p>
            I deliver applied AI solutions spanning LLM fine-tuning, RAG, reinforcement learning, Bayesian optimization, and computer vision.
          </p>
          <ul>
            <li>Engineered Designed RL + Bayesian optimization workflows to tune equalizers at VIAVI Solution to optimize equalizer settings in high-speed optical testing.</li>
            <li>Building a reasoning-aware LLM stack with LLaMA-Factory (automated data generation, SFT, evaluation).</li>
            <li>Benchmarked CNN architectures with ODConv/attention variants on ImageNet and Pascal VOC.</li>
            <li>Integrated GRPO with CoT prompting on Qwen 2.5 for medical-domain tasks, significantly improving reasoning quality and decision interpretability.</li>
          </ul>
        </div>

        <div className="card about__card">
          <div className="about__card-header">
            <h3>Engineering / Delivery</h3>
            <p>VIAVI Solutions • Fiserv</p>
          </div>
          <p>
            I developed reliable distributed systems, modernize platforms, and ship customer-facing features across regulated domains.
          </p>
          <ul>
            <li>Upgraded high-speed test hardware by implementing 32→64-bit migration at VIAVI Solutions.</li>
            <li>Designed and developed a serverless, event-driven framework on Google Cloud that automated the ingestion and processing of Do-Not-Call data at Fiserv.</li>
            <li>Developed a multi-menu inventory system for Clover POS with DoorDash/UberEats integrations, reducing operational overhead for merchants.</li>
            <li>Developed Card-Free Cash capability by designing secure REST APIs and a customer-facing web application.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
