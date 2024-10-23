import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <section className="timeline">
      <h2 className="timeline-heading">Interactive Timeline</h2>
      <ul className="timeline-list">
        <li className="timeline-item">
          <div className="timeline-icon">🚀</div>
          <div className="timeline-content">
            <h3>2020</h3>
            <p>Founded</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-icon">💻</div>
          <div className="timeline-content">
            <h3>2021</h3>
            <p>Launched First Product</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-icon">📈</div>
          <div className="timeline-content">
            <h3>2022</h3>
            <p>Reached 1 Million Users</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-icon">🌍</div>
          <div className="timeline-content">
            <h3>2023</h3>
            <p>Expanded to Global Markets</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Timeline;
