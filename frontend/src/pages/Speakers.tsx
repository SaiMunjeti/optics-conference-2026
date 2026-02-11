import React, { useState } from 'react';
import './Page.css';

interface Speaker {
  name: string;
  title: string;
  affiliation: string;
  image: string;
  bio: string;
  fullBio: string;
  topics: string[];
}

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const speakers: Speaker[] = [
    {
      name: "Dr. Jane Smith",
      title: "Professor of Quantum Optics",
      affiliation: "MIT",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Leading expert in quantum photonics and optical computing",
      fullBio: "Dr. Jane Smith is a leading expert in quantum photonics and optical computing with over 20 years of research experience. Her groundbreaking work in quantum entanglement has revolutionized the field. She received her Ph.D. from Stanford University and has published over 150 peer-reviewed papers. Dr. Smith's research focuses on developing quantum optical systems for next-generation computing and secure communications. She has received numerous awards including the IEEE Photonics Award and the Optical Society of America's highest honor.",
      topics: ["Quantum Optics", "Optical Computing"]
    },
    {
      name: "Dr. John Doe",
      title: "Director of Photonics Research",
      affiliation: "Stanford University",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "Pioneer in nanophotonics and optical metamaterials",
      fullBio: "Dr. John Doe is a pioneer in nanophotonics and optical metamaterials. His research focuses on developing next-generation photonic devices for telecommunications and sensing applications. He has led groundbreaking projects in optical metamaterials that enable unprecedented control over light at the nanoscale. Dr. Doe holds 30+ patents and has founded two successful photonics startups. His work has been featured in Nature, Science, and other top-tier journals.",
      topics: ["Nanophotonics", "Metamaterials"]
    },
    {
      name: "Dr. Maria Garcia",
      title: "Chief Scientist",
      affiliation: "Photonics Corp",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
      bio: "Industry leader in optical communications and fiber optics",
      fullBio: "Dr. Maria Garcia is an industry leader in optical communications and fiber optics. She has led numerous projects in developing high-speed optical networks and has over 50 patents in the field. Her innovations have enabled the deployment of terabit-scale optical networks worldwide. Dr. Garcia serves on the technical advisory boards of several major telecommunications companies and is a Fellow of the Optical Society of America.",
      topics: ["Optical Communications", "Fiber Optics"]
    },
    {
      name: "Dr. Robert Chen",
      title: "Professor of Laser Physics",
      affiliation: "University of Cambridge",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Renowned for his work in ultrafast laser technology",
      fullBio: "Dr. Robert Chen is renowned for his work in ultrafast laser technology and applications in medical imaging. His innovations have transformed surgical procedures worldwide. He pioneered the development of femtosecond laser systems for precision surgery and has trained hundreds of surgeons in advanced laser techniques. Dr. Chen's research group at Cambridge is at the forefront of developing next-generation medical laser systems.",
      topics: ["Laser Technology", "Medical Imaging"]
    },
    {
      name: "Dr. Sarah Johnson",
      title: "Head of Biophotonics Lab",
      affiliation: "Harvard Medical School",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Expert in biophotonics and optical diagnostics",
      fullBio: "Dr. Sarah Johnson is an expert in biophotonics and optical diagnostics. Her research focuses on developing non-invasive optical techniques for early disease detection. She has developed several FDA-approved optical diagnostic devices that are now used in hospitals worldwide. Dr. Johnson's work bridges the gap between photonics research and clinical applications, making significant impacts on patient care.",
      topics: ["Biophotonics", "Medical Diagnostics"]
    },
    {
      name: "Dr. Michael Brown",
      title: "Senior Research Scientist",
      affiliation: "Max Planck Institute",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Specialist in photonic integrated circuits",
      fullBio: "Dr. Michael Brown is a specialist in photonic integrated circuits and silicon photonics. His work has enabled breakthrough advances in optical computing and data centers. He has developed novel integration techniques that allow complex photonic circuits to be manufactured at scale. Dr. Brown's research is driving the next generation of energy-efficient data center technologies and optical interconnects.",
      topics: ["Integrated Photonics", "Silicon Photonics"]
    },
    {
      name: "Dr. Emily Zhang",
      title: "Professor of Optical Engineering",
      affiliation: "Caltech",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      bio: "Expert in adaptive optics and astronomical instrumentation",
      fullBio: "Dr. Emily Zhang is an expert in adaptive optics and astronomical instrumentation. Her pioneering work in wavefront sensing has revolutionized ground-based telescope imaging. She has developed advanced optical systems that compensate for atmospheric turbulence, enabling unprecedented clarity in astronomical observations. Dr. Zhang's innovations are used in major observatories worldwide and have contributed to breakthrough discoveries in exoplanet detection and deep space imaging.",
      topics: ["Adaptive Optics", "Astronomical Imaging"]
    },
    {
      name: "Dr. David Martinez",
      title: "Director of Laser Systems Lab",
      affiliation: "ETH Zurich",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Pioneer in high-power laser systems and materials processing",
      fullBio: "Dr. David Martinez is a pioneer in high-power laser systems and materials processing applications. His research focuses on developing next-generation industrial laser systems for precision manufacturing and materials science. He has led groundbreaking projects in laser-based additive manufacturing and surface modification techniques. Dr. Martinez holds over 40 patents and his innovations have been adopted by leading manufacturing companies worldwide, transforming modern production processes.",
      topics: ["High-Power Lasers", "Materials Processing"]
    }
  ];

  return (
    <div className="page-container speakers-page-bg">
      <h1>Featured Speakers</h1>
      <div className="content">
        <p className="intro-text">
          Join us to hear from world-renowned experts in optics, photonics, and laser technology
        </p>
        
        <div className="speakers-card-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-profile-card">
              <div className="speaker-image-container">
                <img src={speaker.image} alt={speaker.name} />
              </div>
              <div className="speaker-details">
                <h3>{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                <p className="speaker-affiliation">{speaker.affiliation}</p>
                <p className="speaker-bio">{speaker.bio}</p>
                <div className="speaker-topics">
                  {speaker.topics.map((topic, idx) => (
                    <span key={idx} className="topic-tag">{topic}</span>
                  ))}
                </div>
                <button 
                  className="biography-button"
                  onClick={() => setSelectedSpeaker(speaker)}
                >
                  BIOGRAPHY
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="more-speakers-banner">
          <h3>More Speakers to be Announced Soon!</h3>
          <p>Stay tuned for updates on additional keynote speakers and session chairs</p>
        </div>
      </div>

      {/* Biography Modal */}
      {selectedSpeaker && (
        <div className="biography-modal-overlay" onClick={() => setSelectedSpeaker(null)}>
          <div className="biography-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSpeaker(null)}>×</button>
            <h2>Biography</h2>
            <p className="modal-bio-text">{selectedSpeaker.fullBio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;
