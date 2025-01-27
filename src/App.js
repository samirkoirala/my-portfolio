import React, { useState } from "react";
import { Home, FolderGit2, Mail } from 'lucide-react';

import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://formspree.io/f/xqaepeod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container header-container">
          <h1 className="title">Samir Koirala</h1>
          <nav>
            <ul className="nav">
              <li><a href="#about"><Home size={8} /> About</a></li>
              <li><a href="#projects"><FolderGit2 size={8} /> Projects</a></li>
              <li><a href="#contact"><Mail size={16} /> Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container main">
        <section id="about" className="section about">
          <h2>About Me</h2>
          <p>
            Hi, I am Samir Koirala, a DevOps Engineer passionate about building robust, scalable, and automated infrastructures. I have hands-on experience in containerization, cloud deployment, and CI/CD pipelines. My goal is to streamline development workflows and optimize system performance.
          </p>
        </section>

        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>GoAPI CI/CD Pipeline</h3>
              <p>
              Developed a RESTful API in Go for efficient data processing and backend services. Automated CI/CD with GitHub Actions, Helm, and ArgoCD for seamless deployment in a Kubernetes (k3s) cluster. Achieved a 50% reduction in deployment time with a scalable pipeline.
              </p>
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" />
              <a href="https://github.com/samirkoirala/go-api"><button>View Repository</button></a>
            </div>
            <div className="project-card">
              <h3>Blog App using Django</h3>
              <p>
              Created a simple blog application using Django for easy content management and user interaction. Implemented features like post creation, editing, and commenting for an engaging user experience. Leveraged Django's built-in admin panel for efficient administration and management of blog content.
              </p>
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" />
              <a href="https://github.com/samirkoirala/Django-Blog"><button>View Repository</button></a>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact Me</h2>
          {submitted ? (
            <p className="success-message">Thank you for your message! I'll get back to you soon.</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />

              <label htmlFor="message">Message</label>
              <textarea id="message" value={formData.message} onChange={handleChange} required></textarea>

              <button type="submit">Send</button>
            </form>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="socials">
            <a href="https://github.com/samirkoirala" target="_blank" rel="noopener noreferrer">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/samirkoirala/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/_samirkoieala" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Samir Koirala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;