import { useState } from "react";
import "./experience.css";

export default function Experience() {
  const [active, setActive] = useState("isb");
  const experiences = {
    isb: {
      company: "Infosys SpringBoard",
      positon: "Python development intern",
      time: "September 2025 - November 2025",
      desc: 'Engineered "ShopThrone," a full-stack price comparison engine using Python for real-time scraping and React for UI. Integrated a Vision Transformer (ViT) model to enable AI-powered image search with 90% accuracy. Optimized data pipelines to boost retrieval speed by 40% and built analytics dashboards for scalability.',
    },
    gssoc: {
      company: "Girl Script Summer Of Code",
      positon: "Open Source Contributor",
      time: "August 2025 - October 2025",
      desc: "Refactored legacy codebases across 10+ MERN stack repositories within a global open-source environment. Merged multiple pull requests focused on React rendering performance and Node.js stability, successfully resolving critical bugs and standardizing code for future maintainability.",
    },
    iit: {
      company: "TechnoBytes X IIT Madras",
      positon: "Cybersecurity Intern",
      time: "May 2025 - July 2025",
      desc: "Executed practical network vulnerability assessments using Wireshark and Nmap on simulated architectures. Applied ethical hacking principles to identify security flaws, documenting defense strategies against SQL injection and common attack vectors to fortify network integrity.",
    },
  };

  const changeActive = (company) => {
    setActive(company);
  };

  return (
    <div id="experience">
      <div className="exp-container">
        <div className="myexp">
          <h1>Experience</h1>
        </div>

        <div className="companies">
          {Object.keys(experiences).map((key) => (
            <span
              key={key}
              onClick={() => changeActive(key)}
              className={`company ${active == key ? "active" : ""}`}
            >
              {experiences[key].company}
            </span>
          ))}
        </div>

        <div className="description">
          <span className="title">
            {experiences[active].company} - {experiences[active].positon}
          </span>
          <br />

          <span className="time">{experiences[active].time}</span>
          <br />
          <span className="desc">{experiences[active].desc}</span>
          <br />
        </div>
      </div>
      <div className="dividor"></div>
    </div>
  );
}
