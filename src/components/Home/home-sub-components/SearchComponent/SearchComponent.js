import React,{useState, useEffect} from 'react';
import './SearchComponent.css';

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
        beds: ''
    })

    const handleInputChange = (e)=>{
        
        setInput((prev)=>{
            prev[e.target.name] = e.target.value;
            return {...prev}
        })



    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        changeHomeState('ceva');
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
                                    <select>
                                        <option value="1">Location_1</option>
                                        <option value="2">Location_2</option>
                                        <option value="3">Location_3</option>
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
                                    <select>
                                        <option value="1">Location_1</option>
                                        <option value="2">Location_2</option>
                                        <option value="3">Location_3</option>
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
                                    <select>
                                        <option value="1">Location_1</option>
                                        <option value="2">Location_2</option>
                                        <option value="3">Location_3</option>
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
                                    <select>
                                        <option value="1">Location_1</option>
                                        <option value="2">Location_2</option>
                                        <option value="3">Location_3</option>
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
                                    <input type="number"/>
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
                                        <input type="number"/>
                                    </div>
                            </div>
                        
                            <div className="form-box-container">
                                    <div className="box-title-container">
                                        <span>
                                            Room
                                        </span>
                                    </div>
                                    <div class="select">
                                        <select>
                                            <option value="1">Location_1</option>
                                            <option value="2">Location_2</option>
                                            <option value="3">Location_3</option>
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
                                        <select>
                                            <option value="1">Location_1</option>
                                            <option value="2">Location_2</option>
                                            <option value="3">Location_3</option>
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
                                        <select>
                                            <option value="1">Location_1</option>
                                            <option value="2">Location_2</option>
                                            <option value="3">Location_3</option>
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