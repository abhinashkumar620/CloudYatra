import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import Login from "./components/Services/Login";
import Registed from "./components/Services/Registed";
import CloudServices from './components/Services/CloudServices';
import Cybersecurity from './components/Services/Cybersecurity';
import ManagedServices from './components/Services/ManagedServices';
import DevOpsAutomation from './components/Services/DevOpsAutomation';
import DataAnalytics from './components/Services/DataAnalytics';
import BackupRecovery from './components/Services/BackupRecovery';
import Development from './components/Services/Development';
import EnterpriseLearning from './components/Services/EnterpriseLearning';
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
      <Router>
      <ScrollToTop/>
      <div className="navbarcontener">
        <Navbar />

      </div>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/Services/CloudServices" element={<CloudServices/>} />
          <Route path="/Services/Cybersecurity" element={<Cybersecurity/>} />
          <Route path="/Services/ManagedServices" element={<ManagedServices/>} />
          <Route path="/Services/DevOpsAutomation" element={<DevOpsAutomation/>} />
          <Route path="/Services/DataAnalytics" element={<DataAnalytics/>} />
          <Route path="/Services/BackupRecovery" element={<BackupRecovery/>} />
          <Route path="/Services/Development" element={<Development/>} />
          <Route path="/Services/EnterpriseLearning" element={<EnterpriseLearning/>} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Registed" element={<Registed/>}/>
        
        
        </Routes>
        {/* <div className="footr-section-pag"> */}

        <Footer/>
        {/* </div> */}

      </Router>
    </>
  );
};

export default App;
