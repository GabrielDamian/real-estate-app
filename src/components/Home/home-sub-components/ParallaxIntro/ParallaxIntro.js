import React from 'react';
import './ParallaxIntro.css';
import ParalaxBg from '../../../../images/bg-intro.jpg';

const ParallaxIntro = ()=>{
    return(
        <div class="hero parallax-content"><img src={ParalaxBg} alt="Photo of city during a sunset by Sterling Davis"/>
            <div class="hero__title">
                <h1>CSS Parallax Hero</h1>
            </div>
        </div>
    )
}

export default ParallaxIntro;
