import React from 'react';
import './MeetTheTeam.css';

const MeetTheTeam = () => {
  return (
    <section className="meet-the-team">
      <h2>Meet the Team</h2>
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Meet Our Team"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default MeetTheTeam;
