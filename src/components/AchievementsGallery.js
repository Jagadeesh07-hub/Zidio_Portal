import React from 'react';
import './AchievementsGallery.css';

const AchievementsGallery = () => {
  return (
    <section className="achievements-gallery">
      <h2 className="achievements-heading">Achievements</h2>
      <div className="achievement-card">
        <img src="https://via.placeholder.com/300" alt="Award" />
        <h3>Best Innovation Award</h3>
      </div>
      <div className="achievement-card">
        <img src="https://via.placeholder.com/300" alt="Award" />
        <h3>Excellence in Service Award</h3>
      </div>
      <div className="achievement-card">
        <img src="https://via.placeholder.com/300" alt="Award" />
        <h3>Top Developer Award</h3>
      </div>
      <div className="achievement-card">
        <img src="https://via.placeholder.com/300" alt="Award" />
        <h3>Best Startup Award</h3>
      </div>
    </section>
  );
};

export default AchievementsGallery;
