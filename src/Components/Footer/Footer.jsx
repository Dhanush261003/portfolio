import React from "react";
import './Footer.css'
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    const handleConnectClick = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>
                        Stay updated with my latest projects, learning journey, and web development insights.
                    </p>

                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2026 Dhanush. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <a href=""><p>Term of Services</p></a>
                    <a href=""><p>Privacy Policy</p></a>
                    <a onClick={handleConnectClick} href="#contact"><p>Connect with me</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
