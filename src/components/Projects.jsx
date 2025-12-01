import React from "react";
import underspecifiedImg from "../assets/underspecified.png";
import resnetImg from "../assets/resnet.png";
import asphaltImg from "../assets/asfault.png";
import journeyImg from "../assets/deep-leaning-jouney.png";
import cotImg from "../assets/cot.png";

const projects = [
  {
    name: "Underspecified Math LLM Reasoning Pipeline",
    image: underspecifiedImg,
    imageAlt: "Underspecified math reasoning pipeline diagram",
    tech: [
      "Python",
      "PyTorch",
      "Transformers",
      "Ollama Factory",
      "LoRA",
      "SFT",
      "Reinforcement Learning"
    ],
    description: (
      <>
        Building a bidirectional reasoning pipeline for underspecified optimization problems:
        generated optimization instances and NL descriptions, fine-tuned with Ollama Factory + LoRA
        (SFT) to elicit clarifying questions, then ran RL refinement to improve optimality and
        ask-when-unsure behavior. Collaborating with {" "}
        <a href="https://jinming.tech/" target="_blank" rel="noreferrer">
          Prof. Ming Jin
        </a>{" "}
        on LLM safety and adaptive reasoning for incomplete/underspecified problem settings.
      </>
    ),
    timeline: "In Progress",
  },
  {
    name: "Enhancing LLM capabilities with Chain-of-Thought Reasoning",
    image: cotImg,
    imageAlt: "Chain-of-thought project report cover",
    tech: ["LLMs", "Chain-of-Thought", "GRPO", "Reinforcement Learning", "LLM as Judge"],
    description:
      "Explored how structured chain-of-thought boosts reasoning quality: built CoT-heavy datasets, compared few-shot vs. self-consistency, and used GRPO/RL with LLM-as-judge feedback to reward correct intermediate steps—improving multi-step answer accuracy and cutting hallucinations.",
    link: "/cs5624-final-project.pdf",
    linkLabel: "View report",
  },
  {
    name: "Comprehensive CNN Comparison",
    image: resnetImg,
    imageAlt: "ResNet feature map visualization",
    tech: ["Python", "PyTorch", "TensorFlow", "CNNs", "Transfer Learning"],
    description:
      "Benchmarked and analyzed multiple CNN backbones (e.g., ResNet, DenseNet, EfficientNet) with transfer learning, augmentation, and ablations; documented findings in a detailed report.",
    link: "https://vikrant-bhati.github.io/Deep-learning/CNNs/Comprehensive_comparision_CNNs/Final-project-report.pdf",
    linkLabel: "View report",
  },
  {
    name: "Asphalt Reimagined",
    image: asphaltImg,
    imageAlt: "Asphalt Reimagined landing page",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    description:
      "Built a responsive showcase site highlighting the Asphalt Reimagined project with clear storytelling, visuals, and accessible navigation.",
    link: "https://vikrant-bhati.github.io/asphalt_reimagined/",
    linkLabel: "View site",
    video: "https://youtu.be/jf9etWVmbEA?si=i6ByldbLPhPqaSQD",
  },
  {
    name: "Deep Learning Journey",
    image: journeyImg,
    imageAlt: "Deep learning journey collage",
    tech: ["PyTorch", "TensorFlow", "Machine Learning", "Deep Learning", "CNNs", "Transformers", "RNNs"],
    description:
      "Curated journey of ML/DL techniques and implementations—covering vision, sequence models, transfer learning, and optimization experiments—with reports and artifacts.",
    link: "https://vikrant-bhati.github.io/Deep-learning/",
    linkLabel: "View journey",
  },
];

const Projects = () => {
  return (
    <div className="section__inner">
      <h2 className="section__title">Projects</h2>
      <p className="section__subtitle">
        I bring extensive industry software experience—here are a few Virginia Tech projects where I explored and implemented deep learning.
      </p>
      <div className="projects__grid">
        {projects.map((project) => (
          <article className="card project" key={project.name}>
            <div className="project__header">
              <div className="project__headings">
                <h3 className="project__title">{project.name}</h3>
                {project.timeline && (
                  <p className="project__timeline">{project.timeline}</p>
                )}
              </div>
            </div>
            {project.image && (
              <div className="project__media">
                <img
                  src={project.image}
                  alt={project.imageAlt || project.name}
                  className="project__image"
                  loading="lazy"
                />
              </div>
            )}
            <p className="project__description">{project.description}</p>
            <div className="project__tech">
              {project.tech.map((t) => (
                <span key={t} className="pill pill--soft">
                  {t}
                </span>
              ))}
            </div>
            <div className="project__links">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                >
                  {project.linkLabel || "View report"}
                </a>
              )}
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link project__link--secondary"
                >
                  Watch demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
