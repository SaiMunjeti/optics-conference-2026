import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Global Summit on Optics Photonics and Laser Technology</h1>
          <p className="event-code">OPTICPHOTONSUMMIT2026</p>
          <div className="event-details">
            <span className="date">November 16-18, 2026</span>
            <span className="separator">|</span>
            <span className="location">Amsterdam, Netherlands</span>
          </div>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={() => scrollToSection('registration')}>
              Register Now
            </button>
            <button className="cta-button secondary" onClick={() => scrollToSection('brochure')}>
              Download Brochure
            </button>
            <button className="cta-button secondary" onClick={() => scrollToSection('abstract')}>
              Submit Abstract
            </button>
          </div>
        </div>
      </section>

      <section className="partners-logos-section">
        <h2>Our Academic & Research Partners</h2>
        <p className="partners-subtitle">Collaborating with leading institutions worldwide</p>
        <div className="logos-scroll-container">
          <div className="logos-scroll">
            <div className="logo-item">
              <div className="logo-box">MIT</div>
              <p>Massachusetts Institute of Technology</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">Stanford</div>
              <p>Stanford University</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">Cambridge</div>
              <p>University of Cambridge</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">Harvard</div>
              <p>Harvard University</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">Oxford</div>
              <p>University of Oxford</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">ETH Zürich</div>
              <p>Swiss Federal Institute</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">Caltech</div>
              <p>California Institute of Technology</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">TU Delft</div>
              <p>Delft University of Technology</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">MIT</div>
              <p>Massachusetts Institute of Technology</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">Stanford</div>
              <p>Stanford University</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">Cambridge</div>
              <p>University of Cambridge</p>
            </div>
            <div className="logo-item">
              <div className="logo-box">Harvard</div>
              <p>Harvard University</p>
            </div>
          </div>
        </div>
      </section>

      <section className="conference-highlights">
        <div className="highlights-container">
          <div className="highlight-image">
            <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop" alt="Conference Hall" />
          </div>
          <div className="highlight-content">
            <h2>World-Class Conference Experience</h2>
            <p>Join us at Amsterdam's premier conference venue for three days of cutting-edge presentations, networking opportunities, and collaborative discussions.</p>
            <ul className="highlight-features">
              <li>State-of-the-art conference facilities</li>
              <li>Interactive poster sessions</li>
              <li>Networking receptions and gala dinner</li>
              <li>Exhibition hall with industry leaders</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
