import React,{useState, useEffect} from 'react';
import './OtherProperty.css';
import axios from 'axios';
import MaterialIcon from '../../../images/material.png';
import Status from '../../../images/status.png';
import Type from '../../../images/type.png';
import { useHistory } from 'react-router';
const OtherProperty = ()=>{
    const history = useHistory();

    const[ properties, setProperties] = useState(null);
    useEffect(async ()=>{
        const config = {
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'auth-token': localStorage.getItem('token') 
            }}

            try{
                let response = await axios.get('/api/otherSection',config)
                .then((res)=>{
                    console.log(res)
                    setProperties(res.data.random);
                })
                .catch(err=>console.log(err))
                
            }
            catch(err)
            {
                console.log(err);
            }
    },[])
    return(
        <>
        {
            properties == null ? null:
            <div className="other-prop-contaier">
                {properties.map((el)=>{
                    console.log("EL", el)
                    return(
                        <div className="other-item-container">
                            <div className="other-item-padding">
                                <div className="other-item-photo">
                                    <img src={el.images[0]} alt="img" />
                                </div>
                                <div className="other-item-middle-info">
                                    <div className="other-middle-title">
                                        {el.name}
                                    </div>
                                    <div className="other-middle-infos">
                                        <div className="middle-info-box" title="material">
                                            <img src={MaterialIcon} alt="material" />
                                            <span>{el.material}</span>
                                        </div>
                                        <div className="middle-info-box" title="status">
                                            <img src={Status} alt="status" />
                                            <span>{el.status}</span>
                                        </div>
                                        <div className="middle-info-box">
                                            <img src={Type} alt="status" />
                                            <span>{el.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="other-item-bottom-info">
                                    <div className="other-item-bottom-info-box">
                                        <div className="bottom-info-box-proce-itself">
                                            <span>{el.price} $</span>
                                        </div>
                                    </div>
                                    <div className="other-item-bottom-info-box">
                                        <div className="other-item-bottom-btn-redirect">
                                            <div className="btn-itself" onClick={()=>{
                                                window.location.replace(`/property/${el._id}`)
                                            }}>
                                                <span>VIEW DETAILS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        }
        </>
    )
}

export default OtherProperty;
