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
