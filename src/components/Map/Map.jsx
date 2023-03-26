import GoogleMapReact from 'google-map-react';
import restuarant from "../../assets/restuarant/restuarant.jpg"
import { Rating } from "@mui/material"
import { useDarkMode } from '../../hooks';

import darkMap from "./darkMapStyles"
import lightMap from "./lightMapStyles"

const Map = ({ coordinates, setCoordinates, setBounds, places, setChildClicked }) => {

const [ dark, darkToggle ] = useDarkMode()

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '90vh', width: '100%' }}>
      
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDsq1YjRZoYetdWueA2Vy2xnDrmFx_XzNo" }}
        center={coordinates}
        defaultZoom={14}
        onChildClick={(child) => {setChildClicked(child)}}
        options={dark ? {disableDefaultUI: true, zoomControl: true, styles: darkMap} : {disableDefaultUI: true, zoomControl: true, styles: lightMap}}
        onChange={(e) => {
        
          const { lat, lng } = e.center
          const { ne, sw } = e.marginBounds

          setCoordinates({ lat: lat, lng: lng})
          setBounds({ ne: ne, sw: sw})
          
        }}
      >

       

        {places?.map((place, i) => (
     
            <div
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
         
            >

              <div className='h-20 w-20'>

                <img className='h-full w-full' src={place.photo ? place?.photo?.images.small.url : restuarant } alt={place.name} />
                <p>{place.name}</p>
                <Rating size="small" value={Number(place.rating)} readOnly/>
                
              </div>

            </div>
        
        ))}

   
      </GoogleMapReact>

    </div>
  );
}

export default Map