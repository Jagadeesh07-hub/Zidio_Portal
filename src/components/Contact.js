import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">
        Have any questions? We'd love to hear from you!
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message"></textarea>
        </div>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
