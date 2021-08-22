import React,{useState, useEffect} from 'react';
import './SearchResults.css';
import RoomIcon from '../../../../images/room.png';
import BedRoomIcon from '../../../../images/bedroom.png';
import BathIcon from '../../../../images/bath.png';
import { useHistory } from 'react-router';
import ItemSearched from './ItemSearched';

const SearchResults = ({filters})=>{

    
    useEffect(()=>{
        console.log("update in show results",filters);
    },[filters])





    return(
        <div className="search-results-container">
            <div className="search-results-push-search-input"/>
            {
                filters == null ? null:
                filters.map((el)=>{
                    return <ItemSearched obj={el} />
                })
            }
            
        </div>
    )
}


export default SearchResults;