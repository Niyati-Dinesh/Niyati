import "./project.css";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import shopthrone from "/shopthrone/shopthrone.png";
import cybertrone from "/cybertrone/cybertrone.png";
import snippetvault from "/snippetvault/snippetvault.png";
import newsnation from "/newsnation/newsnation.png";
import studynest from "/studynest/studynest.png";
export default function Project() {
  //---------------------------DECLARATIONS---------------------------------
  const projRef = useRef(null);
  const [visible, setVisible] = useState(false);
  //-----------------------FUNCTIONS----------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (projRef.current) observer.observe(projRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "ShopThrone",
      image: shopthrone,
      type: "Infosys Springboard",
      tech: ["python", "fastapi", "react", "tailwindcss", "postgresql"],
      time: "Sep 2025 - Nov 2025",
      desc: "Engineered a high-performance product price comparing web application that scrapes real-time pricing data from multiple ecommerce sites. Integrated a Vision Transformer (ViT) model to enable AI-powered image search, classifying products with 90% accuracy in under 2 seconds. Optimized backend pipelines to reduce data retrieval latency by 40%.",
      github: "https://github.com/Niyati-Dinesh/snippetvault",
    },
    {
      id: 2,
      title: "CyberTron",
      image: cybertrone,
      type: "Academic Project",
      tech: ["nodejs", "expressjs", "react", "tailwindcss", "sqlite", "prisma"],
      time: "Aug 2025 - Nov 2025",
      desc: "Architected a local-first Security Information and Event Management (SIEM) dashboard for Linux servers. Built a Node.js middleware to orchestrate kernel-level commands (like nmap and ps) and correlate running services with the National Vulnerability Database API. Delivers real-time threat detection and process hygiene analysis.",
      github: "https://github.com/Niyati-Dinesh/CyberTron",
    },
    {
      id: 3,
      title: "SnippetVault",
      image: snippetvault,
      type: "Side Project",
      time: "July 2025 - Aug 2025",
      tech: ["mongodb", "expressjs", "react", "nodejs", "tailwindcss"],
      desc: "Developed a centralized CLI command repository designed to accelerate developer workflows. Built a secure MERN stack architecture with JWT authentication to protect private snippets. Implemented advanced search algorithms that cut syntax research time by roughly 50%, eliminating the need for repetitive terminal command lookups.",
      github: "https://github.com/Niyati-Dinesh/SnippetVault",
    },
    {
      id: 4,
      title: "NewsNation",
      image: newsnation,
      type: "Side Project",
      tech: ["react", "bootstrap", "newsapi"],
      time: "June 2025 - July 2025",
      desc: "Designed and built a high-performance news aggregator using React and Vite, achieving a 80+ Lighthouse performance score. Architected a modular UI system with reusable components to fetch and render live articles from external REST APIs with zero latency, ensuring a smooth, responsive reading experience.",
      github: "https://github.com/Niyati-Dinesh/NewsNation",
    },
    {
      id: 5,
      title: "StudyNest",
      image: studynest,
      type: "Side Project",
      tech: ["html", "css", "javascript", "ajax", "php"],
      time: "April 2025",
      desc: "Designed and developed a full-stack Learning Management System (LMS) from scratch using HTML, CSS, JS, PHP and MySQL. Built secure session-based login systems and dynamic admin dashboards to handle lesson distribution. Implemented real-time student progress tracking and optimized database schemas for fast content retrieval.",
      github: "https://github.com/Niyati-Dinesh/StudyNest",
    },
  ];
  //----------------------COMPONENT DESIGN--------------------------------------
  return (
    <div
      id="projects"
      ref={projRef}
      className={`projectss ${visible ? "visible" : ""}`}
    >
      <div className="proj-container">
        {/* ROW 1 — title */}
        <div className="myproj">
          <h1 className="proj-title">Projects</h1>
          <h3 className="proj-desc">Things I've built</h3>
        </div>

        {/* ROW 2 + 3 — cards */}
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="ppreview-image">
                <img src={project.image} alt={project.title}></img>
              </div>

              <div className="pcomp-section">
                <h3 className="ptitle">{project.title}</h3>
                <div className="pstatus">
                  <a
                    href={project.github}
                    target="_blank"
                    className="github-link"
                  >
                    Github
                    <ArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="techstack">
                {project.tech.map((stack) => (
                  <div className="stack" key={stack}>
                    {stack}
                  </div>
                ))}
              </div>

              <p className="pdesc">{project.desc}</p>

              <div className="project-context">
                <span>{project.type}</span>
                <span>.</span>
                <span>{project.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
