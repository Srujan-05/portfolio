import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: 'AI Chatbot Platform',
      description: 'A sophisticated chatbot platform powered by machine learning, featuring natural language processing, context awareness, and real-time conversation analytics. Built with React and Python backends.',
      tech: ['React', 'Python', 'TensorFlow', 'WebSocket', 'Firebase'],
      githubLink: 'https://github.com/yourusername/ai-chatbot'
    },
    {
      id: 2,
      title: 'Computer Vision Dashboard',
      description: 'Real-time computer vision application for object detection and image classification. Features live webcam feed processing, multiple model support, and performance metrics visualization.',
      tech: ['React', 'OpenCV', 'Python', 'Node.js', 'Webpack'],
      githubLink: 'https://github.com/yourusername/cv-dashboard'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with advanced filtering, payment integration, user authentication, and admin dashboard. Implements best practices in performance and security.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      githubLink: 'https://github.com/yourusername/ecommerce-platform'
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description: 'Interactive data analytics dashboard with real-time data visualization, predictive analytics, and custom report generation. Processes large datasets efficiently with optimized queries.',
      tech: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      githubLink: 'https://github.com/yourusername/analytics-dashboard'
    }
  ]);

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Innovative solutions built with cutting-edge technologies
          </p>
        </div>
      </section>

      <section className="projects-container">
        <div className="section-container">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tech={project.tech}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="section-container">
          <h2 className="cta-title">More Projects Coming Soon</h2>
          <p className="cta-description">
            I'm constantly working on new and exciting projects. Follow my GitHub for the latest updates!
          </p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="github-button">
            <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.006 12.006 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Visit My GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
