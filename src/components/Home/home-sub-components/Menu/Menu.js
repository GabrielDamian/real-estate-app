import React from 'react';
import './Menu.css';
import Logo from '../../../../images/logo.png';
import Phone from '../../../../images/phone.png';
import Facebook from '../../../../images/facebook.png';
import Linkedin from '../../../../images/linkedin.png';
import Skype from '../../../../images/skype.png';
import Twiter from '../../../../images/twitter.png';
import Whatsapp from '../../../../images/whatsapp.png';
import './menuSAAS.css';
import { useHistory } from 'react-router';

const Menu = ({showSignUp})=>{
    //showSignUp - boolean
    let history = useHistory();

    return(
        <div className="home-sticky-menu">
        <div className="menu-container">
            <div className="upper-menu">
                <div className="contact-menu">
                    <img src={Phone} alt="phone"/>
                    <span>(123) 456 78 90</span>
                    <div className="upper-menu-social-media-contaier">
                        <img src={Facebook} alt='fb-icon' id="fb-icon"/>
                        <img src={Linkedin} alt='linked-icon' id="linkedin-icon"/>
                        <img src={Skype} alt='skype-icon' id="skype-icon"/>
                        <img src={Twiter} alt='twitter-icon' id="skype-icon"/>
                        <img src={Whatsapp} alt='whatsapp-icon' id="whatsapp-icon"/>
                    </div>
                                    </div>
                <div className="right-upper-menu">
                    {showSignUp == true?
                    <button id="signup-btn" 
                        onClick={()=>{history.push('/signup')}}
                        > 
                        Sign up
                    </button>
                    :null}
                    
                </div>
            </div>
            <div className="lower-menu">
                <div className="lower-menu-logo" onClick={()=>{history.push('/')}}>
                    <img src={Logo} alt="logo"/>
                    <span className="logo-text">
                        <b>
                            <p>EXPERT</p> ESTATE
                        </b>
                    </span>
                </div>
                <div className="lower-menu-buttons">
                <nav>
                    <ul>
                        <li class="sub-menu-parent" tab-index="0">
                        <a >HOME &#9660;</a>
                        <ul class="sub-menu">
                            <li><a onClick={()=>{history.push('/')}}>HOMEPAGE</a></li>
                        </ul>
                        </li>
                        <li class="sub-menu-parent" tab-index="0">
                        <a href="#">USE APP &#9660;</a>
                        <ul class="sub-menu">
                            <li><a onClick={()=>{history.push('/login')}}>LOGIN</a></li>
                            <li><a onClick={()=>{history.push('/signup')}}>SIGN UP</a></li>
                        </ul>
                        </li>
                        <li class="sub-menu-parent" tab-index="0">
                        <a href="#">ABOUT &#9660;</a>
                        <ul class="sub-menu">
                            <li><a onClick={()=>{history.push('/about')}}>ABOUT_1</a></li>
                            <li><a onClick={()=>{history.push('/about')}}>ABOUT_2</a></li>
                        </ul>
                        </li>

                    </ul>
                </nav>
                </div>

            </div>
        </div>
        </div>
    )
}
export default Menu;