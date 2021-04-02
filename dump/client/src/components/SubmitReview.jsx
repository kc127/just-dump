import React from 'react';
import axios from 'axios';

class SubmitReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cleanliness: "",
      recommend: "",
      time: "",
      comments: "",
      isSubmitted: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    const review = {};
    review['cleanliness'] = this.state.cleanliness;
    review['recommend'] = this.state.recommend;
    review['time'] = this.state.time;
    review['comments'] = this.state.comments;
    axios.post('/review', review)
      .then((res) => {
        console.log('review successfully saved');
      })
      .catch((err) => {
        console.log('error positing review')
      })
    this.setState({
      isSubmitted: !this.state.isSubmitted
    })
  }

  render() {
    if (this.state.isSubmitted === false) {
    return (
      <div className="review">
        <h5>Tell us about your experience</h5>
        <form onSubmit={this.handleSubmit}>
        <div className="options">
        <label>Was the Bathroom clean?🛁</label>
        <select className="cleanliness" name="cleanliness" value={this.state.cleanliness} onChange={this.handleChange}>
          <option value="Super Clean">Super Clean</option>
          <option value="Clean">Clean</option>
          <option value="Okay">Okay</option>
          <option value="Eww">Eww</option>
          <option value="Yuck">Yuck</option>
        </select>
        </div>
        <div className="options">
        <label>Would you recommend this bathroom to others?</label>
        <select className="cleanliness" name="recommend" value={this.state.recommend} onChange={this.handleChange}>
          <option value="Nah">No</option>
          <option value="Yes">Yes</option>
          <option value="I don't know">I don't know</option>
        </select>
        </div>
        <div className="options">
        <label>How long was the wait?</label>
        <select className="cleanliness" name="time" value={this.state.time} onChange={this.handleChange}>
          <option selected value="one minute">Less than a minute</option>
          <option value="more than 15 minutes">More than 15 minutes</option>
          <option value="two hours">2 hours</option>
        </select>
        <div className="options">
        <textarea name="comments" value={this.state.comments} onChange={this.handleChange}>Leave any comments</textarea>
        </div>
        </div>
        <button>Done</button>
        </form>
        </div>
    )
        } else {
          return (
              <div>Thank you for your review!</div>
          )
        }

  }
}

export default SubmitReview;