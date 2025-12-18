import "./skills.css"
export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"],
      description: "The foundation of everything I build",
    },
    {
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "Bootstrap"],
      description: "Crafting interfaces that feel natural",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "FastAPI"],
      description: "Building the backbone of applications",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
      description: "Storing data with purpose and structure",
    },
    {
      title: "Mobile & Tools",
      skills: ["Flutter", "Git", "GitHub"],
      description: "Cross-platform creation and collaboration",
    },
  ]

  return (
    <div id="skills" className="skills-section">
      {/* Background blur gradient effect */}
      <div className="skills-blur-bg">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="skills-container">
        {/* Section heading */}
        <div className="skills-header">
          <h2 className="skills-title">/skills</h2>
          <p className="skills-subtitle">Tools and technologies I use to bring ideas to life</p>
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{category.title}</h3>
              <p className="skill-description">{category.description}</p>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
