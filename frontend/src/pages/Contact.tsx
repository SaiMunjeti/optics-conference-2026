import React, { useState } from 'react';
import './Page.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage('Success! Your message has been sent. We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: ''
        });
      } else {
        setResponseMessage(`Error: ${data.message || 'Failed to send message'}`);
      }
    } catch (error) {
      setResponseMessage('Error: Unable to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container contact-page-bg">
      <h1>Contact Us</h1>
      <div className="content">
        <div className="contact-hero-image">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=500&fit=crop" alt="Contact Us" />
        </div>

        <p className="intro-text">
          Have questions about OPTICPHOTONSUMMIT2026? We'd love to hear from you.
        </p>
          
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon-image">
                <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop" alt="Email Communication" />
              </div>
              <h3>Email Address</h3>
              <p>info@opticphotonsummit2026.com</p>
              <p>support@opticphotonsummit2026.com</p>
            </div>
            
            <div className="info-item">
              <div className="info-icon-image">
                <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop" alt="Event Code" />
              </div>
              <h3>Event Code</h3>
              <p>OPTICPHOTONSUMMIT2026</p>
            </div>
            
            <div className="info-item">
              <div className="info-icon-image">
                <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&h=250&fit=crop" alt="Amsterdam Venue" />
              </div>
              <h3>Venue Location</h3>
              <p>Amsterdam Convention Center<br/>
              Amsterdam<br/>
              Netherlands</p>
            </div>
            
            <div className="info-item">
              <div className="info-icon-image">
                <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop" alt="Conference Dates" />
              </div>
              <h3>Conference Dates</h3>
              <p>November 16-18, 2026</p>
              <p className="days-info">3 Days Conference</p>
            </div>
          </div>
          
          <h2>Send us a Message</h2>
          {responseMessage && (
            <div style={{
              padding: '15px',
              marginBottom: '20px',
              borderRadius: '10px',
              background: responseMessage.includes('Success') ? '#d4edda' : '#f8d7da',
              color: responseMessage.includes('Success') ? '#155724' : '#721c24',
              border: `1px solid ${responseMessage.includes('Success') ? '#c3e6cb' : '#f5c6cb'}`
            }}>
              {responseMessage}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message *"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
    </div>
  );
};

export default Contact;
