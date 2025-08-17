import React from 'react'
import './Home.css'
import HeroImg from './Services/image/cyber-brain-7633488_1280.jpg'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import About from './About'
import CloudServices from './Services/CloudServices';
import Cybersecurity from './Services/Cybersecurity';
import Partners from './Services/Partners';
import DevOpsAutomation from './Services/DevOpsAutomation';
import DataAnalytics from './Services/DataAnalytics';
const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.5   
  })
  return (
    <>
    <div className='home-part-section'>

    <div className='home-contener-box'>
     <section className="hero">
   
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Transform Your Business <br />
            with <span>Enterprise Cloud Excellence</span>
          </h1>
          <p>
            CloudYatra delivers enterprise-grade cloud consulting with AWS,
            Azure & GCP certified architects. Trusted by 100+ organizations to
            reduce cloud costs by up to <strong>50%</strong> while ensuring{" "}
            <strong>99.9%</strong> uptime with our proven methodology.
          </p>

              
          <div className="hero-buttons">
            {/* <button className="btn-primary">Get Free Consultation</button> */}
            <button className="btn-outline">Our Services</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={HeroImg} alt="CloudYatra visual" />
        </div>
      </div>
      <div className="hero-stats" ref={ref}>
      <div className="stat-box">
        <h3>
        <div>
          <i class="ri-user-3-line"></i>
        </div>
          {inView && <CountUp end={100} duration={2} suffix="+" />}
        </h3>
        <p>Enterprise Clients</p>
      </div>
      <div className="stat-box">
        <h3>
        <div>
          <i class="ri-service-line"></i>
        </div>
          {inView && <CountUp end={99.9} duration={2} decimals={1} suffix="%" />}
        </h3>
        <p>SLA Guarantee</p>
      </div>
      <div className="stat-box">
        <h3>
        <div>
          <i class="ri-shield-keyhole-line"></i>
        </div>
          {inView && <CountUp end={30} duration={2} suffix="+" />}
        </h3>
        <p>Cloud Certifications</p>
      </div>
     </div>
     
      
    </section>
 </div>






    <section>
    <About/>
    </section>
    <section>
      <CloudServices/>
    </section>
    <section>
      <Partners/>
    </section>


    <section>
      <DevOpsAutomation/>
    </section>
    <section>
      <DataAnalytics/>
    </section>

    
   </div>



    </>
  )
}

export default Home
