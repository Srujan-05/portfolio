import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`home ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="profile-circle">
            <div className="profile-image-wrapper">
              <div className="avatar-placeholder">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="35" r="20" fill="currentColor" />
                  <path d="M20 85 Q20 60 50 60 Q80 60 80 85" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">Your Name</span>
          </h1>

          <p className="hero-tagline">
            AI/ML Enthusiast | Full Stack Developer | Tech Explorer
          </p>

          <p className="hero-subtitle">
            Building futuristic solutions with code and creativity
          </p>

          <div className="cta-buttons">
            <a href="#about" className="btn btn-primary">
              Explore My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="orbit"></div>
          <div className="orbit orbit-2"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
            <p className="about-text">
              I'm a passionate developer and AI enthusiast dedicated to building innovative solutions
              that combine cutting-edge technology with user-centric design. With expertise in full-stack
              development and machine learning, I create applications that not only solve problems but also
              inspire and educate.
            </p>
          </div>

          {/* Research Interests */}
          <div className="research-interests">
            <h3 className="subsection-title">Research Interests</h3>
            <div className="interests-grid">
              {[
                'Artificial Intelligence',
                'Machine Learning',
                'Deep Learning',
                'Computer Vision',
                'Natural Language Processing',
                'Web Development',
                'Cloud Computing',
                'Data Science'
              ].map((interest, index) => (
                <div key={index} className="interest-chip">
                  <span className="chip-icon">✨</span>
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section className="personal-details">
        <div className="section-container">
          <h2 className="section-title">Contact & Details</h2>

          <div className="details-grid">
            {/* Name Card */}
            <div className="detail-card">
              <div className="detail-icon">👤</div>
              <h4 className="detail-label">Full Name</h4>
              <p className="detail-value">Your Full Name</p>
            </div>

            {/* Phone Card */}
            <div className="detail-card">
              <div className="detail-icon">📱</div>
              <h4 className="detail-label">Phone Number</h4>
              <p className="detail-value">+91 98765 43210</p>
            </div>

            {/* Personal Email Card */}
            <div className="detail-card">
              <div className="detail-icon">📧</div>
              <h4 className="detail-label">Personal Email</h4>
              <p className="detail-value">your.email@gmail.com</p>
            </div>

            {/* College Email Card */}
            <div className="detail-card">
              <div className="detail-icon">🎓</div>
              <h4 className="detail-label">College Email</h4>
              <p className="detail-value">studentid@college.edu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-grid">
            {[
              { category: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C++'] },
              { category: 'Frontend', items: ['React', 'HTML/CSS', 'Tailwind', 'Bootstrap'] },
              { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'FastAPI'] },
              { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Firebase'] }
            ].map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h4 className="skill-category-title">{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
