import React from 'react';
import './Footer.css';
import PhoneIcon from '../../images/phone.png';
import MailIcon from '../../images/mail.png';

import Facebook from '../../images/facebook.png';
import Linkedin from '../../images/linkedin.png';
import Skype from '../../images/skype.png';
import Twiter from '../../images/twitter.png';
import Whatsapp from '../../images/whatsapp.png';

const Footer = ()=>{
    return(
        <div className="footer-container">
            <div className="footer-container-padding">
                <div className="left-footer-content">
                    <span><h2>Expert Estate</h2></span>
                    <span><h4>Demo Real Estate Website</h4></span>
                    <span><h5>9.5 Main Street, Jjrn Plrt Btl</h5></span>
                    <span className="inline-elements">
                        <img src={PhoneIcon} alt="phone icon" /> 
                        <h5 style={{marginLeft: '10px'}}>Telp. : +62-345678910</h5>
                    </span>
                    <span className="inline-elements">
                        <img src={MailIcon} alt="phone icon" /> 
                        <h5 style={{marginLeft: '10px'}}>Email : info@example.com</h5>
                    </span>
                    <span></span>

                    <div className="social-media-footer-container">
                        <img src={Facebook} alt="fb-icon" className="blue-hover"/>
                        <img src={Linkedin} alt="fb-icon" className="blue-hover"/>
                        <img src={Twiter} alt="fb-icon" className="blue-hover"/>
                        <img src={Facebook} alt="fb-icon" className="blue-hover"/>
                        <img src={Whatsapp} alt="fb-icon" className="green-hover"/>
                    </div>
                </div>
                <div className="right-footer-content">
                    <div className="right-footer-link-category">
                        <div className="right-footer-links-title">
                            Useful Links
                        </div>
                        <div className="right-footer-underline-title">

                        </div>

                        <div className="right-footer-links-link">
                            <span>Dashboard</span>
                            <span>Create-announcement</span>
                            <span>About us</span>
                            <span>Report a problem</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;
