import React from "react";
import Header from "./Header";
import Section from "./Section";
import SkillList from "./SkillList";
import ProjectList from "./ProjectList";
import "./CV.css";

export default function CVApp() {
  const skillsData = [
    { name: "AAA", level: "Thành thạo" },
    { name: "BBB", level: "Khá" },
    { name: "CCC", level: "Thành thạo" }
  ];

  const projectsData = [
    {
      id: 1,
      title: "-",
      description: "-",
      techStack: ["-", "-", "-"]
    },
    {
      id: 2,
      title: "-",
      description: "-",
      techStack: ["-", "-", "-"]
    }
  ];

  return (
    <div className="cv-wrapper">
      <Header
        name="Đỗ Nguyễn Mạnh Dũng"
        title="AIoT Developer"
        email="dungdnm.b25tv019@stu.ptit.edu.vn"
        phone="097 240 xxxx"
      />

      <Section title="Giới Thiệu Bản Thân">
        <p>
          Sinh viên ngành AIoT - PTIT.
        </p>
      </Section>

      <Section title="Kỹ Năng">
        <SkillList skills={skillsData} />
      </Section>

      <Section title="Dự Án Đã Làm">
        <ProjectList projects={projectsData} />
      </Section>
    </div>
  );
}