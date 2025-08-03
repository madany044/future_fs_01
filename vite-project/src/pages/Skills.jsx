import React from "react";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🌿" },
  { name: "Express.js", icon: "🚀" },
  { name: "SQL", icon: "🗃️" },
  { name: "Git", icon: "🔧" },
];

function Skills() {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
