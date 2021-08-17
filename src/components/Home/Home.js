import React from 'react';
import './Home.css';
import Footer from '../shared-components/Footer';
import ParallaxIntro from './home-sub-components/ParallaxIntro/ParallaxIntro';
import Menu from './home-sub-components/Menu/Menu';

const Home = ()=>{
    return(
        <div class="home-container">
            <ParallaxIntro />
            <div className="home-sticky-menu">
                <Menu />
            </div>
            <div className="home-search-component">
                <div className="home-search-form-itself">

                </div>
            </div>
            
            <div className="home-best-services">
                best services
            </div>
            <div className="home-latest-real-estate">
                best services
            </div>
            <Footer />
        </div>
    )
}
export default Home;
