import React from 'react';
import PopUp from './PopUp.jsx';

class CurrentLocation extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      clicked: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    if(this.state.clicked){
      return(<PopUp />
      )


    } else {
      return(
        <button className="currLoc" onClick={this.handleClick}>Want to host your bathroom?</button>
      )
    }
  }
};

export default CurrentLocation;

/* browser's built in function : to check if the browser has a geolocation*/