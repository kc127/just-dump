import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '25%',
    left                  : '50%',
    right                 : '50%',
    bottom                : '50%',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement(document.getElementById('app'));

class PopUp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showDescription: false,
      placeLocation: "",
      location: "",
      preference: "",
      location: "",
      preference: ""
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleChange(){
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOpenModal(){
    this.setState({
      showDescription: true
    })
  }

  handleCloseModal(){
    this.setState({
      showDescription: false
    })
  }


  render(){
    return(
      <div>
        <button className="currLoc" onClick={this.handleOpenModal}>Want to host your bathroom?</button>
        <Modal isOpen={this.state.showDescription}>

        <h2>Let's get started</h2>
        <div className="questions">
        <label>Where is your place located </label>
          <input type="text" name="placeLocation" value={this.state.placeLocation} onChange={this.handleChange}></input>
          <label>How many people can use your bathroom?</label>
          <input type="text" name="people" value={this.state.people} onChange={this.handleChange}></input>
          <label>Do you have any preference?</label>
          <input type="text" name="preference" value={this.state.preference} onChange={this.handleChange}></input>
          <label>How many people can use your bathroom?</label>
          <input type="text" name="people" value={this.state.people} onChange={this.handleChange}></input>
          <label>Is there a fee?</label>
          <input type="text" name="preference" value={this.state.preference} onChange={this.handleChange}></input>
          </div>
        <button className="submitBtn" onClick={this.handleCloseModal}>Submit!</button>
        </Modal>
      </div>
    )
  }
}

export default PopUp;