import React from "react";

const skills = {
  "Programming Languages": [
    "Java",
    "C++",
    "Python",
    "SQL",
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)"
  ],

  "Data Science & Visualization": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Tableau",
    "scikit-learn"
  ],

  "Machine Learning & AI": [
    "Supervised & Unsupervised Learning",
    "Neural Networks (CNNs, RNNs, DNNs, MLPs)",
    "LLM Fine-Tuning",
    "Retrieval-Augmented Generation (RAG)",
    "Reinforcement Learning",
    "Bayesian Optimization",
    "MLOps Foundations"
  ],

  "Tools & Frameworks": [
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "Model Context Protocol (MCP)",
    "FastAPI",
    "REST APIs",
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Hibernate (ORM/HQL)",
    "OpenAPI",
    "Microservices",
    "Apache Kafka (Pub/Sub)",
    "Redis",
    "Postman"
  ],

  "Database Systems": [
    "MySQL",
    "Oracle DB",
    "CouchDB",
    "ChromaDB",
    "Relational Databases (RDBMS)",
    "NoSQL Databases",
    "Vector Databases"
  ],

  "Cloud & DevOps": [
    "Google Cloud Platform (GCP)",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "SonarQube",
    "Grafana",
    "Git",
    "CI/CD Pipelines",
    "Linux",
    "PagerDuty"
  ]
};


const Skills = () => {
  return (
    <div className="section__inner">
      <h2 className="section__title">Skills</h2>
      <p className="section__subtitle">
        These are the technical skills I bring:
      </p>
      <div className="skills">
        {Object.entries(skills).map(([group, items]) => (
          <div className="card skills__card" key={group}>
            <h3>{group}</h3>
            <div className="skills__tags">
              {items.map((item) => (
                <span key={item} className="pill pill--soft">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
