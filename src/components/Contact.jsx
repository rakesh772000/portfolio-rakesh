import React from 'react';
import './contact.css'; // Import your CSS file for styling
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Using react-icons for better visuals

function Contact() {
  return (
    <section className="section contact">
      <h2>Contact</h2>
      <div className="contact-details">
        <p><FaEnvelope className="icon" /> Email: <a href="mailto:your.email@example.com">rakeshperam2@gmail.com</a></p>
        <p><FaLinkedin className="icon" /> LinkedIn: <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">https://www.linkedin.com/in/peram-rakesh</a></p>
        <p><FaGithub className="icon" /> GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">https://github.com/rakesh772000</a></p>
      </div>
    </section>
  );
}

export default Contact;
