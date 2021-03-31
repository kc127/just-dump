import React from 'react';
import axios from 'axios';
import Map from './Map.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: []
    }
    this.saveMarker = this.saveMarker.bind(this);
  }

  saveMarker(marker) {
    console.log("clicked", marker)
    axios.post('/markers', marker)
    .then((res) => {
      console.log('restroom location successfully saved to database');
    })
    .catch((err) => {
      console.log('error saving restroom location to database')
    })
  }

  render() {
    return (
      <div>
        <h2>
          <span role="img" aria-label="poop">
            :poop
          </span>
        </h2>
        <Map saveMarker={this.saveMarker} />
      </div>
    )
  }
}

export default App;