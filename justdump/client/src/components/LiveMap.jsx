import React from 'react';
import GOOGLE_MAPS_API_KEY from './../../../../config.js';
import mapStyles from './mapStyles';
import mapStyles1 from './mapStyles1';
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api';
import Search from './Search.jsx';
import SubmitReview from './SubmitReview.jsx';
import CurrentLocation from './CurrentLocation.jsx';
import { GrRestroom } from 'react-icons/gr';
import LandingPage from './LandingPage.jsx';


const libraries = ["places"];
const containerStyle = {
  width: "100vw",
  height: "100vh"
};

const center = {
  lat: 33.7490, lng: -84.3880
};

const options = {
  disableDefaultUI: true,
  styles: mapStyles,
  zoomControl: true
}

class LiveMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      isMarked: null,
      home: false
    }
    this.mapRef = React.createRef();
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkClick = this.handleMarkClick.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.goBack = this.goBack.bind(this);
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

  goBack() {
    this.setState({
      home: !this.state.home
    })
  }


  render() {
    if(this.state.home === false) {
      return (
        <div className="googleMaps">
          <LoadScript
            id="script-loader"
            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
            libraries={libraries}
          >
            <Search places={libraries} zoomIn={this.zoomIn} />
            <GoogleMap
              id="map"
              mapContainerStyle={containerStyle}
              zoom={8}
              center={center}
              options={options}
              ref="map"
              onLoad={(map) => this.mapRef.current = map}
              onClick={this.handleMapClick}>
              {this.state.markers && this.state.markers.map((marker) => (
                <Marker key={center.id} position={{ lat: marker.lat, lng: marker.lng }}
                  onClick={() => this.handleMarkClick(marker)}
                />
              ))}
              {this.state.isMarked ? (<InfoWindow
                position={{ lat: this.state.isMarked.lat, lng: this.state.isMarked.lng }}
                onCloseClick={() => this.handleMarkClick(null)} >
                <SubmitReview />
              </InfoWindow>) : null}
            </GoogleMap>
            <button className="changetheme" onClick={this.changeTheme}>Home</button>
          </LoadScript>
        </div>
      )
    } else {
      return(
        <CustomMap />
      )
    }
  }
}

export default LiveMap;