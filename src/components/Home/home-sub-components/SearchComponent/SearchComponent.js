import React,{useState, useEffect} from 'react';
import './SearchComponent.css';
import axios from 'axios';

const SearchComponents  = ({changeHomeState})=>{

    const [input, setInput] = useState({
        location: '',
        type: '',
        status: '',
        material: '',
        price_from: '',
        price_to:'',
        rooms: '',
        baths: '',
        beds: '',
        price_from:'',
        price_to:''
    })

    useEffect(()=>{
        console.log("input update", input);
    },[input])
    const handleInputChange =  (e)=>{
        
        setInput((prev)=>{
            prev[e.target.name] = e.target.value;
            return {...prev}
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const config = {
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            },
            body:{
                ...input
            }
        }
        
        try{

            const response = await axios.post('api/filterProps',config)
            .then((resp)=>{
                console.log("sss",resp.data);
                changeHomeState(resp.data.rasp);
            })
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className="home-search-component">
                <div className="home-search-form-itself">
                    <form className="home-form">
                        <div className="upper-form">
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Location
                                    </span>
                                </div>
                                <div class="select">
                                    <select onChange={handleInputChange} name="location">
                                        <option value="">None</option>
                                        <option value="europe">Europe</option>
                                        <option value="north-america">North America</option>
                                        <option value="south-america">South America</option>
                                        <option value="asia">Asia</option>
                                        <option value="africa">Africa</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Property type
                                    </span>
                                </div>
                                <div class="select">
                                    <select onChange={handleInputChange} name="type">
                                        <option value="">None</option>
                                        <option value="apartament">Apartament</option>
                                        <option value="building area">Building area</option>
                                        <option value="house">House</option>
                                        <option value="villa">Villa</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Status
                                    </span>
                                </div>
                                <div class="select">
                                    <select onChange={handleInputChange} name="status">
                                        <option value="">None</option>
                                        <option value="available">Available</option>
                                        <option value="rent agreed ">Rent agreed </option>
                                        <option value="reserved">Reserved</option>
                                        <option value="sell agreed">Sell agreed</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Material
                                    </span>
                                </div>
                                <div class="select">
                                    <select onChange={handleInputChange} name="material">
                                        <option value="">None</option>
                                        <option value="block">Block</option>
                                        <option value="brick">Brick</option>
                                        <option value="mixed">Mixed</option>
                                        <option value="prefab">Prefab</option>
                                        <option value="stone">Stone</option>
                                        <option value="wood">Wood</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-box-container">
                                <div className="box-title-container">
                                    <span>
                                        Price from ($$$)
                                    </span>
                                </div>
                                <div className="number-input-box">
                                    <input type="number" onChange={handleInputChange} name="price_from"/>
                                </div>
                            </div>
                        </div>
                        <div className="lower-form">
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Price to ($$$)
                                        </span>
                                    </div>
                                    <div className="number-input-box">
                                        <input type="number" onChange={handleInputChange} name="price_to"/>
                                    </div>
                            </div>
                        
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Room
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select onChange={handleInputChange} name="rooms">
                                            <option value="">None</option>
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+4">+3</option>
                                        </select>
                                    </div>
                            </div>
                            
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Baths
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select onChange={handleInputChange} name="baths">
                                            <option value="">None</option>
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+4">+3</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Beds
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select onChange={handleInputChange} name="beds">
                                        <option value="">None</option>
                                            <option value="+1">+1</option>
                                            <option value="+2">+2</option>
                                            <option value="+4">+3</option>
                                        </select>
                                    </div>
                            </div>
                            <div className="form-box-container" onClick={handleSubmit}>
                                <span style={{color: 'transparent',marginBottom: '5px'}}>Some</span>
                                    <div className="box-container-submit-btn">
                                        <span>SEARCH</span>
                                    </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
    )
}
export default SearchComponents;