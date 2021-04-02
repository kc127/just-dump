import React from 'react';

class Form1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      continue: false,
      placeLocation: ""
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  handleChange(){
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  nextPage(event){
    event.preventDefault();
    this.setState({
      continue:!this.state.continue
    })
  }

  render(){
    if(this.state.continue) {
      return(
        <Form2 />
      )
    } else {
      return(
        <div className="host-form">
          <h2>Let's get started listing your bathroom</h2>
          <label>Where is your place located </label>
          <input type="text" name="placeLocation" value={this.state.placeLocation} onChange={this.handleChange}></input>
          <button onClick={this.nextPage} type="submit">Next</button>
        </div>
      )
    }
  }
}

export default Form1;