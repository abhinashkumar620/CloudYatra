import React from 'react'
import './DataAnalytics.css'
import Discovery from '../Services/image/infographic-consultation.svg'
import Analysis from '../Services/image/infographic-innovation.svg'
import Insights from '../Services/image/infographic-analytics.svg'
const DataAnalytics = () => {
  return (
 <>
 <div className="analytics-contener">
 <div className="analeeee">

 

 <div className="contener-box">
  <h2>Data Analytics & AI</h2>
  <p>Unlock the power of your data with our advanced analytics and artificial intelligence solutions. We help you transform raw data into actionable insights, implement machine learning models, and build intelligent systems that drive business growth.</p>


<div className="img-contener-analytics">
  <div className="box-contents">
    <img src={Analysis} alt="icon" />
    <h4>Analysis</h4>
    <p>Apply AI/ML algorithms and statistical models</p>
  </div>
  <div className="box-contents">
    <img src={Insights} alt="icon" />
    <h4>Insights</h4>
    <p>Generate actionable insights and recommendations</p>
  </div>
</div>


 </div>

 <div className="Benefit-box">
 <div className="Benefit-text">
  <h2>Key Benefits</h2>
 </div>
   <div className="Benefit-content">
   <i class="ri-check-fill"></i>
   <p>
    Make data-driven decisions with real-time insights and predictive analytics</p>

   </div>
   <div className="Benefit-content">
   <i class="ri-stairs-fill"></i>
   <p>
    Automate complex business processes using AI and machine learning</p>

   </div>
   <div className="Benefit-content">
   <i class="ri-shield-keyhole-line"></i>
   <p>
    
   Improve customer experience through personalized recommendations and services</p>

   </div>
   <div className="Benefit-content">
   <i class="ri-loop-left-fill"></i>
   <p>
    
Reduce operational costs by identifying inefficiencies and optimization opportunities</p>

   </div>
   <div className="Benefit-content">
   <i class="ri-customer-service-fill"></i>
   <p>
    Accelerate innovation with rapid prototyping and testing of AI solutions</p>

   </div>
   <div className="Benefit-content">
   <i class="ri-flashlight-fill"></i>
   <p>
    Ensure data quality and governance with automated data validation and monitoring</p>

   </div>
 </div>
</div>
 </div>
 </>
  )
}

export default DataAnalytics
