import React from 'react';
import './Page.css';

const Sponsors: React.FC = () => {
  return (
    <div className="page-container sponsors-page-bg">
      <h1>Our Sponsors & Partners</h1>
      <div className="content">
        <div className="sponsors-hero-image">
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=500&fit=crop" alt="Partnership and Collaboration" />
        </div>

        <p className="intro-text">
          We are grateful to our sponsors and partners for their generous support in making 
          OPTICPHOTONSUMMIT2026 a success.
        </p>

        <h2>Platinum Sponsors</h2>
        <div className="sponsors-grid platinum">
          <div className="sponsor-card">
            <div className="sponsor-logo-image">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop" alt="OptiTech Global" />
            </div>
            <div className="sponsor-logo">
              <h3>OptiTech Global</h3>
            </div>
            <p>Leading manufacturer of advanced optical systems and photonic devices</p>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo-image">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop" alt="Laser Innovations Inc." />
            </div>
            <div className="sponsor-logo">
              <h3>Laser Innovations Inc.</h3>
            </div>
            <p>Pioneering laser technology solutions for industrial and medical applications</p>
          </div>
        </div>

        <h2>Gold Sponsors</h2>
        <div className="sponsors-grid gold">
          <div className="sponsor-card">
            <div className="sponsor-logo-image">
              <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=250&fit=crop" alt="PhotonX Systems" />
            </div>
            <div className="sponsor-logo">
              <h3>PhotonX Systems</h3>
            </div>
            <p>Advanced photonics research and development</p>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo-image">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop" alt="Quantum Optics Ltd." />
            </div>
            <div className="sponsor-logo">
              <h3>Quantum Optics Ltd.</h3>
            </div>
            <p>Quantum computing and optical communications</p>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo-image">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop" alt="NanoPhotonics Corp." />
            </div>
            <div className="sponsor-logo">
              <h3>NanoPhotonics Corp.</h3>
            </div>
            <p>Nanoscale photonic materials and devices</p>
          </div>
        </div>

        <h2>Silver Sponsors</h2>
        <div className="sponsors-grid silver">
          <div className="sponsor-card">
            <div className="sponsor-logo-image">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop" alt="BioPhoton Medical" />
            </div>
            <div className="sponsor-logo">
              <h3>BioPhoton Medical</h3>
            </div>
            <p>Medical imaging and biophotonics solutions</p>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo-image">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop" alt="Fiber Optics International" />
            </div>
            <div className="sponsor-logo">
              <h3>Fiber Optics International</h3>
            </div>
            <p>Fiber optic networks and telecommunications</p>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo-image">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop" alt="Spectral Instruments" />
            </div>
            <div className="sponsor-logo">
              <h3>Spectral Instruments</h3>
            </div>
            <p>Precision optical measurement instruments</p>
          </div>
          <div className="sponsor-card">
            <div className="sponsor-logo-image">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop" alt="Photonics Research Institute" />
            </div>
            <div className="sponsor-logo">
              <h3>Photonics Research Institute</h3>
            </div>
            <p>Academic research and education in photonics</p>
          </div>
        </div>

        <div className="sponsorship-info-box">
          <div className="sponsorship-image-banner">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=300&fit=crop" alt="Sponsorship Opportunities" />
          </div>
          <h3>Become a Sponsor</h3>
          <p>
            Join us as a sponsor and gain visibility among leading researchers, industry professionals, 
            and decision-makers in the optics and photonics community.
          </p>
          <h4>Sponsorship Benefits:</h4>
          <ul>
            <li>Logo placement on conference materials and website</li>
            <li>Exhibition booth space at the conference venue</li>
            <li>Complimentary conference registrations</li>
            <li>Speaking opportunities during the conference</li>
            <li>Networking opportunities with attendees</li>
            <li>Recognition in conference proceedings</li>
          </ul>
          <p><strong>For sponsorship inquiries, please contact:</strong></p>
          <p>Email: sponsors@opticphotonsummit2026.com</p>
          <p>Phone: +31 20 123 4567</p>
        </div>

        <h2>Academic Partners</h2>
        <div className="partners-list">
          <div className="partner-item">
            <div className="partner-image">
              <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop" alt="University Research" />
            </div>
            <div className="partner-content">
              <h4>University of Amsterdam - Photonics Research Center</h4>
              <p>Leading research institution in optical sciences</p>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-image">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop" alt="Industry Consortium" />
            </div>
            <div className="partner-content">
              <h4>European Photonics Industry Consortium</h4>
              <p>Industry association promoting photonics innovation</p>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-image">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=200&fit=crop" alt="Professional Society" />
            </div>
            <div className="partner-content">
              <h4>International Society for Optics and Photonics</h4>
              <p>Global professional society advancing light-based technologies</p>
            </div>
          </div>
          <div className="partner-item">
            <div className="partner-image">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop" alt="Research Institute" />
            </div>
            <div className="partner-content">
              <h4>Netherlands Institute for Advanced Optics</h4>
              <p>Research institute focused on optical technologies</p>
            </div>
          </div>
        </div>

        <div className="media-partners-box">
          <h3>Media Partners</h3>
          <div className="media-grid">
            <div className="media-item">
              <div className="media-logo-image">
                <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=400&h=250&fit=crop" alt="Photonics Today Magazine" />
              </div>
              Photonics Today Magazine
            </div>
            <div className="media-item">
              <div className="media-logo-image">
                <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=250&fit=crop" alt="Optics & Laser Technology Journal" />
              </div>
              Optics & Laser Technology Journal
            </div>
            <div className="media-item">
              <div className="media-logo-image">
                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop" alt="International Photonics News" />
              </div>
              International Photonics News
            </div>
            <div className="media-item">
              <div className="media-logo-image">
                <img src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=250&fit=crop" alt="Laser Focus World" />
              </div>
              Laser Focus World
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
