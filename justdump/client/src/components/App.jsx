import React from 'react';
import axios from 'axios';
import Map from './Map.jsx';
import LiveMap from './LiveMap.jsx';
import Sidebar from './Sidebar.jsx';
import Gallery from './Gallery.jsx';
import CustomMap from './CustomMap.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      liveMap: false,
      hasStatus: false,
      status: ""
    }
    this.saveMarker = this.saveMarker.bind(this);
    this.renderLiveMap = this.renderLiveMap.bind(this)
    this.getStatus = this.getStatus.bind(this);
  }

  componentDidMount(){
    this.saveMarker();
  }

  saveMarker(marker) {
    axios.post('/markers', marker)
    .then((res) => {
      console.log('restroom location successfully saved to database');
    })
    .catch((err) => {
      console.log('error saving restroom location to database')
    })
  }

  renderLiveMap(){
    this.setState({
      liveMap: !this.state.liveMap
    })
  }

  getStatus(status){
    this.setState({
      hasStatus: !this.state.hasStatus,
      status: status
    })
  }

  render() {
      return (
        <div className="main">
          <Sidebar getStatus={this.getStatus}/>
          <div className="nav"></div>
          <Map />
        </div>
      )
  }
}

export default App;