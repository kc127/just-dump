import React from 'react';
import GOOGLE_MAPS_API_KEY from './../../../../config.js';
import mapStyles from './mapStyles';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Search from './Search.jsx';


const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
}
const options = {
  disableDefaultUI: true,
  // styles: mapStyles,
  zoomControl: true,
}

const center = {
  lat: 33.7490,
  lng: -84.3880,
}

const Map = (props) => {

const [markers, setMarkers] = React.useState([]);

const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  libraries,
})

if(loadError) {
  return "Error loading maps";
}
if(!isLoaded) {
  return "Loading Maps";
}



const clickOnMap = (event) =>{
  const marker = {
    lat: event.latLng.lat(),
    lng: event.latLng.lng(),
    time: new Date()
  };
  setMarkers((currentMarkers) => [
    ...currentMarkers, marker])
  props.saveMarker(marker);
}

return(
  <div>
    <Search places={libraries} isLoader={isLoaded} />
    <h2>
    <span role="img" aria-label="poop">
      :poop
    </span>
  </h2>
    <GoogleMap
    mapContainerStyle={mapContainerStyle}
    zoom={8}
    center={center}
    options = {options}
    onClick={clickOnMap}>
      {markers.map((marker) => (
        <Marker key={marker.lat} position={{lat: marker.lat, lng: marker.lng}}
         />
      ))}
    </GoogleMap>
  </div>
)
}

export default Map;