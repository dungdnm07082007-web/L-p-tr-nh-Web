import React from "react";

export default function Header({ name, title, email, phone }) {
  return (
    <header className="cv-header">
      <h1>{name}</h1>
      <h3>{title}</h3>
      <p>Email: {email} | SĐT: {phone}</p>
    </header>
  );
}