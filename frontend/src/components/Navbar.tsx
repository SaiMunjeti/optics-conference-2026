import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMoreDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo-section">
          <a href="#home" className="nav-logo-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <div className="logo-icon">
              <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#a8d0ff', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <polygon points="50,10 90,40 70,80 30,80 10,40" fill="url(#logoGradient)" />
                <circle cx="50" cy="50" r="15" fill="white" opacity="0.9" />
                <path d="M 40 50 L 50 40 L 60 50 L 50 60 Z" fill="#1e3c72" />
              </svg>
            </div>
            <div className="logo-text">
              <div className="logo-main">SCIENCA SUMMITS</div>
              <div className="logo-sub">OPTICS & PHOTONICS</div>
            </div>
          </a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          </li>
          <li className="nav-item">
            <a href="#program" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('program'); }}>Program</a>
          </li>
          <li className="nav-item">
            <a href="#brochure" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('brochure'); }}>Brochure</a>
          </li>
          <li className="nav-item">
            <a href="#abstract" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('abstract'); }}>Abstract</a>
          </li>
          <li className="nav-item">
            <a href="#speakers" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('speakers'); }}>Speakers</a>
          </li>
          <li className="nav-item">
            <a href="#registration" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('registration'); }}>Registration</a>
          </li>
          <li className="nav-item">
            <a href="#sponsors" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('sponsors'); }}>Sponsors</a>
          </li>
          <li className="nav-item nav-dropdown">
            <a 
              href="#more" 
              className="nav-link" 
              onClick={(e) => { e.preventDefault(); setShowMoreDropdown(!showMoreDropdown); }}
            >
              More
            </a>
            {showMoreDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQs</a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Venue</a>
                </li>
                <li>
                  <a href="https://ind.nl/en/visa-for-the-netherlands" target="_blank" rel="noopener noreferrer">Visa Info</a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
