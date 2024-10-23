import React from 'react';
import './ClientReviews.css';

const ClientReviews = () => {
  return (
    <section className="client-reviews">
      <h2 className="reviews-heading">Client Reviews</h2>
      <div className="review-card">
        <p>"Zidio Development helped us scale our infrastructure effortlessly!"</p>
      </div>
      <div className="review-card">
        <p>"Professional team and excellent service!"</p>
      </div>
      <div className="review-card">
        <p>"Their solutions are innovative and have greatly improved our business."</p>
      </div>
      <div className="review-card">
        <p>"The team is highly responsive and knowledgeable!"</p>
      </div>
    </section>
  );
};

export default ClientReviews;
