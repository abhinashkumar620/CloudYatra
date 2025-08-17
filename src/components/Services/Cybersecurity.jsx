import React from "react";
import "./Cybersecurity.css";
import "./CloudServices.css";
import Fortinet from '../Services/image/fortinet-partner.svg';
import Cisco from '../Services/image/cisco-partner.svg';

const Cybersecurity = () => {
  return (
    <>
      <div className="main-section">
        <div className="hero-section">
          <h2>Cybersecurity</h2>
          <p>
            Protect your digital assets with our advanced cybersecurity
            solutions. We offer comprehensive services to safeguard your
            business from evolving threats.
          </p>
        </div>
        <div className="Features-section">
          <h2>Key Features</h2>
        </div>
        <div className="box-contenert-part">
          <div className="features-box-contener">
            <div className="feature-box">
              <div className="icon-feature-box">
                <i class="ri-shield-keyhole-line"></i>
              </div>
              <h4>Firewall Solutions</h4>
              <p>
                Advanced firewall protection with next-generation security
                features and threat prevention..
              </p>
            </div>
            <div className="feature-box">
              <div className="icon-feature-box">
                <i class="ri-computer-line"></i>
              </div>
              <h4>Endpoint Protection</h4>
              <p>
                Comprehensive endpoint security with real-time threat detection
                and response.
              </p>
            </div>
            <div className="feature-box">
              <div className="icon-feature-box">
                <i class="ri-git-merge-fill"></i>
              </div>
              <h4>Network Security</h4>
              <p>
                Secure your network infrastructure with advanced threat
                detection and prevention.
              </p>
            </div>
            <div className="feature-box">
              <div className="icon-feature-box">
                <i class="ri-file-add-fill"></i>
              </div>
              <h4>Compliance Management</h4>
              <p>
                Ensure compliance with industry standards and regulations
                through our managed security services.
              </p>
            </div>
            <div className="feature-box">
              <div className="icon-feature-box">
                <i class="ri-server-fill"></i>
              </div>
              <h4>Security Assessment</h4>
              <p>
                Regular security assessments and vulnerability testing to
                identify and address potential risks.
              </p>
            </div>
            <div className="feature-box">
              <div className="icon-feature-box">
                <i class="ri-error-warning-line"></i>
              </div>
              <h4>Incident Response</h4>
              <p>
                24/7 security monitoring and rapid incident response to minimize
                security threats.
              </p>
            </div>
          </div>
        </div>
        <section className="cloud-partners-section">
              <h2 className="partners-title">Security Technology Partners</h2>
              <p className="partners-subtitle">
                Leveraging industry-leading technologies to deliver exceptional results
              </p>
        
              <div className="partners-container">
                <div className="partner-card">
                  <img src={Fortinet} alt="AWS Partner" className="partner-logo" />
                  <h4>Certified Partner</h4>
                  <h3>AWS</h3>
                  <p>Cloud infrastructure, serverless computing, and storage solutions</p>
                </div>
        
                <div className="partner-card">
                  <img src={Cisco} alt="Azure Partner" className="partner-logo" />
                  <h4>Gold Partner</h4>
                  <h3>Microsoft Azure</h3>
                  <p>Enterprise cloud services, AI/ML platforms, and hybrid solutions</p>
                </div>
              </div>
            </section>



      </div>
    </>
  );
};

export default Cybersecurity;
