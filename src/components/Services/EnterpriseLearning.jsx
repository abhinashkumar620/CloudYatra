import React from "react";
import "./EnterpriseLearning.css";

const EnterpriseLearning = () => {
  return (
    <div className="enterprise-wrapper">

    <div className="wrapper-contenter-box">

    
      <div className="enterprise-header">
        <h2>Empower Your Teams with Enterprise Learning</h2>
        <p>
          Upskill your workforce with hands-on, expert-led IT training
          tailored for modern enterprises. Transform knowledge into
          business value with CloudYatra.
        </p>
      </div>

      <div className="form-section">
        <h3>Share your training requirement</h3>
        <form>
          <div className="form-group">
            <label>Learning Type</label>
            <select>
              <option>Select a Learning type</option>
              <option>Cloud Fundamentals</option>
              <option>DevOps</option>
              <option>Cybersecurity</option>
              <option>Data Analytics</option>
              <option>AI & ML</option>
              <option>Custom/Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Training Requirement *</label>
            <textarea></textarea>
          </div>

          <button type="submit" className="btn-submit">Contact Us</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default EnterpriseLearning;
