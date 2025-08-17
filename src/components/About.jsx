import React from 'react';
import './About.css';

const About = () => {

  const journeyData = [
    {
      year: "2023",
      title: "Founded CloudYatra",
      desc: "Started with a vision to simplify cloud adoption for businesses, focusing on secure and scalable solutions.",
    },
    {
      year: "2023",
      title: "First Major Clients",
      desc: "Secured our first enterprise clients, implementing full-scale cloud migrations with zero downtime.",
    },
    {
      year: "2024",
      title: "Expanded Services",
      desc: "Introduced comprehensive cybersecurity and managed services to provide end-to-end IT solutions.",
    },
    {
      year: "2024",
      title: "Strategic Partnerships",
      desc: "Formed alliances with AWS, Microsoft Azure, and Cisco, enhancing our service capabilities and certifications.",
    },
    {
      year: "2025",
      title: "Global Growth",
      desc: "Expanding operations to serve clients across multiple regions, achieving 100+ cloud certifications and 30+ satisfied clients.",
    },
  ];
  return (
    <>
    <div className='contener-section-about'>

      <div className="About-first-contener">
        <h2>About CloudYatra</h2>
        <p>
          At CloudYatra, we empower businesses with secure, scalable, and future-ready IT solutions...
        </p>
      </div>

      <div className="About-sec-contener">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            <div className="box">
              <div className='icon-About'>
              <i class="ri-tent-line"></i>
              </div>
              <h3>Innovation</h3>
              <p>We stay ahead of technological trends to deliver cutting-edge solutions.</p>
            </div>
            <div className="box">
              <div className='icon-About'>
             <i class="ri-line-chart-line"></i>
              </div>
            
              <h3>Excellence</h3>
              <p>We strive for excellence in every service we provide to our clients.</p>
            </div>
            <div className="box">
             <div className='icon-About'>
              <i class="ri-team-fill"></i>
              </div>
              <h3>Trust</h3>
              <p>We build long-term partnerships based on trust and transparency.</p>
            </div>
            <div className="box">
              <div className='icon-About'>
              <i class="ri-key-fill"></i>
              </div>
              <h3>Security</h3>
              <p>We prioritize the security and protection of our clients' assets.</p>
            </div>

            {/* Duplicate for smooth infinite loop */}
            <div className="box">
             <div className='icon-About'>
              <i class="ri-tent-line"></i>
              </div>
              <h3>Innovation</h3>
              <p>We stay ahead of technological trends to deliver cutting-edge solutions.</p>
            </div>
            <div className="box">
             <div className='icon-About'>
              <i class="ri-line-chart-line"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every service we provide to our clients.</p>
            </div>
            <div className="box">
              <div className='icon-About'>
              <i class="ri-team-fill"></i>
              </div>
              <h3>Trust</h3>
              <p>We build long-term partnerships based on trust and transparency.</p>
            </div>
            <div className="box">
             <div className='icon-About'>
              <i class="ri-key-fill"></i>
              </div>
              <h3>Security</h3>
              <p>We prioritize the security and protection of our clients' assets.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='OurJourney' >
      <div className="journey-section">
      <h2>Our Journey</h2>
      <p className="journey-subtitle">
        How we became a trusted name in cloud and cybersecurity solutions
      </p>
      <div className="timeline">
        {journeyData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



      </div>
    </div>
    </>
  );
};

export default About;
