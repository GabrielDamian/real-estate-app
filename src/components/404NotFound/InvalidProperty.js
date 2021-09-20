import React from 'react';
import './InvalidProperty.css';
import bg from '../../images/404bg.jpg';
import Menu from '../Home/home-sub-components/Menu/Menu';
import ProblemIcon from '../../images/problem_page.png';

const InvalidProperty = ({text})=>{
    return(
        <div className="invalidprop-container">
            <Menu />
            <div className="invalidprop-dark-layer"/>
            <div className="invalidprop-content-total">
                <div className="invaldprop-content-short">
                    <div className="invalidprop-short-text">
                        <span>{text}</span>
                    </div>
                    <img src={ProblemIcon} alt="problem icon"/>
                </div>
            </div>
            
        </div>
    )
}
export default InvalidProperty;