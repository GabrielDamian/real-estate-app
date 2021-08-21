import React from 'react';
import './BestServices.css';
import HomeIcon from '../../../../images/home.png';
import PadLock from '../../../../images/padlock.png';
import SettingsIcon from '../../../../images/settings.png';
import GoalIcon from '../../../../images/goal.png';


const BestServices  = ()=>{
    const loremText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'

    return(
        <div className="best-services-container">
            <div className="best-services-title">
                    <div className="best-services-align-under-search">
                        <div className="best-services-align-title-center">
                            <div className="best-services-main-title">
                                <span>Best Services</span>
                            </div>
                            <div className="best-services-second-title">
                                <span>
                                    <i>We can give you the best services</i>
                                </span>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="best-services-cards-container">
                <CardServices icon={HomeIcon} title='FINDS YOUR DREAM HOME' description={loremText}/>
                <CardServices icon={PadLock} title='SECURING THE PROPERTY' description={loremText}/>
                <CardServices icon={SettingsIcon} title='FURNISHING THE PROPERTY' description={loremText}/>
                <CardServices icon={GoalIcon} title='PROVIDING LEGAL SUPPORT' description={loremText}/>
            </div>
        </div>
    )
}
const CardServices = ({icon,title,description})=>
{
    return(
        <div className="card-container">
            <div className="card-container-padding">
                <div className="card-container-icon-section">
                    <img src={icon} />
                </div>
                <div className="card-container-title-section">
                    <span>{title}</span>
                </div>
                <div className="card-container-content-section">
                    <span>{description}</span>
                </div>
            </div>
        </div>
    )
}
export default BestServices;