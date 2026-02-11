import React, { useState } from 'react';
import './Page.css';

const Program: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);

  return (
    <div className="page-container schedule-page-bg">
      <h1>Conference Program</h1>
      <div className="content">
        <p className="schedule-intro">November 16-18, 2026 | Amsterdam, Netherlands</p>
        
        {/* Day Tabs */}
        <div className="program-tabs">
          <button 
            className={`program-tab ${activeDay === 1 ? 'active' : ''}`}
            onClick={() => setActiveDay(1)}
          >
            DAY 01
          </button>
          <button 
            className={`program-tab ${activeDay === 2 ? 'active' : ''}`}
            onClick={() => setActiveDay(2)}
          >
            DAY 02
          </button>
          <button 
            className={`program-tab ${activeDay === 3 ? 'active' : ''}`}
            onClick={() => setActiveDay(3)}
          >
            DAY 03
          </button>
        </div>

        {/* Day 1 Schedule */}
        {activeDay === 1 && (
          <div className="program-table-container">
            <table className="program-table">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>PROGRAM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>8:30 - 9:00</td>
                  <td>Registration</td>
                </tr>
                <tr>
                  <td>9:00 - 9:30</td>
                  <td>Conference Inauguration</td>
                </tr>
                <tr>
                  <td>9:30 - 11:00</td>
                  <td>Plenary Sessions</td>
                </tr>
                <tr>
                  <td>11:00 - 11:20</td>
                  <td>Tea/Coffee Break</td>
                </tr>
                <tr>
                  <td>11:20 - 13:00</td>
                  <td>Plenary Sessions</td>
                </tr>
                <tr>
                  <td>13:00 - 13:50</td>
                  <td>Group Photograph</td>
                </tr>
                <tr>
                  <td>13:50 - 14:00</td>
                  <td>Lunch</td>
                </tr>
                <tr>
                  <td>14:00 - 15:40</td>
                  <td>Keynote Sessions</td>
                </tr>
                <tr>
                  <td>15:40 - 16:00</td>
                  <td>Tea/Coffee Break</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Day 2 Schedule */}
        {activeDay === 2 && (
          <div className="program-table-container">
            <table className="program-table">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>PROGRAM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9:00 - 10:30</td>
                  <td>Keynote Sessions</td>
                </tr>
                <tr>
                  <td>10:30 - 10:50</td>
                  <td>Tea/Coffee Break</td>
                </tr>
                <tr>
                  <td>10:50 - 13:00</td>
                  <td>Parallel Sessions</td>
                </tr>
                <tr>
                  <td>13:00 - 14:00</td>
                  <td>Lunch</td>
                </tr>
                <tr>
                  <td>14:00 - 15:30</td>
                  <td>Workshop Sessions</td>
                </tr>
                <tr>
                  <td>15:30 - 15:50</td>
                  <td>Tea/Coffee Break</td>
                </tr>
                <tr>
                  <td>15:50 - 17:30</td>
                  <td>Poster Presentations</td>
                </tr>
                <tr>
                  <td>19:00 - 21:00</td>
                  <td>Gala Dinner</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Day 3 Schedule */}
        {activeDay === 3 && (
          <div className="program-table-container">
            <table className="program-table">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>PROGRAM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9:00 - 10:30</td>
                  <td>Plenary Sessions</td>
                </tr>
                <tr>
                  <td>10:30 - 10:50</td>
                  <td>Tea/Coffee Break</td>
                </tr>
                <tr>
                  <td>10:50 - 12:30</td>
                  <td>Panel Discussion</td>
                </tr>
                <tr>
                  <td>12:30 - 13:30</td>
                  <td>Lunch</td>
                </tr>
                <tr>
                  <td>13:30 - 15:00</td>
                  <td>Young Researchers Forum</td>
                </tr>
                <tr>
                  <td>15:00 - 15:20</td>
                  <td>Tea/Coffee Break</td>
                </tr>
                <tr>
                  <td>15:20 - 16:30</td>
                  <td>Awards & Closing Ceremony</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Program;
