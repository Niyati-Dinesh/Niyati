import { useEffect, useRef, useState } from "react";
import "./skills.css";

export default function Skills() {
  //---------------------------DECLARATIONS---------------------------------
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"],
      description: "The foundation of everything I build",
    },
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "Bootstrap"],
      description: "Crafting interfaces that reflects me",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "FastAPI"],
      description: "Building the backbone of applications",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
      description: "Storing data with structure",
    },
    {
      title: "Mobile",
      skills: ["Flutter"],
      description: "Cross-platform creation",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub"],
      description: "Collaboration and version-control",
    },
  ];

  const skillsRef = useRef(null);
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
      { threshold: 0.2 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);
 //----------------------COMPONENT DESIGN--------------------------------------
  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`skillss ${visible ? "visible" : ""}`}
    >
      <div className="skills-container">
        {/*===========================HEADING=============================*/}
        <div className="skills-left">
          <h1>My skills</h1>
          <h3>
            Tools and Technologies I use <br />
            to bring ideas to life
          </h3>
        </div>
        {/*===========================SKILLS=============================*/}
        <div className="skills-right">
          {skillCategories.map((cat) => (
            <div className="skill-box" key={cat.title}>
              <h2 className="title">{cat.title}</h2>
              <p className="desc">{cat.description}</p>
              <div className="cat-skills">
                {cat.skills.map((skill) => (
                  <span className="cat-skill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dividor"></div>
    </section>
  );
}
