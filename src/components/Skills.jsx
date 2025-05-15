import React from 'react';
import './Skills.css'; // Import your CSS file

function Skills() {
  return (
    <section className="section skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li><span className="skill-name">React.js</span></li>
        <li><span className="skill-name">JavaScript</span></li>
        <li><span className="skill-name">HTML & CSS</span></li>
        <li><span className="skill-name">Java</span></li>
        <li><span className="skill-name">Spring Boot</span></li>
        <li><span className="skill-name">MySQL</span></li>
        <li><span className="skill-name">Microservices</span></li>
        <li><span className="skill-name">Postman</span></li>
        <li><span className="skill-name">Docker</span></li>
        <li><span className="skill-name">Git & GitHub</span></li>
        {/* <li><span className="skill-name">Responsive Web Design</span></li> */}
      </ul>
    </section>
  );
}

export default Skills;
