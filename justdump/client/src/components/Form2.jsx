import React from 'react';

class Form2 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      continue: false,
      location: "",
      preference: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <Form3 />
      )
    } else {
      return(
        <div className="host-form">
          <h2>Tell us more about your place.</h2>
          <label>How many people can use your bathroom?</label>
          <input type="text" name="people" value={this.state.people} onChange={this.handleChange}></input>
          <label>Do you have any preference</label>
          <input type="text" name="preference" value={this.state.preference} onChange={this.handleChange}></input>
          <button onClick={this.nextPage} type="submit">Continue</button>
        </div>
      )
    }
  }
}

export default Form2;