import React from "react";

export default function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-item">
          <strong>{skill.name}</strong> — {skill.level}
        </li>
      ))}
    </ul>
  );
}