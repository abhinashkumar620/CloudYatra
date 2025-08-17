import React from "react";
import "./Services/Resources.css";
import img from "./Services/image/infographic-cloud.svg";
import cyber from './Services/image/infographic-cloud.svg';
import devops from './Services/image/infographic-analytics.svg'
import clod from './Services/image/infographic-strategy.svg'
const Resources = () => {
  return (
    <>
      <div className="Resource-section">
        <div className="main-section-re">
          <div className="main-content-de">
            <h2>Resource Center</h2>
            <p>
              Explore our collection of guides, whitepapers, and case studies to
              help you navigate the world of cloud computing and cybersecurity.
            </p>
          </div>
        </div>
        <div className="Checklist">
          <div className="contener-chec">
            <h3>Free Cloud Migration Checklist</h3>
            <p>
              Download our comprehensive cloud migration checklist to ensure a
              smooth transition to the cloud. Includes 50+ essential
              checkpoints.
            </p>
            <div className="inpt-btn">
              <form action="">
                <input type="text" />
                <button>Checklist</button>
              </form>
            </div>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div className="Latest-Resources-section">
          <div className="Latest-box">
            <img src={cyber}alt="" />
            <h4>Cybersecurity Best Practices</h4>
            <p>
              Interactive guide covering Zero Trust Architecture, AI-powered
              defense, XDR implementation, and post-quantum cryptography
              preparation.
            </p>
            <button>View</button>
          </div>
          <div className="Latest-box">
            <img src={devops} alt="" />
            <h4>DevOps Best Practices</h4>
            <p>
              Comprehensive guide to modern DevOps implementation including
              CI/CD pipelines, Infrastructure as Code, automated testing,
              security integration, and monitoring strategies.
            </p>
            <button>View</button>
          </div>
          <div className="Latest-box">
            <img src={clod } alt="" />
            <h4>Cloud Architecture Patterns</h4>
            <p>
              Modern architectural patterns and design principles for
              cloud-native applications including microservices, serverless,
              event-driven architecture, and reliability patterns.
            </p>
            <button>View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
