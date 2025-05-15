import React from 'react';
import './Home.css';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import photo from "../photos/photo.jpg"

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="text">
          <h1>Hi, I'm RAKESH PERAM</h1>
          <h2>Java Developer | Full Stack Developer | Frontend Enthusiast</h2>

          <p>
            I'm a passionate Full Stack Developer with a focus on building modern, scalable, and responsive web applications.
            I specialize in both backend technologies like <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>MySQL</strong>,
            as well as frontend development using <strong>ReactJS</strong>, <strong>JavaScript</strong>, and modern frontend tools.
          </p>

          <p>
            With hands-on experience in building RESTful APIs, managing databases, and creating user-friendly interfaces,
            I enjoy working across the entire stack. I am constantly learning new technologies to improve both my frontend and backend skills.
          </p>

          <div className="home-buttons">
            <a href="/RAKESH PERAM.pdf" download>
              <button className="button">Download Resume</button>
            </a>
            <a href="#projects">
              <button className="button outline">View Projects</button>
            </a>
          </div>
        </div>
        <div className="image">
          <img src={photo} alt="alternate image" />
        </div>
      </div>

      {/* Add all sections here */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
