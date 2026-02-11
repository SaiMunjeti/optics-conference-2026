import React, { useState } from 'react';
import './Page.css';

const Registration: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [accompanyingPerson, setAccompanyingPerson] = useState(false);
  const [accommodation, setAccommodation] = useState('');
  const [nights, setNights] = useState('');

  const pricingData = {
    'Speaker': { earlyBird: 749, standard: 849, onSpot: 949 },
    'Poster': { earlyBird: 449, standard: 549, onSpot: 649 },
    'Delegate': { earlyBird: 899, standard: 999, onSpot: 1099 },
    'Student': { earlyBird: 299, standard: 399, onSpot: 499 },
    'e-Poster': { earlyBird: 149, standard: 199, onSpot: 249 }
  };

  const accommodationPricing = {
    '2 Nights': { single: 360, double: 400, triple: 440 },
    '3 Nights': { single: 540, double: 600, triple: 660 },
    '4 Nights': { single: 720, double: 800, triple: 880 }
  };

  const calculateTotal = () => {
    let total = 0;
    
    if (selectedCategory && selectedPeriod) {
      const category = selectedCategory as keyof typeof pricingData;
      const period = selectedPeriod as keyof typeof pricingData['Speaker'];
      total += pricingData[category][period];
    }
    
    if (accompanyingPerson) {
      total += 249;
    }
    
    if (accommodation && nights) {
      const nightKey = nights as keyof typeof accommodationPricing;
      const roomType = accommodation as keyof typeof accommodationPricing['2 Nights'];
      total += accommodationPricing[nightKey][roomType];
    }
    
    return total;
  };

  return (
    <div className="page-container registration-page-bg">
      <h1>Registration</h1>
      <div className="content">
<p className="event-banner">OPTICPHOTONSUMMIT2026 | November 16-18, 2026 | Amsterdam, Netherlands</p>
        
        <div className="pricing-table-section">
          <h2>Registration Fees</h2>
          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>
                    <div className="deadline-header">Early Bird</div>
                    <div className="deadline-date">February 15, 2026</div>
                  </th>
                  <th>
                    <div className="deadline-header">Standard</div>
                    <div className="deadline-date">April 15, 2026</div>
                  </th>
                  <th>
                    <div className="deadline-header">On Spot</div>
                    <div className="deadline-date">August 10, 2026</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="category-cell">Speaker</td>
                  <td className="price-cell">$749</td>
                  <td className="price-cell">$849</td>
                  <td className="price-cell">$949</td>
                </tr>
                <tr>
                  <td className="category-cell">Poster</td>
                  <td className="price-cell">$449</td>
                  <td className="price-cell">$549</td>
                  <td className="price-cell">$649</td>
                </tr>
                <tr>
                  <td className="category-cell">Delegate</td>
                  <td className="price-cell">$899</td>
                  <td className="price-cell">$999</td>
                  <td className="price-cell">$1099</td>
                </tr>
                <tr>
                  <td className="category-cell">Student</td>
                  <td className="price-cell">$299</td>
                  <td className="price-cell">$399</td>
                  <td className="price-cell">$499</td>
                </tr>
                <tr>
                  <td className="category-cell">e-Poster</td>
                  <td className="price-cell">$149</td>
                  <td className="price-cell">$199</td>
                  <td className="price-cell">$249</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="registration-form-section">
          <h2>Complete Your Registration</h2>
          
          <div className="form-section">
            <h3>Select Registration Category</h3>
            <div className="radio-group">
              {Object.keys(pricingData).map((category) => (
                <label key={category} className="radio-label">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Select Registration Period</h3>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="period"
                  value="earlyBird"
                  checked={selectedPeriod === 'earlyBird'}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                />
                <span>Early Bird (Before Feb 15, 2026)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="period"
                  value="standard"
                  checked={selectedPeriod === 'standard'}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                />
                <span>Standard (Before Apr 15, 2026)</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="period"
                  value="onSpot"
                  checked={selectedPeriod === 'onSpot'}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                />
                <span>On Spot (After Apr 15, 2026)</span>
              </label>
            </div>
          </div>

          <div className="form-section">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={accompanyingPerson}
                onChange={(e) => setAccompanyingPerson(e.target.checked)}
              />
              <span>Include Accompanying Person ($249 Extra)</span>
            </label>
          </div>

          <div className="form-section">
            <h3>Accommodation (Optional)</h3>
            <div className="accommodation-grid">
              <div>
                <label>Room Type:</label>
                <select value={accommodation} onChange={(e) => setAccommodation(e.target.value)}>
                  <option value="">Select Room Type</option>
                  <option value="single">Single Occupancy</option>
                  <option value="double">Double Occupancy</option>
                  <option value="triple">Triple Occupancy</option>
                </select>
              </div>
              <div>
                <label>Number of Nights:</label>
                <select value={nights} onChange={(e) => setNights(e.target.value)}>
                  <option value="">Select Nights</option>
                  <option value="2 Nights">2 Nights</option>
                  <option value="3 Nights">3 Nights</option>
                  <option value="4 Nights">4 Nights</option>
                </select>
              </div>
            </div>
            
            {accommodation && nights && (
              <div className="accommodation-price">
                Accommodation Cost: ${accommodationPricing[nights as keyof typeof accommodationPricing][accommodation as keyof typeof accommodationPricing['2 Nights']]}
              </div>
            )}
          </div>

          <div className="total-section">
            <h2>Total Payment: ${calculateTotal()}</h2>
          </div>

          <form className="contact-form">
            <h3>Personal Information</h3>
            <div className="form-row">
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email Address *" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone Number *" required />
              <input type="text" placeholder="Organization/University *" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Country *" required />
              <input type="text" placeholder="City *" required />
            </div>
            <textarea rows={4} placeholder="Special Requirements (Optional)"></textarea>
            <button type="submit" className="submit-registration-btn">
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;


