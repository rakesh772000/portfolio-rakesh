import React from 'react';

function About() {
  return (
    <section className="section about">
      <h2>About Me</h2>

      <div className="about-content">

        <div className="about-text">
          <p>
            I'm a passionate Full-Stack Web Developer with expertise in building responsive and performant web applications. 
            My primary focus is on the backend using <strong>Java Spring Boot</strong>, but I also have experience in frontend development with <strong>ReactJS</strong>. 
            I enjoy building RESTful APIs and scalable systems that meet real-world demands.
          </p>
          <p>
            I’m skilled in working with relational databases like <strong>MySQL</strong> and integrating them seamlessly with backend systems. 
            I am also proficient in testing and debugging using tools like <strong>Postman</strong>, ensuring robust and reliable applications.
          </p>
          <p>
            Some of the technologies I work with:
            <ul>
              <li>🔹 Java, Spring Boot, Hibernate</li>
              <li>🔹 MySQL, PostgreSQL</li>
              <li>🔹 REST APIs, JSON, Postman</li>
              <li>🔹 Git, GitHub, Maven, JUnit</li>
            </ul>
          </p>
          <p>
            When I'm not coding, I enjoy reading technical blogs, contributing to open-source projects, and exploring new backend technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
