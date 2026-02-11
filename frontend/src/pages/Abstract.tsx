import React from 'react';
import './Page.css';

const Abstract: React.FC = () => {
  return (
    <div className="page-container abstract-page-bg">
      <h1>Abstract Submission</h1>
      <div className="content">
        <p className="abstract-intro">
          We invite researchers, academicians, and industry professionals to submit abstracts for 
          oral and poster presentations at OPTICPHOTONSUMMIT2026.
        </p>

        <div className="abstract-section">
          <h2>Important Dates</h2>
          <div className="dates-grid">
            <div className="date-card">
              <div className="date-icon">📝</div>
              <h3>Abstract Submission Opens</h3>
              <p className="date-value">March 1, 2026</p>
            </div>
            <div className="date-card">
              <div className="date-icon">⏰</div>
              <h3>Abstract Submission Deadline</h3>
              <p className="date-value">August 31, 2026</p>
            </div>
            <div className="date-card">
              <div className="date-icon">✅</div>
              <h3>Acceptance Notification</h3>
              <p className="date-value">September 30, 2026</p>
            </div>
            <div className="date-card">
              <div className="date-icon">📄</div>
              <h3>Full Paper Submission</h3>
              <p className="date-value">October 31, 2026</p>
            </div>
          </div>
        </div>

        <div className="abstract-section">
          <h2>Submission Guidelines</h2>
          <div className="guidelines-container">
            <div className="guideline-item">
              <h3>1. Abstract Format</h3>
              <ul>
                <li>Maximum 300 words</li>
                <li>Title should be concise and descriptive</li>
                <li>Include author names and affiliations</li>
                <li>Clearly state objectives, methods, results, and conclusions</li>
              </ul>
            </div>
            <div className="guideline-item">
              <h3>2. File Requirements</h3>
              <ul>
                <li>Format: Microsoft Word (.doc/.docx) or PDF</li>
                <li>Font: Times New Roman, 12pt</li>
                <li>Line spacing: Single</li>
                <li>Margins: 1 inch on all sides</li>
              </ul>
            </div>
            <div className="guideline-item">
              <h3>3. Topics of Interest</h3>
              <ul>
                <li>Quantum Optics and Photonics</li>
                <li>Biophotonics and Medical Applications</li>
                <li>Optical Communications</li>
                <li>Nanophotonics and Metamaterials</li>
                <li>Laser Technology and Applications</li>
                <li>Photonic Materials and Devices</li>
              </ul>
            </div>
            <div className="guideline-item">
              <h3>4. Review Process</h3>
              <ul>
                <li>All abstracts will be peer-reviewed</li>
                <li>Review based on originality, relevance, and quality</li>
                <li>Authors will be notified within 4 weeks</li>
                <li>Accepted abstracts will be published in proceedings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="abstract-section">
          <h2>Presentation Types</h2>
          <div className="presentation-types">
            <div className="presentation-card">
              <div className="presentation-icon">🎤</div>
              <h3>Oral Presentation</h3>
              <p>15-minute presentation followed by 5-minute Q&A session</p>
              <ul>
                <li>Plenary sessions</li>
                <li>Parallel technical sessions</li>
                <li>Young researchers forum</li>
              </ul>
            </div>
            <div className="presentation-card">
              <div className="presentation-icon">📊</div>
              <h3>Poster Presentation</h3>
              <p>Display your research in dedicated poster sessions</p>
              <ul>
                <li>Poster size: A0 (841 × 1189 mm)</li>
                <li>2-hour interactive session</li>
                <li>Best poster awards</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="abstract-section">
          <h2>Submit Your Abstract</h2>
          <div className="submission-form-container">
            <form className="abstract-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" placeholder="Enter first name" required />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" placeholder="Enter last name" required />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="Enter email address" required />
              </div>
              
              <div className="form-group">
                <label>Affiliation *</label>
                <input type="text" placeholder="University/Organization" required />
              </div>
              
              <div className="form-group">
                <label>Abstract Title *</label>
                <input type="text" placeholder="Enter abstract title" required />
              </div>
              
              <div className="form-group">
                <label>Topic Area *</label>
                <select required>
                  <option value="">Select topic area</option>
                  <option>Quantum Optics and Photonics</option>
                  <option>Biophotonics and Medical Applications</option>
                  <option>Optical Communications</option>
                  <option>Nanophotonics</option>
                  <option>Laser Technology</option>
                  <option>Photonic Materials</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Presentation Type *</label>
                <select required>
                  <option value="">Select presentation type</option>
                  <option>Oral Presentation</option>
                  <option>Poster Presentation</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Abstract (Max 300 words) *</label>
                <textarea rows={8} placeholder="Enter your abstract here..." required></textarea>
              </div>
              
              <div className="form-group">
                <label>Upload Abstract File</label>
                <input type="file" accept=".doc,.docx,.pdf" />
                <small>Accepted formats: .doc, .docx, .pdf (Max 5MB)</small>
              </div>
              
              <button type="submit" className="submit-btn">Submit Abstract</button>
            </form>
          </div>
        </div>

        <div className="abstract-contact">
          <h2>Questions About Submission?</h2>
          <p>Contact our scientific committee at: <strong>abstracts@opticphotonsummit2026.com</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Abstract;
