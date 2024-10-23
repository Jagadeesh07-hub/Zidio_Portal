import React from 'react';
import './Careers.css';

const Careers = () => {
  return (
    <section className="careers">
      <h2 className="careers-heading">Careers at Zidio</h2>
      <div className="job-card">
        <h3>Software Engineer</h3>
        <p>Location: Remote</p>
        <p>Description:We are looking for 4+ year Experienced software engineer with good technical knowledge.</p>
      </div>
      <div className="job-card">
        <h3>Product Manager</h3>
        <p>Location: San Francisco</p>
        <p>Description:We are looking for 8+ year Experienced Product Manager with good technical knowledge.</p>
      </div>
      <div className="job-card">
        <h3>UI/UX Designer</h3>
        <p>Location: New York</p>
        <p>Description:We are looking for 2+ year Experienced UI/UX Designer with good technical knowledge.</p>
      </div>
    </section>
  );
};

export default Careers;
