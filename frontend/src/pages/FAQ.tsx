import React, { useState } from 'react';
import './Page.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is OPTICPHOTONSUMMIT2026?",
      answer: "OPTICPHOTONSUMMIT2026 is a Global Summit on Optics Photonics and Laser Technology taking place from November 16-18, 2026 in Amsterdam, Netherlands. It brings together researchers, industry professionals, and students from around the world."
    },
    {
      question: "When and where is the conference?",
      answer: "The conference will be held from November 16-18, 2026 (3 days) at the Amsterdam Convention Center in Amsterdam, Netherlands."
    },
    {
      question: "Who should attend this summit?",
      answer: "This summit is ideal for researchers, scientists, industry professionals, PhD students, postdoctoral fellows, and anyone interested in optics, photonics, and laser technology."
    },
    {
      question: "What are the registration fees?",
      answer: "Early Bird: $299 (until March 31, 2026), Regular: $399 (until May 31, 2026), Student: $199 (with valid student ID). All registrations include access to all sessions, conference materials, meals, and networking events."
    },
    {
      question: "What topics will be covered?",
      answer: "The conference covers Quantum Optics and Photonics, Biophotonics and Medical Applications, Optical Communications, Nanophotonics, Laser Technology and Applications, and Photonic Materials and Devices."
    },
    {
      question: "Can I present my research?",
      answer: "Yes! We welcome oral presentations and poster presentations. Please submit your abstract through our registration portal. Selected abstracts will be invited for oral or poster presentations."
    },
    {
      question: "Is there a student discount?",
      answer: "Yes, students can register for $199 with a valid student ID. This includes full access to all conference sessions and materials."
    },
    {
      question: "What is included in the registration fee?",
      answer: "Registration includes access to all sessions and workshops, conference materials and proceedings, lunch and refreshments, networking events, certificate of attendance, and photo opportunities."
    },
    {
      question: "How do I register?",
      answer: "Click on the 'Register Now' button on our website and fill out the registration form. You will receive a confirmation email with payment instructions."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations made before September 1, 2026 will receive a 50% refund. No refunds will be issued for cancellations after September 1, 2026. However, registrations are transferable to another person."
    },
    {
      question: "Will the conference proceedings be published?",
      answer: "Yes, selected papers will be published in our conference proceedings. Authors will be notified about publication opportunities after the conference."
    },
    {
      question: "Is accommodation included?",
      answer: "Accommodation is not included in the registration fee. However, we have partnered with nearby hotels to offer discounted rates for conference attendees. Details will be sent upon registration."
    },
    {
      question: "How can I become a sponsor?",
      answer: "We offer various sponsorship packages. Please contact us at info@opticphotonsummit2026.com for sponsorship opportunities and benefits."
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Yes! The conference includes dedicated networking sessions, coffee breaks, lunch gatherings, and an evening reception to facilitate connections among attendees."
    },
    {
      question: "What language will the conference be conducted in?",
      answer: "All sessions will be conducted in English."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page-container faq-page-bg">
      <h1>Frequently Asked Questions</h1>
      <div className="content">
        <p className="faq-intro">
          Find answers to common questions about OPTICPHOTONSUMMIT2026. 
          If you don't find what you're looking for, feel free to contact us.
        </p>

        <h2>Venue Information</h2>
        <div className="venue-info-section" style={{background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', color: 'white', padding: '40px', borderRadius: '15px', marginBottom: '40px'}}>
          <h3 style={{color: 'white', fontSize: '1.8rem', marginBottom: '20px'}}>Amsterdam RAI Convention Centre</h3>
          <p style={{color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.1rem', marginBottom: '12px'}}>
            <strong>📍 Address:</strong> Europaplein 24, 1078 GZ Amsterdam, Netherlands
          </p>
          <p style={{color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.1rem', marginBottom: '12px'}}>
            <strong>🚇 Transportation:</strong> Metro: RAI Station (5 min walk) | Tram: Lines 4 & 25
          </p>
          <p style={{color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.1rem', marginBottom: '12px'}}>
            <strong>✈️ Airport:</strong> Amsterdam Schiphol Airport (15 min by train)
          </p>
          <p style={{color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.1rem', marginBottom: '20px'}}>
            <strong>🏨 Accommodation:</strong> Multiple hotels within walking distance. Special conference rates available.
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '25px'}}>
            <span style={{background: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px', borderRadius: '25px', fontSize: '1rem', fontWeight: 600, border: '2px solid rgba(255, 255, 255, 0.3)'}}>🎤 Modern AV</span>
            <span style={{background: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px', borderRadius: '25px', fontSize: '1rem', fontWeight: 600, border: '2px solid rgba(255, 255, 255, 0.3)'}}>🍽️ Catering</span>
            <span style={{background: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px', borderRadius: '25px', fontSize: '1rem', fontWeight: 600, border: '2px solid rgba(255, 255, 255, 0.3)'}}>📶 WiFi</span>
            <span style={{background: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px', borderRadius: '25px', fontSize: '1rem', fontWeight: 600, border: '2px solid rgba(255, 255, 255, 0.3)'}}>🅿️ Parking</span>
            <span style={{background: 'rgba(255, 255, 255, 0.2)', padding: '10px 20px', borderRadius: '25px', fontSize: '1rem', fontWeight: 600, border: '2px solid rgba(255, 255, 255, 0.3)'}}>♿ Accessible</span>
          </div>
        </div>

        <h2>Visa Information</h2>
        <div className="visa-info-section" style={{background: '#f8f9fa', padding: '30px', borderRadius: '15px', marginBottom: '40px', border: '2px solid #e0e6ed'}}>
          <h3 style={{color: '#1e3c72', fontSize: '1.4rem', marginBottom: '20px'}}>Visa Information for International Participants</h3>
          <p style={{color: '#555', lineHeight: '1.8', marginBottom: '15px'}}>
            The conference welcomes speakers and delegates from all over the world. Below is essential visa-related information to assist with your travel planning:
          </p>
          
          <h4 style={{color: '#2a5298', fontSize: '1.2rem', marginTop: '25px', marginBottom: '15px'}}>1. Do You Need a Visa?</h4>
          <p style={{color: '#555', lineHeight: '1.8', marginBottom: '15px'}}>
            • Check if you require a visa to enter the Netherlands using the <strong>Netherlands Visa Information Tool</strong>
          </p>
          <p style={{color: '#555', lineHeight: '1.8', marginBottom: '15px'}}>
            • Nationals of the <strong>EU, EEA, Switzerland, USA, Canada, Australia, Japan</strong>, and several other countries may enter the Netherlands for short-term visits (up to 90 days) without a visa.
          </p>

          <h4 style={{color: '#2a5298', fontSize: '1.2rem', marginTop: '25px', marginBottom: '15px'}}>2. Visa Types</h4>
          <p style={{color: '#555', lineHeight: '1.8', marginBottom: '10px'}}>
            • <strong>Schengen Visa (Short-Stay C Visa):</strong> This is the most common visa for attendees visiting for academic events, business meetings, or tourism (including conferences).
          </p>
          <p style={{color: '#555', lineHeight: '1.8', marginBottom: '15px'}}>
            • <strong>National Visa (Long-Term D Visa):</strong> For those staying in the Netherlands for more than 90 days.
          </p>

          <h4 style={{color: '#2a5298', fontSize: '1.2rem', marginTop: '25px', marginBottom: '15px'}}>3. Required Documents</h4>
          <ul style={{color: '#555', lineHeight: '1.8', marginLeft: '25px', marginBottom: '15px'}}>
            <li>Valid passport (minimum 6 months validity from your planned date of arrival)</li>
            <li>Invitation letter (issued by the conference organizers upon request)</li>
            <li>Proof of accommodation (hotel booking or conference venue details)</li>
            <li>Travel insurance covering medical expenses</li>
            <li>Proof of financial means</li>
            <li>Flight itinerary</li>
          </ul>

          <h4 style={{color: '#2a5298', fontSize: '1.2rem', marginTop: '25px', marginBottom: '15px'}}>4. Invitation Letter</h4>
          <p style={{color: '#555', lineHeight: '1.8', marginBottom: '15px'}}>
            If you need an invitation letter for your visa application, please contact us at <strong>info@opticphotonsummit2026.com</strong> with your registration confirmation and passport details.
          </p>

          <h4 style={{color: '#2a5298', fontSize: '1.2rem', marginTop: '25px', marginBottom: '15px'}}>5. Processing Time</h4>
          <p style={{color: '#555', lineHeight: '1.8', marginBottom: '15px'}}>
            Visa processing typically takes 15-30 days. We recommend applying at least 6-8 weeks before your travel date.
          </p>
        </div>

        <h2>General FAQs</h2>

        <div className="faq-two-column-layout" style={{display: 'grid', gridTemplateColumns: '450px 1fr', gap: '60px', marginTop: '40px'}}>
          <div className="faq-left-image">
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=800&fit=crop" alt="Questions and Answers" />
          </div>
          
          <div className="faq-right-content">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    <h3>{faq.question}</h3>
                    <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="faq-contact-box">
          <h3>Still have questions?</h3>
          <p>Contact us at info@opticphotonsummit2026.com or use our contact form</p>
          <button 
            className="contact-button"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
