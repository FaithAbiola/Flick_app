import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import "./header.css";




const Navbar = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                
                <li><Link to="">Business</Link></li>
                <li><Link to="">Pricing</Link></li>
                <li className="menu-item">
                    <Link to="#">About Us<FaAngleDown /></Link>
                    <ul className="submenu">
                        <li><Link to= "/about">About us</Link></li>
                        <li><Link to="/careers">Careers on Flick</Link></li>
                        <li><Link to="/news">Press</Link></li>           
                    </ul>
                </li>
                <li className="menu-item">
                    <Link to="#">Developer<FaAngleDown /></Link>
                    <ul className="submenu">
                        <li><Link to="">Overview</Link></li>
                        <li><Link to="">API Documentation</Link></li>
              
                    </ul>
                </li>
                
            </ul>
        </nav>
        
    )
}

export default Navbar;