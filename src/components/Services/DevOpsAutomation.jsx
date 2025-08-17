import React from 'react'
import './DevOpsAutomation.css'
import Discovery from '../Services/image/infographic-consultation.svg';
import Pipeline from '../Services/image/infographic-devops.svg';
import Testing from '../Services/image/infographic-implementation.svg'
import Deployment  from '../Services/image/infographic-optimization.svg'
const DevOpsAutomation = () => {
  return (
  <>
   <div className="main-contener-dev">
   <div className="dev-content">
    <h3>DevOps & Automation</h3>
    <p>Accelerate your software delivery with our comprehensive DevOps and automation solutions. We help you build robust CI/CD pipelines, implement infrastructure as code, and create automated workflows that reduce deployment time and increase reliability.</p>
   </div>
   <div className="dev-box-contener">
  <h3>Our DevOps Implementation Lifecycle</h3>
  <div className="box-section">
    <div className="box-content">
      <img src={Discovery } alt="icon" />
      <h4>Discovery & Planning</h4>
      <p>Assess current workflows and define automation goals.</p>
    </div>
    <div className="box-content">
      <img src={Pipeline} alt="icon" />
      <h4>Pipeline Construction</h4>
      <p>Build and configure CI/CD pipelines and IaC scripts.</p>
    </div>
    <div className="box-content">
      <img src={Testing} alt="icon" />
      <h4>Testing & Integration</h4>
      <p>Integrate automated testing and security scanning.</p>
    </div>
    <div className="box-content">
      <img src={ Deployment } alt="icon" />
      <h4>Deployment & Optimization</h4>
      <p>Automate deployment and continuously monitor performance.</p>
    </div>
  </div>
</div>
   <div className="About-DevOps dev-content">
  <h3>About DevOps & Automation</h3>
  <p>CloudYatra's DevOps & Automation services accelerate your software delivery and innovation. We bridge the gap between development and operations, enabling faster releases, higher quality, and greater agility.</p>
  <p>Our team builds robust CI/CD pipelines, automates infrastructure, and integrates testing and monitoring—empowering your teams to deliver value quickly and reliably in a fast-changing digital world.</p>
   </div>
   </div>
  </>
  )
}

export default DevOpsAutomation
