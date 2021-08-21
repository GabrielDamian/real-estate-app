import React,{useState, useEffect} from 'react';
import './SearchResults.css';

const SearchResults = ({filters})=>{

    useEffect(()=>{
        console.log("update in show results",filters);
    },[filters])
    return(
        <p>SearchResults{filters}</p>
    )
}
export default SearchResults;