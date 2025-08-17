import React from 'react'
import Fortinet from '../Services/image/fortinet-partner.svg';
import Azure from '../Services/image/azure-partner.svg';
import Aws from '../Services/image/aws-partner.svg'
import Cisco from '../Services/image/cisco-partner.svg'

import Partners from './Partners';
const ManagedServices = () => {
  return (
  
    <>
    <div className="main-section">
            <div className="hero-section">
              <h2>Managed Services</h2>
              <p>
                Focus on your core business while we manage your IT infrastructure. Our managed services ensure reliability, security, and performance.
              </p>
            </div>
            <div className="Features-section">
              <h2>Key Features</h2>
            </div>
            <div className="box-contenert-part">
              <div className="features-box-contener">
                <div className="feature-box">
                  <div className="icon-feature-box">
                  <i class="ri-numbers-line"></i>
                  </div>
                  <h4>24/7 Monitoring</h4>
                  <p>
                    Round-the-clock monitoring of your infrastructure to ensure optimal performance and availability.
                 </p>
                </div>
                <div className="feature-box">
                  <div className="icon-feature-box">
                    <i class="ri-computer-line"></i>
                  </div>
                  <h4>Incident Management</h4>
                  <p>
                   Quick response and resolution of IT incidents to minimize business disruption.
                  </p>
                </div>
                <div className="feature-box">
                  <div className="icon-feature-box">
                    <i class="ri-ram-2-line"></i>
                  </div>
                  <h4>Infrastructure Support</h4>
                  <p>
                   Comprehensive support for your entire IT infrastructure, from servers to networks.
                  </p>
                </div>
                <div className="feature-box">
                  <div className="icon-feature-box">
                    <i class="ri-square-root"></i>
                  </div>
                  <h4>Cloud Governance</h4>
                  <p>
                   Effective management of cloud resources with proper policies and controls.
                  </p>
                </div>
                <div className="feature-box">
                  <div className="icon-feature-box">
                   <i class="ri-line-chart-line"></i>
                  </div>
                  <h4>Performance Optimization</h4>
                  <p>
                    Continuous optimization of your IT infrastructure for better performance and cost efficiency.
                  </p>
                </div>
                <div className="feature-box">
                  <div className="icon-feature-box">
                    <i class="ri-arrow-down-box-fill"></i>
                  </div>
                  <h4>Backup & Recovery</h4>
                  <p>
                   Regular backups and disaster recovery planning to protect your business data.
                  </p>
                </div>
              </div>
            </div>

                <div style={{width:'100vw'}}>
                  <Partners />

                </div>
    
    
          </div>
      
    </>
  )
}

export default ManagedServices
