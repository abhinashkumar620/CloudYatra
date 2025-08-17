import React from 'react';
import './Contact.css'; // Link the CSS file here

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="form-contact-page">
        <h2>Contact Us</h2>
        <form>
          <div>
            <label>Name *</label>
            <input type="text" />
          </div>

          <div>
            <label>Email *</label>
            <input type="text" />
          </div>

          <div>
            <label>Company</label>
            <input type="text" />
          </div>

          <div>
            <label>Service Interest</label>
            <select>
              <option value="">Select a Service</option>
              <option value="devops">DevOps</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="data-analytics">Data Analytics</option>
              <option value="custom">Custom/Other</option>
            </select>
          </div>

          <div>
            <label>Message</label>
            <textarea></textarea>
          </div>

          <button type="submit" className="form-submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
