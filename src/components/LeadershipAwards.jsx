import React from "react";

const leadershipAwards = [
  {
    title: "Teaching Assistant, Applied Software Design",
    org: "Virginia Tech",
    tag: "Leadership",
    description:
      "Guided 120 students in OOP, software design patterns, unit testing, and code quality while evaluating C++ assignments.",
  },
  {
    title: "Clover Hackathon Wins",
    org: "Clover",
    tag: "Award",
    description:
      "Won three global hackathons with Judges Award, 2nd place, and 1st place for Communication Commerce (RCS), Smart Inventory, and an Automatic Tip Management system.",
  },
  {
    title: "Living Proof Awards + Employee of the Month",
    org: "Fiserv",
    tag: "Award",
    description:
      "Received 15+ Living Proof awards and Employee of the Month honors on three occasions for outstanding work.",
  },
  {
    title: "Fiserv Success Story",
    org: "Fiserv",
    tag: "Recognition",
    description:
      "Recognized with a Success Story highlighting my professional journey to inspire fellow engineers.",
  },
  {
    title: "Clover India Initiative",
    org: "Fiserv",
    tag: "Leadership",
    description:
      "One of the first five engineers, helping establish the foundation of the team that grew to 250+ engineers.",
  },
  {
    title: "Barista, Virginia Tech Campus Coffee Shop",
    org: "Virginia Tech",
    tag: "Service",
    description:
      "Managed customer orders in a fast-paced environment while keeping day-to-day operations running smoothly.",
  },
];

const LeadershipAwards = () => {
  return (
    <div className="section__inner">
      <h2 className="section__title">Leadership & Awards</h2>
      <p className="section__subtitle">
        Highlights outside core roles that reflect leadership, recognition, and community impact.
      </p>
      <div className="leadership__grid grid grid--two">
        {leadershipAwards.map((item) => (
          <article className="card leadership__card" key={`${item.title}-${item.org}`}>
            <div className="leadership__card-top">
              <span className="pill pill--ghost leadership__tag">{item.tag}</span>
              <span className="leadership__org">{item.org}</span>
            </div>
            <h3 className="leadership__title">{item.title}</h3>
            <p className="leadership__description">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LeadershipAwards;
