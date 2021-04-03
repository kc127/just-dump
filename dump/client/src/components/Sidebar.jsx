import React from 'react';
import { BiAccessibility, BiFemale, BiMale } from "react-icons/bi";
import {  FaRestroom, FaShower, FaTransgenderAlt } from 'react-icons/fa';
import {  GrRestroomMen, GrRestroomWomen, GrRestroom } from 'react-icons/gr';
import { RiHandSanitizerLine } from 'react-icons/ri';
import { GiBandageRoll } from 'react-icons/gi';


class Sidebar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      status: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log(event.target.name)
    this.props.getStatus(event.target.name);
  }

  render(){
    return(
      <div className="sidebar">
        <div className="browserestrooms">Find and Save the Best Restrooms near you</div>
        <div className="box">
        <button className="smallBox" name="accessibility" onClick={this.handleChange}>
        <BiAccessibility className="icons" size={50} />
        </button>
        <button className="smallBox" name="unisex" onClick={this.handleChange}>
        <FaRestroom className="icons" size={50}/>
        </button>
        <button className="smallBox" name="men" onClick={this.handleChange}>
          <BiMale className="icons" size={50}/>
        </button>
        <button className="smallBox" name="women" onClick={this.handleChange}>
            <BiFemale className="icons" size={50}/>
        </button>
        <button className="smallBox" name="shower" onClick={this.handleChange}>
            {/* <FaShower className="icons" size={50}/> */}
            <FaTransgenderAlt className="icons" size={50}/>
        </button>
        <button className="smallBox" name="roll" onClick={this.handleChange}>
            <GiBandageRoll className="icons" size={50}/>
            {/* <FaTransgenderAlt className="icons" size={50}/> */}
        </button>
        <button className="smallBox" name="sanitizer" onClick={this.handleChange}>
         <RiHandSanitizerLine className="icons" size={50}/>
        </button>
        </div>
      </div>
    )
  }
}

export default Sidebar;