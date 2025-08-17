import React from "react";
import "./Footer.css";
import { Link, Links } from "react-router-dom";
import logo from "../assets/newlogo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-section-contener">
          <div className="section-first">
            <img src={logo} alt="" />
            <h3>CloudYatra</h3>
            <p>Navigate the Cloud with Confidence</p>
            <p>
              Your trusted partner for cloud services, cybersecurity, and
              managed IT solutions.
            </p>
            <p>Smart AI-Powered Web Development</p>
          </div>
          <div className="secrion-second">
            <h3>Quick Links</h3>
            <li>
              <Link to="/Services/CloudServices">Cloud Services</Link>
            </li>
            <li>
              <Link to="/Services/Cybersecurity">Cybersecurity</Link>
            </li>
            <li>
              <Link to="/Services/ManagedServices">Managed Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <div className="section-thrd">
            <h3>Contact Us</h3>
             <Link to="/email">Email: info@cloudyatra.com</Link>
             <div className="icon-cont">

             <Link to="https://www.linkedin.com/company/cloudyatra-private-limited">
               <i class="ri-linkedin-box-fill"></i>
             </Link>
             <Link to="https://x.com/YatraCloud">
              <i class="ri-twitter-x-fill"></i>
             </Link>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
