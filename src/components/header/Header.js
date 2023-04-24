
import { Link } from 'react-router-dom';
import Nav from './Navbar';
import StickyHeader from './StickyHead';

import logo_img from "../../assets/images/logo2.svg"


function Header() {

    const sticky = StickyHeader(100);
    
    return (
        <>
            <header className="header">
                <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                            <Link to= "/">
                                <img className="logo" src= {logo_img} alt="logo" />
                                <img className="sticky-logo" src={logo_img} alt="logo" />
                            </Link>
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                        
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header