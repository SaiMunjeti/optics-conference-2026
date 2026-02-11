import React from 'react';
import './Page.css';

const About: React.FC = () => {
  return (
    <div className="page-container about-page-bg">
      <h1>About the Summit</h1>
      <div className="content">
        <div className="about-hero-image">
          <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop" alt="Optics and Photonics Laboratory" />
        </div>

        <p>
          The Global Summit on Optics Photonics and Laser Technology (OPTICPHOTONSUMMIT2026) 
          is a premier international conference bringing together researchers, industry professionals, 
          and students from around the world.
        </p>
        
        <div className="event-info-box">
          <h3>Event Details & Conference Themes</h3>
          <p><strong>Date:</strong> November 16-18, 2026 (3 Days)</p>
          <p><strong>Location:</strong> Amsterdam, Netherlands</p>
          <p><strong>Event Code:</strong> OPTICPHOTONSUMMIT2026</p>
          
          <div className="themes-inline">
            <p><strong>Key Topics:</strong></p>
            <div className="topics-grid">
              <div className="topic-item">
                <div className="topic-icon">
                  <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=100&h=100&fit=crop" alt="Quantum Optics" />
                </div>
                <span>Quantum Optics and Photonics</span>
              </div>
              <div className="topic-item">
                <div className="topic-icon">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&h=100&fit=crop" alt="Biophotonics" />
                </div>
                <span>Biophotonics and Medical Applications</span>
              </div>
              <div className="topic-item">
                <div className="topic-icon">
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop" alt="Optical Communications" />
                </div>
                <span>Optical Communications</span>
              </div>
              <div className="topic-item">
                <div className="topic-icon">
                  <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=100&h=100&fit=crop" alt="Nanophotonics" />
                </div>
                <span>Nanophotonics</span>
              </div>
              <div className="topic-item">
                <div className="topic-icon">
                  <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=100&h=100&fit=crop" alt="Laser Technology" />
                </div>
                <span>Laser Technology and Applications</span>
              </div>
              <div className="topic-item">
                <div className="topic-icon">
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=100&fit=crop" alt="Photonic Materials" />
                </div>
                <span>Photonic Materials and Devices</span>
              </div>
            </div>
          </div>
        </div>

        <div className="two-column-section">
          <div className="column-content">
            <h2>Our Mission</h2>
            <p>
              To advance the field of optics, photonics, and laser technology through knowledge sharing, 
              collaboration, and innovation. We strive to create a platform where researchers and industry 
              leaders can exchange ideas and foster partnerships.
            </p>
            <p>
              Our conference provides a unique opportunity for participants to present their latest research, 
              learn about cutting-edge developments, and establish valuable connections with peers from 
              academia and industry worldwide.
            </p>
          </div>
          <div className="column-image">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=500&fit=crop" alt="Laser Technology Research" />
          </div>
        </div>

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
        </div>

        <div className="laser-image-section">
          <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=1200&h=500&fit=crop" alt="Advanced Laser Systems" />
        </div>

        <h2>Conference Venue</h2>
        
        <div className="venue-container">
          <div className="venue-card">
            <div className="venue-header">
              <div className="venue-icon">📍</div>
              <div className="venue-title-section">
                <h3>Amsterdam Convention Center</h3>
                <p className="venue-subtitle">World-Class Conference Facility</p>
              </div>
            </div>
            
            <div className="venue-details">
              <div className="venue-detail-item">
                <span className="detail-icon">🏢</span>
                <div className="detail-content">
                  <strong>Venue Name</strong>
                  <p>Amsterdam RAI Convention Centre</p>
                </div>
              </div>
              
              <div className="venue-detail-item">
                <span className="detail-icon">📍</span>
                <div className="detail-content">
                  <strong>Address</strong>
                  <p>Europaplein 24, 1078 GZ Amsterdam, Netherlands</p>
                </div>
              </div>
              
              <div className="venue-detail-item">
                <span className="detail-icon">🚇</span>
                <div className="detail-content">
                  <strong>Transportation</strong>
                  <p>Metro: RAI Station (5 min walk) | Tram: Lines 4 & 25</p>
                </div>
              </div>
              
              <div className="venue-detail-item">
                <span className="detail-icon">✈️</span>
                <div className="detail-content">
                  <strong>Airport</strong>
                  <p>Amsterdam Schiphol Airport (15 min by train)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="venue-right-section">
            <div className="venue-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.0234567890123!2d4.890123456789012!3d52.33901234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609e1c3e3e3e3%3A0x1234567890abcdef!2sAmsterdam%20RAI!5e0!3m2!1sen!2snl!4v1234567890123!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amsterdam Convention Center Location"
              ></iframe>
            </div>
            
            <div className="venue-features">
              <h4>Venue Features</h4>
              <div className="features-grid">
                <div className="feature-badge">🎤 Modern AV Equipment</div>
                <div className="feature-badge">🍽️ On-site Catering</div>
                <div className="feature-badge">📶 High-Speed WiFi</div>
                <div className="feature-badge">🅿️ Parking Available</div>
                <div className="feature-badge">♿ Accessible Facilities</div>
                <div className="feature-badge">🏨 Nearby Hotels</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="venue-description">
          <p>
            <strong>Amsterdam, Netherlands</strong> - A global hub for science and innovation, Amsterdam offers 
            world-class conference facilities, excellent transportation connections, and a vibrant cultural scene. 
            The city is home to leading research institutions and photonics companies, making it the perfect 
            location for our international summit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
