import React from 'react';
import './Page.css';

const About: React.FC = () => {
  return (
    <div className="page-container about-page-bg">
      <h1>About the Summit</h1>
      <div className="content">
        
        {/* About Conference Section */}
        <div className="about-section-lr">
          <div className="about-image-left">
            <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=500&fit=crop" alt="Optics and Photonics Laboratory" />
          </div>
          <div className="about-content-right">
            <h2>About the Conference</h2>
            <p>
              The Global Summit on Optics Photonics and Laser Technology (OPTICPHOTONSUMMIT2026) 
              is a premier international conference bringing together researchers, industry professionals, 
              and students from around the world.
            </p>
            <p>
              Our conference provides a unique opportunity for participants to present their latest research, 
              learn about cutting-edge developments, and establish valuable connections with peers from 
              academia and industry worldwide.
            </p>
            <div className="event-quick-info">
              <p><strong>📅 Date:</strong> November 16-18, 2026</p>
              <p><strong>📍 Location:</strong> Amsterdam, Netherlands</p>
              <p><strong>🎫 Event Code:</strong> OPTICPHOTONSUMMIT2026</p>
            </div>
          </div>
        </div>

        {/* Conference Venue Section */}
        <div className="about-section-lr">
          <div className="about-image-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.0847847847847!2d4.888833!3d52.338333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e14e1e1e1e1e%3A0x1e1e1e1e1e1e1e1e!2sAmsterdam%20RAI!5e0!3m2!1sen!2snl!4v1234567890123!5m2!1sen!2snl"
              width="100%"
              height="100%"
              style={{ border: '3px solid #2a5298', borderRadius: '15px', minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amsterdam RAI Convention Centre Location"
            ></iframe>
          </div>
          <div className="about-content-right">
            <h2>Conference Venue</h2>
            <h3>Amsterdam RAI Convention Centre</h3>
            <p><strong>📍 Address:</strong> Europaplein 24, 1078 GZ Amsterdam, Netherlands</p>
            <p><strong>🚇 Transportation:</strong> Metro: RAI Station (5 min walk) | Tram: Lines 4 & 25</p>
            <p><strong>✈️ Airport:</strong> Amsterdam Schiphol Airport (15 min by train)</p>
            <div className="venue-features-inline">
              <span className="feature-tag">🎤 Modern AV</span>
              <span className="feature-tag">🍽️ Catering</span>
              <span className="feature-tag">📶 WiFi</span>
              <span className="feature-tag">🅿️ Parking</span>
              <span className="feature-tag">♿ Accessible</span>
            </div>
          </div>
        </div>

        {/* Conference Statistics Section */}
        <div className="conference-stats-section">
          <h2>Summit Highlights</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Expected Participants</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Research Presentations</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className="stat-number">30+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Industry Partners</div>
            </div>
          </div>
        </div>

        {/* Who Should Attend Section */}
        <div className="brochure-section">
          <h2>Who Should Attend</h2>
          <div className="themes-grid">
            <div className="theme-card">
              <div className="theme-card-image">
                <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&h=250&fit=crop" alt="Academic Researchers" />
              </div>
              <h3>Academic Researchers</h3>
              <p>University professors, postdoctoral researchers, and PhD students working in optics and photonics</p>
            </div>
            <div className="theme-card">
              <div className="theme-card-image">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop" alt="Industry Professionals" />
              </div>
              <h3>Industry Professionals</h3>
              <p>Engineers, R&D specialists, and technical managers from photonics and laser technology companies</p>
            </div>
            <div className="theme-card">
              <div className="theme-card-image">
                <img src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=400&h=250&fit=crop" alt="Graduate Students" />
              </div>
              <h3>Graduate Students</h3>
              <p>Master's and doctoral students seeking to present research and network with experts</p>
            </div>
            <div className="theme-card">
              <div className="theme-card-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Technology Leaders" />
              </div>
              <h3>Technology Leaders</h3>
              <p>CTOs, innovation directors, and business development professionals in the photonics sector</p>
            </div>
            <div className="theme-card">
              <div className="theme-card-image">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop" alt="Medical Professionals" />
              </div>
              <h3>Medical Professionals</h3>
              <p>Physicians, surgeons, and medical researchers interested in biophotonics and laser-based medical technologies</p>
            </div>
            <div className="theme-card">
              <div className="theme-card-image">
                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop" alt="Policy Makers" />
              </div>
              <h3>Policy Makers & Investors</h3>
              <p>Government officials, funding agencies, and venture capitalists supporting photonics innovation and research</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
