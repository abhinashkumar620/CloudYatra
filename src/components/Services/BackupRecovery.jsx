import React from 'react'
import './BackupRecovery.css'
import Monitoring from '../Services/image/infographic-optimization.svg'
import Implementation from '../Services/image/infographic-implementation.svg'
import Strategy from '../Services/image/infographic-strategy.svg'
import Assessment from '../Services/image/infographic-consultation.svg' 
const BackupRecovery = () => {
  return (
 <>
 <div className="main-content">
  <div className="main-content-text-Backup">
          <h2>Backup & Disaster Recovery</h2>
          <p>
            Protect your critical business data and ensure business continuity with our comprehensive backup and disaster recovery solutions. We design and implement robust strategies that minimize downtime and data loss in any scenario.
          </p>
   </div>
   <div className="Features-section-Backup">
          <h2>Key Features</h2>
    </div>
    <div className="content-Recovery-Process">
     <h2>Our Backup & Recovery Process</h2>
    </div>
    <div className="box-section-Backup">
        <div className="box-content-Backup">
          <img src={Assessment } alt="icon" />
          <h4>Assessment</h4>
          <p>Analyze current data protection needs and vulnerabilities</p>
        </div>
        <div className="box-content-Backup">
          <img src={Strategy} alt="icon" />
          <h4>Strategy</h4>
          <p>Design comprehensive backup and disaster recovery plan</p>
        </div>
        <div className="box-content-Backup">
          <img src={Implementation} alt="icon" />
          <h4>Implementation</h4>
          <p>Deploy automated backup solutions and recovery systems</p>
        </div>
        <div className="box-content-Backup">
          <img src={  Monitoring } alt="icon" />
          <h4>Monitoring</h4>
          <p>Continuous monitoring and regular recovery testing</p>
        </div>
      </div>
      <div className="Recovery-Partners">
        <h2>Backup & Recovery Partners</h2>
        <p>Leveraging industry-leading technologies to deliver exceptional results</p>
      </div>
  



 </div>
 </>
  )
}

export default BackupRecovery
