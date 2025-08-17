import React from 'react'
import './Partners.css'
import Aws from '../Services/image/aws-partner.svg'
import Azure from "../Services/image/azure-partner.svg";
import Forinet from '../Services/image/fortinet-partner.svg';
import Cisco from '../Services/image/cisco-partner.svg'

const Partners = () => {
  return (
 <>
 <section className="tech-partners">
      <h2 className="partners-title">Our Technology Partners</h2>
      <p className="partners-subtitle">We partner with the best to deliver cutting-edge solutions.</p>

      <div className="partners-grid">
        <div className="partner-box">
          <img src={Aws} alt="AWS" />
        </div>
        <div className="partner-box">
          <img src={Azure} alt="Azure" />
        </div>
        <div className="partner-box">
          <img src={Forinet} alt="Fortinet" />
        </div>
        <div className="partner-box">
          <img src={Cisco} alt="Cisco" />
        </div>
      </div>
    </section>
 </>
  )
}

export default Partners
