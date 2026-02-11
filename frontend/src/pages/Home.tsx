import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
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
          <button className="cta-button" onClick={scrollToRegistration}>Register Now</button>
        </div>
      </section>
      
      <section className="mission-section">
        <div className="mission-grid">
          <div className="mission-card">
            <h3>Build Network</h3>
            <p>Through broad collaboration and the sharing of knowledge</p>
          </div>
          <div className="mission-card">
            <h3>Enhance Standards</h3>
            <p>For benefit of technical community in optics and photonics</p>
          </div>
          <div className="mission-card">
            <h3>Trusted Source</h3>
            <p>We are a trusted source of meetings in photonics technology fields</p>
          </div>
          <div className="mission-card">
            <h3>Young Researchers</h3>
            <p>Provide opportunities to learn, grow and collaborate</p>
          </div>
        </div>
        <div className="values">
          <p>We believe in trust, network building, integrity and partnership</p>
        </div>
      </section>

      <section className="vision-mission">
        <div className="vm-container">
          <div className="vm-card">
            <h2>Vision</h2>
            <p>To become a global leader with proven expertise and to be universally recognized for the contributions in improving photonics and optics meetings standards.</p>
          </div>
          <div className="vm-card">
            <h2>Mission</h2>
            <p>Our mission is to promote and foster technological innovations and networking in optics, photonics, and laser technology for the benefit of community through our meetings.</p>
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

      <section className="why-attend-section">
        <h2>Why Attend OPTICPHOTONSUMMIT2026?</h2>
        <div className="why-attend-grid">
          <div className="why-card">
            <div className="why-card-image">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=250&fit=crop" alt="Network with Experts" />
            </div>
            <div className="why-number">1</div>
            <h3>Network with Experts</h3>
            <p>Connect with leading researchers, industry professionals, and innovators from around the globe</p>
          </div>
          <div className="why-card">
            <div className="why-card-image">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop" alt="Latest Research" />
            </div>
            <div className="why-number">2</div>
            <h3>Latest Research</h3>
            <p>Discover cutting-edge developments in optics, photonics, and laser technology</p>
          </div>
          <div className="why-card">
            <div className="why-card-image">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop" alt="Career Opportunities" />
            </div>
            <div className="why-number">3</div>
            <h3>Career Opportunities</h3>
            <p>Explore job opportunities and collaborations with top institutions and companies</p>
          </div>
          <div className="why-card">
            <div className="why-card-image">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Professional Development" />
            </div>
            <div className="why-number">4</div>
            <h3>Professional Development</h3>
            <p>Enhance your skills through workshops, tutorials, and hands-on demonstrations</p>
          </div>
          <div className="why-card">
            <div className="why-card-image">
              <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop" alt="Publication Opportunities" />
            </div>
            <div className="why-number">5</div>
            <h3>Publication Opportunities</h3>
            <p>Present your research and get published in prestigious conference proceedings</p>
          </div>
          <div className="why-card">
            <div className="why-card-image">
              <img src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=250&fit=crop" alt="Amsterdam Experience" />
            </div>
            <div className="why-number">6</div>
            <h3>Amsterdam Experience</h3>
            <p>Enjoy the vibrant culture and historic beauty of Amsterdam, Netherlands</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
