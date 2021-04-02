import React from 'react';
import GOOGLE_MAPS_API_KEY from './../../../../config.js';
import mapStyles from './mapStyles';
import mapStyles1 from './mapStyles1';
import mapStyles2 from './mapStyles2';
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer} from '@react-google-maps/api';
import Search from './Search.jsx';
import SubmitReview from './SubmitReview.jsx';
import CurrentLocation from './CurrentLocation.jsx';
import { GrRestroom } from 'react-icons/gr';
import LiveMap from './LiveMap.jsx';
import locations from './locations.js';
import mensRestrooms from './mensRestrooms.js';
import accessibility from './accessibility.js';
import unisex from './unisex.js';
import shower from './shower.js';
import womens from './womens.js';
import ReadReview from './ReadReview.jsx';



const libraries = ["places"];
const containerStyle = {
  width: "99vw",
  height: "99vh"
};

const center = {
  lat: 33.7490, lng: -84.3880
};

const options = {
  disableDefaultUI: true,
  styles: mapStyles2,
  zoomControl: true
}

class CustomMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      isMarked: null,
      liveMap: false,
      locations: accessibility,
    }

    this.mapRef = React.createRef();
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkClick = this.handleMarkClick.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
  }

  handleMapClick(event) {
    const marker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date()
    };

    this.setState({
      markers: [...this.state.markers, marker]
    })
    this.props.saveMarker(marker);
  }

  handleMarkClick(marker) {
    this.setState({
      isMarked: marker
    })
  }

  zoomIn({ lat, lng }) {
    this.mapRef.current.panTo({ lat, lng });
    this.mapRef.current.setZoom(14);
  }


  render() {

    if(this.props.status === "unisex"){
      this.state.locations = unisex;
    }

    if(this.props.status === "men"){
      this.state.locations = mensRestrooms;
    }

    if(this.props.status === "women"){
      this.state.locations = women;
    }

    if(this.props.status === "shower"){
      this.state.locations = shower;
    }

    if(this.props.status === "roll"){
      this.state.locations = roll;
    }

    if(this.props.status === "sanitizer"){
      this.state.locations = sanitizer;
    }

      return (
        <div className="googleMaps">
          <LoadScript
            id="script-loader"
            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
            libraries={libraries}
          >

            <div className="homepage">
              <div className="iconsearch">
                <Search places={libraries} zoomIn={this.zoomIn} />
              </div>
            </div>

            <CurrentLocation zoomIn={this.zoomIn} />
            <GoogleMap
              id="map"
              mapContainerStyle={containerStyle}
              zoom={8}
              center={center}
              options={options}
              ref="map"
              onLoad={(map) => this.mapRef.current = map}
              onClick={this.handleMapClick}>
              {this.state.locations.map((item) => {
                return (
                <Marker key={item.position} position={item.location}/>
                )
              })
              }
              {this.state.markers && this.state.markers.map((marker) => (
                <Marker key={center.id} position={{ lat: marker.lat, lng: marker.lng }}
                  onClick={() => this.handleMarkClick(marker)}
                />
              ))}
              {this.state.isMarked ? (<InfoWindow
                position={{ lat: this.state.isMarked.lat, lng: this.state.isMarked.lng }}
                onCloseClick={() => this.handleMarkClick(null)} >
                <ReadReview />
              </InfoWindow>) : null}
            </GoogleMap>
          </LoadScript>
        </div>
      )
  }
}

export default CustomMap;