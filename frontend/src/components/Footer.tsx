import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SCIENCA SUMMITS</h3>
          <p>Optics & Photonics</p>
          <p className="footer-tagline">Advancing the future of photonics technology</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#schedule" onClick={(e) => { e.preventDefault(); scrollToSection('schedule'); }}>Schedule</a></li>
            <li><a href="#speakers" onClick={(e) => { e.preventDefault(); scrollToSection('speakers'); }}>Speakers</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><a href="#registration" onClick={(e) => { e.preventDefault(); scrollToSection('registration'); }}>Registration</a></li>
            <li><a href="#sponsors" onClick={(e) => { e.preventDefault(); scrollToSection('sponsors'); }}>Sponsors</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Event Details</h4>
          <p><strong>Date:</strong> November 16-18, 2026</p>
          <p><strong>Location:</strong> Amsterdam, Netherlands</p>
          <p><strong>Code:</strong> OPTICPHOTONSUMMIT2026</p>
          <p><strong>Email:</strong> info@opticphotonsummit2026.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 SCIENCA SUMMITS - Optics & Photonics. All rights reserved.</p>
        <p>Global Summit on Optics Photonics and Laser Technology</p>
      </div>
    </footer>
  );
};

export default Footer;
