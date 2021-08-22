import React, {useEffect} from 'react';
import RoomIcon from '../../../../images/room.png';
import BedRoomIcon from '../../../../images/bedroom.png';
import BathIcon from '../../../../images/bath.png';

import { useHistory
 } from 'react-router';
const ItemSearched = ({obj})=>{

    const history = useHistory();

    const cutText = (string)=>{
        if(string.length < 193)
        {
            return string
        }
        else
        {
            let temp = string.slice(0.193); 
            return `${temp} ...`;
        }
    }


    useEffect(()=>{
        console.log("DEEP",obj);
    },[])
    const longString = ' From they fine john he give of rich he. They age and draw mrs like. Improving end  From they fine john he give of rich he. They age and draw to. Vicinity relation sensible sociable surprise scre'

    return(
        <div className="search-results-content">

                <div className="search-result-item">
                    <div className="search-result-image-cont">
                        <img src={obj.images[0]} alt="image"/>
                    </div>
                    <div className="search-result-item-content">
                        <div className="item-content-upper">
                            <div className="content-upper-title">
                                {obj.name}
                            </div>
                            <div className="content-upper-details">
                                <div className="upper-details-box">
                                    <img src={RoomIcon} alt="asd"/>
                                    <span>{obj.rooms} Rooms</span>

                                </div>
                                <div className="upper-details-box">
                                    <img src={BedRoomIcon} alt="asd"/>
                                    <span>{obj.beds} Bedrooms</span>
                                    
                                </div>
                                <div className="upper-details-box">
                                    <img src={BathIcon} alt="asd"/>
                                    <span>{obj.baths} Baths</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="item-content-lower">
                            <span>
                                {cutText(obj.description)}
                            </span>
                        </div>
                        
                    </div>
                    <div className="search-input-item-price">
                        <div className="item-padding">
                            <span>$ {obj.price}</span>
                        </div>
                        <div className="item-padding" >
                            <button onClick={()=>{history.push(`/property/${obj._id}`)}}>View</button>
                        </div>
                    </div>
                </div>
            </div>
    )

}
export default ItemSearched;