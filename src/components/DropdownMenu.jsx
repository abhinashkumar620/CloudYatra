
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';

const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li><Link to="/Services/CloudServices">Cloud Services</Link></li>
      <li><Link to="/Services/Cybersecurity">Cybersecurity</Link></li>
      <li><Link to="/Services/ManagedServices">Managed Services</Link></li>
      <li><Link to="/Services/DevOpsAutomation">DevOps & Automation</Link></li>
      <li><Link to="/Services/DataAnalytics">Data Analytics</Link></li>
      <li><Link to="/Services/BackupRecovery">Backup & Recovery</Link></li>
      <li><Link to="/Services/Development">Development</Link></li>
      <li><Link to="/Services/EnterpriseLearning">Enterprise Learning</Link></li>
    </ul>
  );
};

export default DropdownMenu;
