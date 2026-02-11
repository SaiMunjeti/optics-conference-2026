import React from 'react';
import './Page.css';

const Brochure: React.FC = () => {
  const handleDownloadBrochure = () => {
    // Open brochure preview in new tab with download functionality
    window.open('/brochure-preview', '_blank');
  };
  return (
    <div className="page-container brochure-page-bg">
      <h1>Conference Brochure</h1>
      <div className="content">

        <p className="brochure-intro">
          Download our comprehensive conference brochure to learn more about OPTICPHOTONSUMMIT2026, 
          including detailed information about sessions, speakers, venue, and registration.
        </p>

        <div className="brochure-section">
          <h2>Conference Brochure</h2>
          <div className="brochure-card">
            <div className="brochure-icon">📄</div>
            <div className="brochure-details">
              <h3>OPTICPHOTONSUMMIT2026 - Official Brochure</h3>
              <p>Complete conference information including program schedule, speaker profiles, venue details, and registration information.</p>
              <div className="brochure-meta">
                <span>📊 Format: PDF</span>
                <span>📏 Size: 2.5 MB</span>
                <span>📄 Pages: 24</span>
              </div>
              <button 
                className="download-btn"
                onClick={handleDownloadBrochure}
              >
                <span>⬇️</span> Download Brochure
              </button>
            </div>
          </div>
        </div>

        <div className="brochure-section">
          <h2>What's Inside</h2>
          <div className="brochure-contents-grid">
            <div className="content-item" onClick={() => {
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <div className="content-icon">🎯</div>
              <h3>Conference Overview</h3>
              <p>Mission, vision, and objectives of the summit</p>
            </div>
            <div className="content-item" onClick={() => {
              const element = document.getElementById('program');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <div className="content-icon">📅</div>
              <h3>Detailed Schedule</h3>
              <p>Complete 3-day program with session timings</p>
            </div>
            <div className="content-item" onClick={() => {
              const element = document.getElementById('speakers');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <div className="content-icon">🎤</div>
              <h3>Speaker Profiles</h3>
              <p>Biographies of keynote and invited speakers</p>
            </div>
            <div className="content-item" onClick={() => {
              const element = document.getElementById('abstract');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <div className="content-icon">🔬</div>
              <h3>Research Topics</h3>
              <p>Key themes and technical tracks</p>
            </div>
            <div className="content-item" onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <div className="content-icon">📍</div>
              <h3>Venue Information</h3>
              <p>Location, accommodation, and travel details</p>
            </div>
            <div className="content-item" onClick={() => {
              const element = document.getElementById('registration');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: 'pointer' }}>
              <div className="content-icon">💰</div>
              <h3>Registration Fees</h3>
              <p>Pricing and payment information</p>
            </div>
          </div>
        </div>

        <div className="brochure-section">
          <h2>Additional Resources</h2>
          <div className="resources-list">
            <div className="resource-item">
              <div className="resource-icon">📋</div>
              <div className="resource-info">
                <h3>Call for Papers</h3>
                <p>Guidelines for abstract submission and paper presentation</p>
                <a href="#abstract" className="resource-link">View Details →</a>
              </div>
            </div>
            <div className="resource-item">
              <div className="resource-icon">🏨</div>
              <div className="resource-info">
                <h3>Accommodation Guide</h3>
                <p>Recommended hotels near the conference venue</p>
                <button className="resource-link">Download PDF</button>
              </div>
            </div>
            <div className="resource-item">
              <div className="resource-icon">✈️</div>
              <div className="resource-info">
                <h3>Travel Information</h3>
                <p>Transportation options and visa requirements</p>
                <button className="resource-link">Download PDF</button>
              </div>
            </div>
          </div>
        </div>

        <div className="brochure-cta">
          <h2>Need More Information?</h2>
          <p>Contact our organizing committee for any questions about the conference</p>
          <button className="cta-button" onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Us
          </button>
        </div>

        <div className="brochure-section">
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
        </div>

      </div>
    </div>
  );
};

export default Brochure;
