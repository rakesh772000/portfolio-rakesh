import React from 'react';
import './Project.css';

function Projects() {
  return (
    <section className="section projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-list">
        
        {/* Portfolio Website */}
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>
            This is my personal portfolio website built with <strong>ReactJS</strong> for the frontend and <strong>CSS</strong> for styling.
            The website showcases my skills, projects, and resume. It's fully responsive and designed with a modern, minimalist theme.
          </p>
          <a href="" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        {/* Banking Application */}
        <div className="project-item">
          <h3>Banking Application</h3>
          <p>
            A fully functional banking system built using <strong>Java Spring Boot</strong> for the backend and <strong>ReactJS</strong> for the frontend.
            The application allows users to view accounts, check balances, transfer money, and manage transactions. The backend uses <strong>MySQL</strong> for storing data.
          </p>
          <a href="https://github.com/rakesh772000/Banking_application.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        {/* Employee Management System */}
        <div className="project-item">
          <h3>Employee Management System</h3>
          <p>
            An Employee Management System built with <strong>Java Spring Boot</strong> for the backend and <strong>ReactJS</strong> for the frontend.
            The app allows HR departments to perform CRUD operations for employee management, such as adding, updating, deleting, and viewing employee details. The backend utilizes <strong>MySQL</strong>.
          </p>
          <a href="https://github.com/rakesh772000/employee_management.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        {/* E-commerce Website */}
        <div className="project-item">
          <h3>E-commerce Website</h3>
          <p>
            A fully functional e-commerce website built with <strong>Java Spring Boot</strong> for the backend, <strong>ReactJS</strong> for the frontend, and <strong>MySQL</strong> for the database.
            Users can browse products, add them to the cart, and complete purchases. Admins can manage products and view order history. I also used <strong>Postman</strong> for API testing during development.
          </p>
          <a href="" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
