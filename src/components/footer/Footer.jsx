import React, { useState } from 'react';
import './footer.css';

function Footer() {
    const [count, setCount] = useState(0)
    
    return ( <div className='footer-container' id='footer'>
    <div className="footer-box">
    <a href="#link1" className="footer-link large-link">PRIVACY</a>
    <a href="#link2" className="footer-link">Terms of use</a>
    <a href="#link3" className="footer-link">Privacy policy</a>
    <a href="#link4" className="footer-link">cookies</a>
</div>
<div className="footer-box">
    <a href="#link1" className="footer-link large-link">SERVICES</a>
    <a href="#link2" className="footer-link">Map</a>
    <a href="#link3" className="footer-link">Orders ahead</a>
    <a href="#link4" className="footer-link">Menu</a>
</div>
<div className="footer-box">
    <a href="#link1" className="footer-link large-link">ABOUT US</a>
    <a href="#link2" className="footer-link">Find our Locations</a>
    <a href="#link3" className="footer-link">About us</a>
    <a href="#link4" className="footer-link">Our Story</a>
</div>
<div className="footer-box">
    <a href="#link1" className="footer-link large-link">INFORMATION</a>
    <a href="#link2" className="footer-link">Menu & Pricing</a>
    <a href="#link3" className="footer-link">Send your Product</a>
    <a href="#link4" className="footer-link">Jobs</a>
</div>
        </div>)
}

export default Footer