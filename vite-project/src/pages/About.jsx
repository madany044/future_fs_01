// src/pages/About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        
          <p className="intro-text"> Hi, I'm <strong className="name-highlight">MADAN Y</strong>, 
             a passionate software developer with a knack for building clean, functional applications. 
          <span className="line-break"></span>
             I'm building my skills through courses and practical work.
          <span className="line-break"></span>
             Always open to <span className="highlight">learning</span>, 
          <span className="highlight">connecting</span> 
             and <span className="highlight">growing</span> in ways that feel real and meaningful. </p>

          <p className="current-focus">
             I'm currently studying <span className="highlight">Computer Science Engineering</span> 
             and working on exciting real-world projects like <em className="project-emphasis">Future-FS</em>
          <span className="animated-ellipsis"></span> </p>

        <div className="about-image">
        <img
          src="/profile-pic.png"
          alt="Profile"
        />
        </div>
        <a href="/Madan-Resume.pdf" download>
          <button className="resume-btn">Download Resume</button>
        </a>
      </div>
      <div className="button-group">

    <a
       href="mailto:madanmadany2004@gmail.com"
       className="email-button"
    >
       Email Me
    </a>

    <a
       href="tel:+919353240289"
       className="phone-button"
    >
       Call Me
    </a>

    <a
       href="https://www.linkedin.com/in/madan-y-7813b0307"
       target="_blank"
       rel="noopener noreferrer"
       className="linkedin-button"
    >
       LinkedIn
    </a>
  </div>
</div>
  );
}

export default About;
