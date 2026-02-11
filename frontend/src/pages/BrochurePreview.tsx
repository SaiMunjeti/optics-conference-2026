import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import './BrochurePreview.css';

// Updated: Key Topics section removed
const BrochurePreview: React.FC = () => {
  const brochureRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (brochureRef.current) {
      try {
        // Wait a bit for images to load
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const canvas = await html2canvas(brochureRef.current, {
          useCORS: true,
          logging: false,
          allowTaint: true,
          width: brochureRef.current.scrollWidth,
          height: brochureRef.current.scrollHeight
        });
        
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'OPTICPHOTONSUMMIT2026-Brochure.png';
        link.click();
      } catch (error) {
        console.error('Error generating brochure image:', error);
        alert('Error generating brochure. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="download-button-container">
        <button className="download-image-btn" onClick={handleDownload}>
          ⬇️ Download Brochure as Image
        </button>
      </div>
      <div className="brochure-preview-container" ref={brochureRef}>
      <div className="brochure-preview-header">
        <h1>BROCHURE-OPTICPHOTONSUMMIT2026</h1>
        <div className="brochure-logo">
          <div className="logo-circle">
            <span>SCIENCA SUMMITS</span>
          </div>
        </div>
      </div>

      <div className="brochure-preview-content">
        <div className="brochure-title-section">
          <h2>Global Summit on</h2>
          <h1>Optics, Photonics & Laser Technology</h1>
          <div className="brochure-event-details">
            <p>November 16-18, 2026 | Amsterdam, Netherlands</p>
          </div>
        </div>

        <div className="brochure-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&t=1" 
            alt="Optics and Photonics Conference" 
          />
        </div>

        <div className="brochure-section">
          <h2>About the Summit</h2>
          <p>
            The Global Summit on Optics Photonics and Laser Technology (OPTICPHOTONSUMMIT2026) 
            is a premier international conference bringing together researchers, industry professionals, 
            and students from around the world to discuss cutting-edge developments in optics, photonics, 
            and laser technology.
          </p>
        </div>

        <div className="brochure-images-grid">
          <div className="brochure-image-item">
            <img 
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop&t=1" 
              alt="Research Presentation" 
            />
            <p>World-Class Research Presentations</p>
          </div>
          <div className="brochure-image-item">
            <img 
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop&t=1" 
              alt="Networking" 
            />
            <p>Networking Opportunities</p>
          </div>
          <div className="brochure-image-item">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f29da8c2b7?w=600&h=400&fit=crop&t=1" 
              alt="Conference Venue" 
            />
            <p>State-of-the-Art Venue</p>
          </div>
        </div>

        <div className="brochure-section highlight-section">
          <h2>Why Attend?</h2>
          <div className="brochure-highlights">
            <div className="highlight-item">
              <span className="highlight-number">500+</span>
              <span className="highlight-label">Expected Participants</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">100+</span>
              <span className="highlight-label">Research Presentations</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">30+</span>
              <span className="highlight-label">Countries</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">50+</span>
              <span className="highlight-label">Industry Partners</span>
            </div>
          </div>
        </div>

        <div className="brochure-venue-section">
          <h2>Conference Venue</h2>
          <div className="venue-info">
            <img 
              src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&h=400&fit=crop&t=1" 
              alt="Amsterdam RAI Convention Centre" 
            />
            <div className="venue-details">
              <h3>Amsterdam RAI Convention Centre</h3>
              <p>📍 Europaplein 24, 1078 GZ Amsterdam, Netherlands</p>
              <p>🚇 Metro: RAI Station (5 min walk)</p>
              <p>✈️ Airport: Amsterdam Schiphol Airport (15 min by train)</p>
            </div>
          </div>
        </div>

        <div className="brochure-section">
          <h2>Registration Information</h2>
          <p>
            Early bird registration is now open! Register before the deadline to secure your spot 
            and take advantage of discounted rates.
          </p>
          <div className="brochure-cta">
            <button className="brochure-btn" onClick={() => window.close()}>
              Close Preview
            </button>
          </div>
        </div>

        <div className="brochure-footer">
          <p>For more information, visit: www.opticphotonsummit2026.com</p>
          <p>Contact: info@opticphotonsummit2026.com</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default BrochurePreview;
