import React from 'react'
import './CloudServices.css';
import awsLogo from "../Services/image/aws-partner.svg";
import azureLogo from "../Services/image/azure-partner.svg";

const CloudServices = () => {
  return (
<>
<div className='CloudServices'>

   <div className='main-contener-box'>
    
  
   <header className='main-contener'>
   <div className='contener'>

    <h2>Cloud Services</h2>
    <p>Transform your business with our comprehensive cloud solutions. We help you migrate, optimize, and innovate in the cloud with confidence.</p>
   </div>
   </header>


   <div className='KeyFeatures'>
   <div className='KeyFeatures-text'>
    <h3>Key Features</h3>

   </div>


   </div>

  <div className="box-contenert-part">
      <div className="features-box-contener">
        <div className="feature-box">
          <div className='icon-feature-box'>
          <i class="ri-upload-cloud-line"></i>
          </div>
          <h4>Cloud Migration</h4>
          <p>Seamless migration of your applications and infrastructure to the cloud with minimal disruption.</p>
        </div>
        <div className="feature-box">
          <div className='icon-feature-box'>
          <i class="ri-guide-fill"></i>
          </div>
          <h4>Cloud Deployment</h4>
          <p>Expert deployment of cloud infrastructure and applications across AWS, Azure, and Google Cloud.</p>
        </div>
        <div className="feature-box">
          <div className='icon-feature-box'>
          <i class="ri-line-chart-line"></i>
          </div>
          <h4>Cloud Optimization</h4>
          <p>Optimize your cloud costs and performance with our proven methodologies and tools.</p>
        </div>
        <div className="feature-box">
          <div className='icon-feature-box'>
          <i class="ri-braces-fill"></i>
          </div>
          <h4>Cloud-Native Development</h4>
          <p>Build modern, scalable applications using cloud-native technologies and best practices.</p>
        </div>
        <div className="feature-box">
          <div className='icon-feature-box'>
          <i class="ri-cloud-fill"></i>
          </div>
          <h4>Multi-Cloud Management</h4>
          <p>Unified management and monitoring of your multi-cloud environment.</p>
        </div>
        <div className="feature-box">
          <div className='icon-feature-box'>
         <i class="ri-shield-keyhole-line"></i>
          </div>
          <h4>Cloud Security</h4>
          <p>Comprehensive security solutions to protect your cloud infrastructure and data.</p>
        </div>
        
      </div>
    </div>


<section className="cloud-partners-section">
      <h2 className="partners-title">Cloud Technology Partners</h2>
      <p className="partners-subtitle">
        Leveraging industry-leading technologies to deliver exceptional results
      </p>

      <div className="partners-container">
        <div className="partner-card">
          <img src={awsLogo} alt="AWS Partner" className="partner-logo" />
          <h4>Certified Partner</h4>
          <h3 id='Aws' >AWS</h3>
          <p>Cloud infrastructure, serverless computing, and storage solutions</p>
        </div>

        <div className="partner-card">
          <img src={azureLogo} alt="Azure Partner" className="partner-logo" />
          <h4>Gold Partner</h4>
          <h3 id='Azure' >Microsoft Azure</h3>
          <p>Enterprise cloud services, AI/ML platforms, and hybrid solutions</p>
        </div>
      </div>
    </section>








   </div>
</div>


</>
  )
}

export default CloudServices
