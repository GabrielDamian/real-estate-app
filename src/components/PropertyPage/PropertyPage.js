import React,{useState, useEffect} from 'react';
import './PropertyPage.css';
import InvalidProperty from '../404NotFound/InvalidProperty';
import axios from 'axios';
import Menu from '../Home/home-sub-components/Menu/Menu';
import Footer from '../shared-components/Footer';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightArrowIcon from '../../images/right-arrow.png';
import PropertyMap from './PropertyMap/PropertyMap';
import OtherProperty from './OtherProperty/OtherProperty';

const PropertyPage = (props)=>{

    const [content, setContent] = useState(<LoadingComponent />);
    useEffect(()=>{
        logicDecide();
    },[])

    const logicDecide = async()=>{
        console.log(localStorage.getItem('token'))
        const config = {
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'auth-token': localStorage.getItem('token') 
            },
            body:{
                id_to_check: props.match.params.id
            }
        }
        try{
            const response = await axios.post('api/fetchProperty',config)
            .then((ceva)=>{
                console.log("SUCCES:",ceva)
                setContent(<PropertyPageItself data={ceva.data.gasit} />)
            })
            .catch((err)=>{
                if(err.response.status == 404 )
                {
                    setContent( <InvalidProperty 
                                    text="This property does not exists!"
                                />)
                }
                else if(err.response.status == 500)
                {
                    setContent(<InvalidProperty
                                    text="Internal server problem! (500)"
                                />)
                }
                else if(err.response.status == 403)
                {
                    setContent(<InvalidProperty
                        text="You need to be logged to see the complete property!"
                    />)
                }
            })
            

             
        }
        catch(err)
        {
            console.log("PROBLEM")
            setContent(<InvalidProperty
                text="Internal server problem! (500)"
            />)
        }
        

    }
    return(
        <>
        {content}
        </>
    )
}
const LoadingComponent = ()=>{
    return(
        <div className='loading-screen-container'>
            <div class="middle">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
            <div class="bar bar4"></div>
            <div class="bar bar5"></div>
            <div class="bar bar6"></div>
            <div class="bar bar7"></div>
            <div class="bar bar8"></div>
            </div>
        </div>)
}
const PropertyPageItself = ({data})=>{

    useEffect(()=>{
        console.log("data in itelf", data);
    },[])
    const settings = {
        dots: true,
        fade:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides"
    }
    return(
       <div className="property-page-container">
            <Menu showSignUp={true}/>
            <div className="property-page-topper">

            </div>
            <div className="property-page-content">
                <div className="property-page-intro">
                    <div className="property-page-intro-title">
                        <div className="upper-intro-title">
                            <div className="upper-title-content">
                                {data.name}
                            </div>
                            <div className="upper-title-infos">
                                <div className="upper-infos-box bg-orange">
                                    {data.status}
                                </div>
                                <div className="upper-infos-box bg-gray">
                                    {data.type}
                                </div>
                            </div>
                        </div>
                        <div className="lower-intro-title">
                            <span>{data.price} $</span>
                        </div>
                    </div>
                    <div className="property-page-intro-carousel">
                    <Slider {...settings}>
                        {
                            data.images.map((image)=>{
                                return(
                                    <div className="image-slide-show">
                                        <img src={image} alt="slide-image"/>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    </div>

                </div>
            </div>
            <div className="property-page-description">
                <div className="property-description-title">
                    
                    <span>Property Description</span>
                    <div className="border-separator-desc"></div>
                </div>
                <div className="property-description-content">
                        {data.description}
                </div>
            </div>
            <div className="property-overview">
                <div className="overview-padding-container">
                    <div className="title-overview">
                        <div className="title-overview-itself">
                            <span>Property Overview</span>
                        </div>
                        <div className="border-separator-desc"></div>
                    </div>
                    <div className="content-overview">
                        <div className="content-overview-column">
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    PRICE:
                                </div>
                                <div className="content-elem-row">
                                    {data.price} $
                                </div>
                            </div>
                            
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    TYPE:
                                </div>
                                <div className="content-elem-row">
                                    {data.type}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    CONTRACT:
                                </div>
                                <div className="content-elem-row">
                                    {data.status}
                                </div>
                            </div>
                            {/* <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    MATERIAL:
                                </div>
                                <div className="content-elem-row">
                                    {data.material}
                                </div>
                            </div> */}
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    MATERIAL:
                                </div>
                                <div className="content-elem-row">
                                    {data.material}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    CONTACT NR:
                                </div>
                                <div className="content-elem-row">
                                    {data.contactNumber}
                                </div>
                            </div>

                        </div>
                        <div className="content-overview-column">

                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    STATUS:
                                </div>
                                <div className="content-elem-row">
                                    {data.status}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    ROOMS:
                                </div>
                                <div className="content-elem-row">
                                    {data.rooms}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    Baths:
                                </div>
                                <div className="content-elem-row">
                                    {data.baths}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    Beds:
                                </div>
                                <div className="content-elem-row">
                                    {data.beds}
                                </div>
                            </div>
                            <div className="column-elem-row">
                                <div className="arrow-right">
                                    <img src={RightArrowIcon} alt="right arrow"/>
                                </div>
                                <div className="name-elem-row">
                                    Location:
                                </div>
                                <div className="content-elem-row">
                                    {data.location}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="property-map-container">
                <PropertyMap lat={data.lat} long={data.long}/>
            </div>
            <div className="property-others">
                <div className="others-similar-props">
                       Other Proprieties     
                </div>
                <div className="border-separator-desc"></div>
                <div className="other-container">
                    <OtherProperty />
                </div>
            </div>
            <Footer />
       </div>
    )
}

export default PropertyPage;
