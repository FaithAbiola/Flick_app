import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./footer.css"
import flick_logo from "../../assets/images/FlickLogo.svg"
import play_logo from "../../assets/images/downloadAndriod.svg"
import app_logo from "../../assets/images/downloadApple.svg"


const Footer = () => {
    
    return (
        <footer className= "footer-area" >
            <div className="container">
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-5 col-lg-4">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <img src={flick_logo} alt="logo" />
                                    <p className='subtitle'>One secure platform to pay, get paid, and manage all your finances better!</p>

                                    <div className='footer-download-link'>
                                        <a href="https://www.facebook.com/getflick.africa/">
                                            <img src={play_logo} alt="logo" />
                                        </a>
                                        <a href="https://www.facebook.com/getflick.africa/">
                                            <img src={app_logo} alt="logo" />
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Company</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to="/about">About Us</Link></li>
                                                <li> <Link to="/pricing">Pricing</Link></li>
                                                <li><Link to="/404">FAQs</Link></li>
                                                <li><a href='https://www.notion.so/dthrizcom/Flick-s-Terms-and-Conditions-2c39f0d4d99e4e7abf32cf4a2a849aaf?pvs=4'>Terms & Conditions</a></li>
                                                <li><a href='https://dthrizcom.notion.site/dthrizcom/Flick-s-Privacy-Policy-15159912fa1642acad7cff77838a0d81'>Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Developers</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to="/404">Overview</Link></li>
                                                <li> <Link to="/404">API Documentation</Link></li>
                                                <li><Link to="/404">Support</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Address</h6>
                                        <div className="footer-menu-link">
                                            <h6>Nigeria:</h6>
                                            <span>6th Floor, Landmark Towers, 5B Water Corporation Road, Victoria Island, Lagos</span>
                                            <h6>United States:</h6>
                                            <span>2261 Market Street #4664 San Francisco, CA 9114</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">Copywriting © {new Date().getFullYear()} Flick. All rights reserved • A product of QRaba Inc. </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><a href="https://www.facebook.com/getflick.africa/"><FaFacebookF /></a></li>
                                    <li><a href="https://twitter.com/getflick_africa/"><FaTwitter /></a></li>
                                    <li><a href="https://www.linkedin.com/company/getflick/"><FaLinkedin /></a></li>
                                    <li><a href="https://www.instagram.com/getflick.africa/"><FaInstagram /></a></li>
                                </ul>
                            </div>
                            <div className="footer-bottom-link">
                                <ul >
                                    <li><Link to="/unsubscribe">unsubscribe</Link></li>
                                    <li><Link to="/deletemyProfile">delete profile</Link></li>     
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;