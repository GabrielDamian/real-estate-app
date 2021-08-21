import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet'
import './PropertyMap.css';

const PropertyMap =({lat,long})=>{
      
    return(
        <MapContainer center={[lat,long]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]}>
            <Popup>Building location.</Popup>
        </Marker>
        </MapContainer>
    )
}

export default PropertyMap;
