import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="project-card">
        <h3>KaamSevak</h3>
        <p>A real-time worker-client platform built with React, Node.js, and SQL.</p>
        <a href="https://github.com/madan044/kaamSevak-" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      <div className="project-card">
        <h3>Online Car Rental Website</h3>
        <p>A DBMS mini-project: An Online Car Rental System built using PHP, MySQL, HTML/CSS/JavaScript.</p>
        <a href="https://github.com/madany044/Online-car-rental-website" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
       
        <div className="project-card">
        <h3>Phishing Websites/URL Detection</h3>
        <p>A machine learning-based phishing website detection system, designed to help users determine whether a given 
            website URL is legitimate or potentially malicious.</p>
        <a href="https://github.com/madany044/Phishing-Websites-URL-Detection" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

    </div>
 
  );
}

export default Projects;
