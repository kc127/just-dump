import React from 'react';
import App from './App.jsx';
import { GrRestroom } from 'react-icons/gr';
import Gallery from './Gallery.jsx';
import LiveMap from './LiveMap.jsx';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      next: false
    }

    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    this.setState({
      next: !this.state.next
    })
  }

  render() {
    if (this.state.next) {
      return (
        <App />
      )
    } else {
      return (
        <div>
          <div className="logo">
          <GrRestroom className="icons" size={30} onClick={this.nextPage} />JUST DUMP
          </div>
          <Gallery />
        </div>
      )
    }
  }
}

export default LandingPage;