import React,{useState} from 'react';
import './Home.css';
import Footer from '../shared-components/Footer';
import ParallaxIntro from './home-sub-components/ParallaxIntro/ParallaxIntro';
import Menu from './home-sub-components/Menu/Menu';
import SearchComponents from './home-sub-components/SearchComponent/SearchComponent';
import BestServices from './home-sub-components/BestServices/BestServices';
import SearchResults from './home-sub-components/SearchResults/SearchResults';

const Home = ()=>{
    const [showResults, setShowResults] = useState(null);

    const changeHomeState = (newState)=>{
        setShowResults(newState);
    }
    return(
        <div class="home-container">
            <ParallaxIntro />
            <Menu showSignUp={true}/>
            <SearchComponents changeHomeState={changeHomeState}/>
            {showResults == null ? null:
            <SearchResults filters={showResults}/>}

            <BestServices />

            <Footer />
        </div>
    )
}
export default Home;
