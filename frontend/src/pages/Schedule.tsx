import React, { useState } from 'react';
import './Page.css';

const Schedule: React.FC = () => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (dayIndex: number) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };

  return (
    <div className="page-container schedule-page-bg">
      <h1>Conference Schedule</h1>
      <div className="content">
        <div className="schedule-hero-image">
          <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=500&fit=crop" alt="Conference Schedule" />
        </div>

        <p className="schedule-intro">November 16-18, 2026 | Amsterdam, Netherlands</p>
        
        <div className="expandable-days-container">
          {/* Day 1 */}
          <div className={`expandable-day-card ${expandedDay === 1 ? 'expanded' : ''}`}>
            <div className="expandable-day-header" onClick={() => toggleDay(1)}>
              <div className="day-title-section">
                <h3>Day 1 - November 16, 2026</h3>
              </div>
              <span className="expand-icon">{expandedDay === 1 ? '−' : '+'}</span>
            </div>
            {expandedDay === 1 && (
              <div className="expandable-day-content">
                <div className="schedule-item">
                  <span className="time">8:30 - 9:00</span>
                  <span className="program">Registration</span>
                </div>
                <div className="schedule-item">
                  <span className="time">9:00 - 9:30</span>
                  <span className="program">Conference Inauguration</span>
                </div>
                <div className="schedule-item">
                  <span className="time">9:30 - 11:00</span>
                  <span className="program">Plenary Sessions</span>
                </div>
                <div className="schedule-item">
                  <span className="time">11:00 - 11:20</span>
                  <span className="program">Tea/Coffee Break</span>
                </div>
                <div className="schedule-item">
                  <span className="time">11:20 - 13:00</span>
                  <span className="program">Plenary Sessions</span>
                </div>
                <div className="schedule-item">
                  <span className="time">13:00 - 13:50</span>
                  <span className="program">Group Photograph</span>
                </div>
                <div className="schedule-item">
                  <span className="time">13:50 - 14:00</span>
                  <span className="program">Lunch</span>
                </div>
                <div className="schedule-item">
                  <span className="time">14:00 - 15:40</span>
                  <span className="program">Keynote Sessions</span>
                </div>
                <div className="schedule-item">
                  <span className="time">15:40 - 16:00</span>
                  <span className="program">Tea/Coffee Break</span>
                </div>
              </div>
            )}
          </div>

          {/* Day 2 */}
          <div className={`expandable-day-card ${expandedDay === 2 ? 'expanded' : ''}`}>
            <div className="expandable-day-header" onClick={() => toggleDay(2)}>
              <div className="day-title-section">
                <h3>Day 2 - November 17, 2026</h3>
              </div>
              <span className="expand-icon">{expandedDay === 2 ? '−' : '+'}</span>
            </div>
            {expandedDay === 2 && (
              <div className="expandable-day-content">
                <div className="schedule-item">
                  <span className="time">9:00 - 10:30</span>
                  <span className="program">Keynote Sessions</span>
                </div>
                <div className="schedule-item">
                  <span className="time">10:30 - 10:50</span>
                  <span className="program">Tea/Coffee Break</span>
                </div>
                <div className="schedule-item">
                  <span className="time">10:50 - 13:00</span>
                  <span className="program">Parallel Sessions</span>
                </div>
                <div className="schedule-item">
                  <span className="time">13:00 - 14:00</span>
                  <span className="program">Lunch</span>
                </div>
                <div className="schedule-item">
                  <span className="time">14:00 - 15:30</span>
                  <span className="program">Workshop Sessions</span>
                </div>
                <div className="schedule-item">
                  <span className="time">15:30 - 15:50</span>
                  <span className="program">Tea/Coffee Break</span>
                </div>
                <div className="schedule-item">
                  <span className="time">15:50 - 17:30</span>
                  <span className="program">Poster Presentations</span>
                </div>
                <div className="schedule-item">
                  <span className="time">19:00 - 21:00</span>
                  <span className="program">Gala Dinner</span>
                </div>
              </div>
            )}
          </div>

          {/* Day 3 */}
          <div className={`expandable-day-card ${expandedDay === 3 ? 'expanded' : ''}`}>
            <div className="expandable-day-header" onClick={() => toggleDay(3)}>
              <div className="day-title-section">
                <h3>Day 3 - November 18, 2026</h3>
              </div>
              <span className="expand-icon">{expandedDay === 3 ? '−' : '+'}</span>
            </div>
            {expandedDay === 3 && (
              <div className="expandable-day-content">
                <div className="schedule-item">
                  <span className="time">9:00 - 10:30</span>
                  <span className="program">Plenary Sessions</span>
                </div>
                <div className="schedule-item">
                  <span className="time">10:30 - 10:50</span>
                  <span className="program">Tea/Coffee Break</span>
                </div>
                <div className="schedule-item">
                  <span className="time">10:50 - 12:30</span>
                  <span className="program">Panel Discussion</span>
                </div>
                <div className="schedule-item">
                  <span className="time">12:30 - 13:30</span>
                  <span className="program">Lunch</span>
                </div>
                <div className="schedule-item">
                  <span className="time">13:30 - 15:00</span>
                  <span className="program">Young Researchers Forum</span>
                </div>
                <div className="schedule-item">
                  <span className="time">15:00 - 15:20</span>
                  <span className="program">Tea/Coffee Break</span>
                </div>
                <div className="schedule-item">
                  <span className="time">15:20 - 16:30</span>
                  <span className="program">Awards & Closing Ceremony</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
