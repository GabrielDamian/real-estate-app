import React,{useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet'
import './MapComponent.css';
import {pushReduxCoord} from '../../Dashboard/Redux/actions';
import store from '../../Dashboard/Redux/store';

const MapComponent =()=>{
    const [position, setPosition] = useState(null)

    useEffect(()=>{
      if(position != null)
      {
        store.dispatch(pushReduxCoord(position[0], position[1]))

      }
    },[position])

    function LocationMarker() {
        
        const map = useMapEvents({
          click() {
            map.on('click', function(e){
              var coord = e.latlng;
              var lat = coord.lat;
              var lng = coord.lng;
              console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
              setPosition([lat, lng])
              });
            
          },
        })
      
        return position === null ? null : (
          <Marker position={position}>
            <Popup>Building location.</Popup>
          </Marker>
        )
      }
      
    return(
        <MapContainer center={[51.505,-0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <LocationMarker />
            {/* <Marker position={[47.60,26.66]}>
                <Popup>Seconds location</Popup>
            </Marker> */}
        </MapContainer>
    )
}

export default MapComponent;
