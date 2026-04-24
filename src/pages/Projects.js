import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Zylos - On Board Coding Assistant',
      description: 'An on-board coding assistant that generates code based on user preferences and coding style, with CLI-driven interactions and configuration-based customization.',
      technologies: ['Python', 'Milvus', 'OpenAI API', 'HuggingFace API', 'Questinary'],
      features: [
        'CLI for code generation, document generation, and codebase registration',
        'Customizable configuration for generation behavior and model options',
        'Built around reusable assistant workflows'
      ],
      github: 'https://github.com/Srujan-05/Zylos',
      demo: ''
    },
    {
      id: 2,
      title: 'OPSD PowerDesk - Energy Load Forecasting',
      description: 'A time series forecasting system for 24-hour ahead power load predictions across three European countries, paired with anomaly detection and live monitoring.',
      technologies: ['Python', 'SARIMA', 'LightGBM', 'TensorFlow', 'Streamlit'],
      features: [
        'Hybrid anomaly detection with z-score and CUSUM methods',
        'Drift detection and online adaptation for model updates',
        'Streamlit dashboard for forecasts, alerts, and evaluation metrics'
      ],
      github: 'https://github.com/Srujan-05/Automated-Time-Table-Generation-System',
      demo: ''
    },
    {
      id: 3,
      title: 'Anomaly Detection Using GNNs',
      description: 'An anomaly detection system for 3D objects using simple and convolutional graph neural networks, inspired by the M. Bastico coupled Laplacian paper.',
      technologies: ['Python', 'NumPy', 'SciPy', 'Scikit-learn', 'Open3D', 'probreg', 'tiffle'],
      features: [
        'Detects faults and anomalies in 3D objects',
        'Uses graph neural network variants for anomaly detection',
        'Research-driven implementation based on recent literature'
      ],
      github: 'https://github.com/Srujan-05/Anamoly_Detection_GCN',
      demo: ''
    }
  ];

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>A collection of projects I've worked on</p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-number">Project {project.id}</div>
            
            <h2 className="project-title">{project.title}</h2>
            
            <p className="project-description">{project.description}</p>

            <div className="technologies-section">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="features-section">
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-links">
              {project.github ? (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-github"
                >
                  <span>🔗</span> View on GitHub
                </a>
              ) : (
                <span className="project-link-note">GitHub link coming soon</span>
              )}
              {project.demo ? (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-demo"
                >
                  <span>👁️</span> Live Demo
                </a>
              ) : (
                <span className="project-link-note">Demo link coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <h2>More Projects Coming Soon!</h2>
        <p>I'm constantly working on new and exciting projects. Stay tuned for updates!</p>
      </div>
    </div>
  );
}

export default Projects;
