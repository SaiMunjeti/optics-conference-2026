import React from 'react';
import './Page.css';

const Speakers: React.FC = () => {
  return (
    <div className="page-container speakers-page-bg">
      <h1>Featured Speakers</h1>
      <div className="content">
        <p className="intro-text">
          Join us to hear from world-renowned experts in optics, photonics, and laser technology
        </p>
        
        <div className="speakers-card-grid">
          <div className="speaker-profile-card">
            <div className="speaker-image-container">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt="Dr. Jane Smith" />
            </div>
            <div className="speaker-details">
              <h3>Dr. Jane Smith</h3>
              <p className="speaker-title">Professor of Quantum Optics</p>
              <p className="speaker-affiliation">MIT</p>
              <p className="speaker-bio">Leading expert in quantum photonics and optical computing with over 20 years of research experience. Her groundbreaking work in quantum entanglement has revolutionized the field.</p>
              <div className="speaker-topics">
                <span className="topic-tag">Quantum Optics</span>
                <span className="topic-tag">Optical Computing</span>
              </div>
            </div>
          </div>
          
          <div className="speaker-profile-card">
            <div className="speaker-image-container">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" alt="Dr. John Doe" />
            </div>
            <div className="speaker-details">
              <h3>Dr. John Doe</h3>
              <p className="speaker-title">Director of Photonics Research</p>
              <p className="speaker-affiliation">Stanford University</p>
              <p className="speaker-bio">Pioneer in nanophotonics and optical metamaterials. His research focuses on developing next-generation photonic devices for telecommunications and sensing applications.</p>
              <div className="speaker-topics">
                <span className="topic-tag">Nanophotonics</span>
                <span className="topic-tag">Metamaterials</span>
              </div>
            </div>
          </div>
          
          <div className="speaker-profile-card">
            <div className="speaker-image-container">
              <img src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop" alt="Dr. Maria Garcia" />
            </div>
            <div className="speaker-details">
              <h3>Dr. Maria Garcia</h3>
              <p className="speaker-title">Chief Scientist</p>
              <p className="speaker-affiliation">Photonics Corp</p>
              <p className="speaker-bio">Industry leader in optical communications and fiber optics. She has led numerous projects in developing high-speed optical networks and has over 50 patents in the field.</p>
              <div className="speaker-topics">
                <span className="topic-tag">Optical Communications</span>
                <span className="topic-tag">Fiber Optics</span>
              </div>
            </div>
          </div>

          <div className="speaker-profile-card">
            <div className="speaker-image-container">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Dr. Robert Chen" />
            </div>
            <div className="speaker-details">
              <h3>Dr. Robert Chen</h3>
              <p className="speaker-title">Professor of Laser Physics</p>
              <p className="speaker-affiliation">University of Cambridge</p>
              <p className="speaker-bio">Renowned for his work in ultrafast laser technology and applications in medical imaging. His innovations have transformed surgical procedures worldwide.</p>
              <div className="speaker-topics">
                <span className="topic-tag">Laser Technology</span>
                <span className="topic-tag">Medical Imaging</span>
              </div>
            </div>
          </div>

          <div className="speaker-profile-card">
            <div className="speaker-image-container">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" alt="Dr. Sarah Johnson" />
            </div>
            <div className="speaker-details">
              <h3>Dr. Sarah Johnson</h3>
              <p className="speaker-title">Head of Biophotonics Lab</p>
              <p className="speaker-affiliation">Harvard Medical School</p>
              <p className="speaker-bio">Expert in biophotonics and optical diagnostics. Her research focuses on developing non-invasive optical techniques for early disease detection.</p>
              <div className="speaker-topics">
                <span className="topic-tag">Biophotonics</span>
                <span className="topic-tag">Medical Diagnostics</span>
              </div>
            </div>
          </div>

          <div className="speaker-profile-card">
            <div className="speaker-image-container">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" alt="Dr. Michael Brown" />
            </div>
            <div className="speaker-details">
              <h3>Dr. Michael Brown</h3>
              <p className="speaker-title">Senior Research Scientist</p>
              <p className="speaker-affiliation">Max Planck Institute</p>
              <p className="speaker-bio">Specialist in photonic integrated circuits and silicon photonics. His work has enabled breakthrough advances in optical computing and data centers.</p>
              <div className="speaker-topics">
                <span className="topic-tag">Integrated Photonics</span>
                <span className="topic-tag">Silicon Photonics</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="more-speakers-banner">
          <h3>More Speakers to be Announced Soon!</h3>
          <p>Stay tuned for updates on additional keynote speakers and session chairs</p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
