import React,{useEffect, useState} from 'react';
import {useMap,MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet'
import './MapBuy.css';
import L from 'leaflet';
import RegularMarker from '../../../../images/regularMarker.png';
import SelectedMarker from '../../../../images/selectedMarker.png';



const MapBuy =({data})=>{
    const selectedMarker = L.icon({ 
        iconUrl: SelectedMarker,
        iconSize: [20,20]
     })
     const regularMarker = L.icon({ 
        iconUrl: RegularMarker,
        iconSize: [20,20]
     })

     const [localMarkers, setLocalMarkers] = useState({
         selected: [0,0]
     });

     useEffect(()=>{
        console.log("update in map buy:", data);
        if(data != null)
        {
            if(data.markers != null && data.selected != null)
            {
                console.log("9999")
                setLocalMarkers((prev)=>{
                    return{
                        ...prev,
                        markers: data.markers,
                        selected: data.selected
                    }
                })
            }
            else if(data.markers != null)
            {
                console.log("9999")
                setLocalMarkers((prev)=>{
                    return{
                        ...prev,
                        markers: data.markers
                    }
                })
            }
        }
     },[data])
     
     useEffect(()=>{
        console.log("Update in local markers:", localMarkers);
     },[localMarkers])

     const decideSelected = (param)=>{

        if(data.selected == null)
        {
            return regularMarker
        }
        else if(param[0] == data.selected[0] && param[1] == data.selected[1])
        {
            return selectedMarker;
        }
        else
        {
            return regularMarker;
        }
     }

     function ChangeView({ center }) {
        const map = useMap();
        if(localMarkers.selected[0] == 0 && localMarkers.selected[1] == 0)
        {
            map.setView(center,1);
        }
        else
        {
            map.setView(center,5);
        }
        return null;
      }

    return(
        <MapContainer center={localMarkers.selected} zoom={10} scrollWheelZoom={true}>
            {console.log("RE RENDER")}
            <ChangeView center={localMarkers.selected} /> 
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            {
                localMarkers.markers == null ? null :localMarkers.markers.map((el)=>{
                    return(
                        <Marker icon={decideSelected(el)} position={[el[0], el[1]]}>
                            <Popup>Seconds location</Popup>
                        
                        </Marker>
                        
                    )
                })
            }
          
        </MapContainer>
    )
}
export default MapBuy;