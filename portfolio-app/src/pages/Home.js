import React from 'react';
import './home.css';

function Home() {
  const education = [
    {
      school: 'Mahindra University',
      degree: 'B.Tech. Computer Science and Engineering',
      period: 'August 2023 - Present',
      note: 'Current GPA: 9.79/10.0'
    },
    {
      school: 'Pallavi Model School, Alwal',
      degree: 'Class 12th CBSE, MPC stream',
      period: 'June 2023',
      note: 'Percent: 94.8'
    },
    {
      school: 'Pallavi Model School, Alwal',
      degree: 'Class 10th CBSE',
      period: 'August 2021',
      note: 'Percent: 95.4'
    }
  ];

  const coursework = [
    'Machine Learning',
    'Artificial Intelligence',
    'Evolutionary Algorithms',
    'Object-Oriented Programming',
    'Operating Systems',
    'Data Structures & Algorithms'
  ];

  const skills = [
    {
      title: 'Languages',
      items: ['C/C++', 'Python', 'Java', 'JavaScript', 'HTML/CSS', 'SQL']
    },
    {
      title: 'Tools',
      items: ['Docker', 'NumPy', 'Pandas', 'Scikit-Learn', 'PyTorch', 'REST API', 'Azure AI']
    },
    {
      title: 'Focus Areas',
      items: ['Full-stack development', 'Machine learning systems', 'Cloud workflows', 'Data pipelines']
    }
  ];

  const projects = [
    {
      title: 'Zylos - On Board Coding Assistant',
      meta: 'Python, Milvus, OpenAI API, HuggingFace API, Questinary',
      bullets: [
        'Developing an on-board coding assistant that generates code tailored to user preferences and coding style.',
        'Built a CLI for code generation, document generation, and codebase registration.',
        'Added configuration-based customization for generation behavior and model options.'
      ]
    },
    {
      title: 'OPSD PowerDesk - Energy Load Forecasting',
      meta: 'Python, SARIMA, LightGBM, TensorFlow, Streamlit',
      bullets: [
        'Built a forecasting system for 24-hour ahead power load prediction across three European countries.',
        'Implemented a hybrid anomaly detection pipeline with drift-aware online adaptation.',
        'Created a Streamlit dashboard for live forecasts, alerts, and evaluation metrics.'
      ]
    },
    {
      title: 'Anomaly Detection Using GNNs',
      meta: 'Python, NumPy, SciPy, Scikit-learn, Open3D, probreg, tiffle',
      bullets: [
        'Developed an anomaly detection system using simple and convolutional graph neural networks.',
        'Based on the M. Bastico coupled Laplacian paper from 2024.',
        'Implements anomaly detection on 3D objects to identify faults and irregularities.'
      ]
    }
  ];

  const experience = [
    {
      role: 'Software Development Intern',
      company: 'Seconize, Bangalore',
      period: 'Jul. 2025 - Nov. 2025',
      bullets: [
        'Developed automated crawlers to extract structured and unstructured data from multiple government regulatory portals.',
        'Used Azure OpenAI for entity extraction, summarization, sentiment analysis, and compliance-focused insights.',
        'Implemented a REST API pipeline that pushed AI-generated alerts to Slack for real-time notifications.',
        'Dockerized the pipeline for consistent deployment and easier scaling.'
      ]
    }
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <div className="profile-picture-container">
          <div className="profile-picture">
            <img 
              src={`${process.env.PUBLIC_URL}/Srujan Good Image 3.jpeg`} 
              alt="Profile" 
              className="profile-img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="hero-content">
          <h1 className="greeting">Tallam Venkata Naga Sai Srujan</h1>
          <p className="subtitle">B.Tech CSE Student | Machine Learning | Full-Stack Development</p>
          <div className="contact-links">
            <a className="contact-link" href="https://github.com/Srujan-05" target="_blank" rel="noreferrer">
              github.com/Srujan-05
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/srujan-tallam" target="_blank" rel="noreferrer">
              linkedin.com/in/srujan-tallam
            </a>
            <a className="contact-link" href="mailto:srujantvns@gmail.com">
              srujantvns@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        {/* About Me Section */}
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            I am a Computer Science and Engineering student at Mahindra University with a strong
            interest in machine learning, AI systems, and full-stack development. I enjoy building
            practical software that combines clean interfaces, data-driven logic, and reliable backend
            workflows.
          </p>
          <p>
            My work spans forecasting systems, coding assistants, anomaly detection, and automation
            pipelines. I focus on writing maintainable code, learning quickly, and turning ideas into
            useful products.
          </p>
        </section>

        <section className="research-section">
          <h2>Education</h2>
          <div className="resume-grid">
            {education.map((item) => (
              <article key={item.school + item.degree} className="resume-card">
                <h3>{item.school}</h3>
                <p className="resume-degree">{item.degree}</p>
                <p className="resume-meta">{item.period}</p>
                <p className="resume-note">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="personal-details-section">
          <h2>Coursework</h2>
          <div className="interests-grid">
            {coursework.map((course) => (
              <div key={course} className="interest-card">
                <h3>{course}</h3>
                <p>Relevant coursework and applied learning in this area.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.title} className="skill-category">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="research-section">
          <h2>Projects</h2>
          <p className="section-subtitle">GitHub links will be added soon.</p>
          <div className="featured-grid">
            {projects.map((project) => (
              <article key={project.title} className="featured-card">
                <h3>{project.title}</h3>
                <p className="project-meta">{project.meta}</p>
                <ul className="project-bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="personal-details-section">
          <h2>Experience</h2>
          <div className="details-card">
            {experience.map((item) => (
              <div key={item.company} className="resume-card resume-card-wide">
                <h3>{item.role}</h3>
                <p className="resume-degree">{item.company}</p>
                <p className="resume-meta">{item.period}</p>
                <ul className="project-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="featured-projects">
          <h2>Contact</h2>
          <p className="section-subtitle">GitHub links for projects will be added once you share them.</p>
          <div className="featured-grid">
            <div className="featured-card">
              <h3>Email</h3>
              <p><a href="mailto:srujantvns@gmail.com">srujantvns@gmail.com</a></p>
            </div>
            <div className="featured-card">
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/srujan-tallam" target="_blank" rel="noreferrer">linkedin.com/in/srujan-tallam</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
