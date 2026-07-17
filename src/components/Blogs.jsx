import React from "react";
import shannonImg from "../assets/shannon-blog.png";
import ngramImg from "../assets/ngram-blog.png";

const blogs = [
  {
    title:
      "Claude Shannon Measured the English Language by Playing Hangman and GPT Is Still Playing the Same Game?",
    image: shannonImg,
    imageAlt: "Hangman puzzle spelling 'The cat sat on the ma_'",
    tags: ["Information Theory", "Entropy", "Cross-Entropy", "Language Models"],
    description:
      "Traces the mathematical foundations of language models back to Shannon's 1948 work: how entropy and cross-entropy—born from his hangman-style experiments on the predictability of English—remain the very quantities GPT optimizes when learning to predict text.",
    date: "Jul 2026",
    link: "https://medium.com/@vikrant_bhati/claude-shannon-measured-the-english-language-by-playing-hangman-1ce201cfe869",
  },
  {
    title: "N-gram Model: From Rules to Statistical Language Models",
    image: ngramImg,
    imageAlt: "Sentence 'The dog ran' stamped impossible with probability zero",
    tags: ["N-grams", "Markov Assumption", "Smoothing", "Perplexity"],
    description:
      "Builds an n-gram model from scratch on a million words and watches it declare 446 of 500 unseen sentences \"impossible\"—then walks through the chain rule, the Markov assumption, smoothing, and perplexity, the ideas still used to evaluate modern language models.",
    date: "Jul 2026",
    link: "https://medium.com/@vikrant_bhati/n-gram-model-from-rules-to-statistical-language-models-72ea0d2090f9",
  },
];

const Blogs = () => {
  return (
    <div className="section__inner">
      <h2 className="section__title">Blogs</h2>
      <p className="section__subtitle">
        I write about the foundations of language models on Medium—starting from first principles and building up to the ideas behind today's LLMs.
      </p>
      <div className="projects__grid">
        {blogs.map((blog) => (
          <article className="card project" key={blog.title}>
            <div className="project__header">
              <div className="project__headings">
                <h3 className="project__title">{blog.title}</h3>
                <p className="project__timeline">Medium · {blog.date}</p>
              </div>
            </div>
            {blog.image && (
              <div className="project__media">
                <img
                  src={blog.image}
                  alt={blog.imageAlt || blog.title}
                  className="project__image"
                  loading="lazy"
                />
              </div>
            )}
            <p className="project__description">{blog.description}</p>
            <div className="project__tech">
              {blog.tags.map((tag) => (
                <span key={tag} className="pill pill--soft">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project__links">
              <a
                href={blog.link}
                target="_blank"
                rel="noreferrer"
                className="project__link"
              >
                Read on Medium
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
