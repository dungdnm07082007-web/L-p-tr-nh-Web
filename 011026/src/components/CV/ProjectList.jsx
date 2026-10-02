import React from "react";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((proj) => (
        <div key={proj.id} className="project-card">
          <h3>{proj.title}</h3>
          <p><strong>Mô tả:</strong> {proj.description}</p>
          <p><strong>Công nghệ:</strong> {proj.techStack.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}