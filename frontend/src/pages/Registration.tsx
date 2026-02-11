import React, { useState } from 'react';
import './Page.css';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    affiliation: '',
    registrationType: 'Regular'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/api/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Success! Your confirmation code is: ${data.confirmationCode}`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          affiliation: '',
          registrationType: 'Regular'
        });
      } else {
        setMessage(`Error: ${data.message || 'Registration failed'}`);
      }
    } catch (error) {
      setMessage('Error: Unable to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container registration-page-bg">
      <h1>Registration</h1>
      <div className="content">
        <div className="registration-hero-image">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=500&fit=crop" alt="Conference Registration" />
        </div>

        <p className="event-banner">OPTICPHOTONSUMMIT2026 | November 16-18, 2026 | Amsterdam, Netherlands</p>
        
        <h2>Registration Fees</h2>
        <div className="pricing">
          <div className="price-card">
            <h3>Early Bird</h3>
            <p className="price">$299</p>
            <p>Until March 31, 2026</p>
            <ul className="price-features">
              <li>✓ All sessions access</li>
              <li>✓ Conference materials</li>
              <li>✓ Lunch included</li>
            </ul>
          </div>
          <div className="price-card featured">
            <div className="badge">POPULAR</div>
            <h3>Regular</h3>
            <p className="price">$399</p>
            <p>Until May 31, 2026</p>
            <ul className="price-features">
              <li>✓ All sessions access</li>
              <li>✓ Conference materials</li>
              <li>✓ Lunch included</li>
            </ul>
          </div>
          <div className="price-card">
            <h3>Student</h3>
            <p className="price">$199</p>
            <p>With valid student ID</p>
            <ul className="price-features">
              <li>✓ All sessions access</li>
              <li>✓ Conference materials</li>
              <li>✓ Lunch included</li>
            </ul>
          </div>
        </div>
        
        <h2>Register Now</h2>
        {message && (
          <div style={{
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '10px',
            background: message.includes('Success') ? '#d4edda' : '#f8d7da',
            color: message.includes('Success') ? '#155724' : '#721c24',
            border: `1px solid ${message.includes('Success') ? '#c3e6cb' : '#f5c6cb'}`
          }}>
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="affiliation"
              placeholder="Organization/University *"
              value={formData.affiliation}
              onChange={handleChange}
              required
            />
          </div>
          <select
            name="registrationType"
            value={formData.registrationType}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '1rem',
              fontFamily: 'inherit'
            }}
          >
            <option value="Early Bird">Early Bird - $299</option>
            <option value="Regular">Regular - $399</option>
            <option value="Student">Student - $199</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Complete Registration'}
          </button>
        </form>
        
        <h2>What's Included</h2>
        <div className="included-grid">
          <div className={`included-item ${expandedCard === 0 ? 'expanded' : ''}`} onClick={() => toggleCard(0)}>
            <div className="included-image">
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop" alt="Conference Sessions" />
            </div>
            <h4>All Sessions & Workshops</h4>
            {expandedCard === 0 && <p>Full access to keynotes, technical sessions, and workshops</p>}
          </div>
          <div className={`included-item ${expandedCard === 1 ? 'expanded' : ''}`} onClick={() => toggleCard(1)}>
            <div className="included-image">
              <img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=400&h=250&fit=crop" alt="Conference Materials" />
            </div>
            <h4>Conference Materials</h4>
            {expandedCard === 1 && <p>Digital proceedings and presentation materials</p>}
          </div>
          <div className={`included-item ${expandedCard === 2 ? 'expanded' : ''}`} onClick={() => toggleCard(2)}>
            <div className="included-image">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop" alt="Meals and Refreshments" />
            </div>
            <h4>Meals & Refreshments</h4>
            {expandedCard === 2 && <p>Lunch, coffee breaks, and networking reception</p>}
          </div>
          <div className={`included-item ${expandedCard === 3 ? 'expanded' : ''}`} onClick={() => toggleCard(3)}>
            <div className="included-image">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=250&fit=crop" alt="Networking Events" />
            </div>
            <h4>Networking Events</h4>
            {expandedCard === 3 && <p>Connect with peers and industry leaders</p>}
          </div>
          <div className={`included-item ${expandedCard === 4 ? 'expanded' : ''}`} onClick={() => toggleCard(4)}>
            <div className="included-image">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop" alt="Certificate" />
            </div>
            <h4>Certificate</h4>
            {expandedCard === 4 && <p>Official certificate of attendance</p>}
          </div>
          <div className={`included-item ${expandedCard === 5 ? 'expanded' : ''}`} onClick={() => toggleCard(5)}>
            <div className="included-image">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop" alt="Photo Opportunities" />
            </div>
            <h4>Photo Opportunities</h4>
            {expandedCard === 5 && <p>Professional photography and group photos</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
