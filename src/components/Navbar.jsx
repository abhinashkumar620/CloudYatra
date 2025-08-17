import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/newlogo.png";
import './Navbar1.css';
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="image-container">
                <img src={logo} alt="logo" className="logo" />

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                <ul className={`link-content ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>

                    <li
                        className="services-link"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <span className="Services-p" >Services ▾</span>
                        {dropdownOpen && <DropdownMenu />}
                    </li>

                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/resources">Resources</Link></li>

                    {/* <li className="btn1"><Link to="/login">Login</Link></li>
                    <li className="btn2"><Link to="/Registed">Registed</Link></li> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;



