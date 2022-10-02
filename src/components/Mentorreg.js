import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

// import { API_URL } from "../constants";
import Navbar from './Navbar';
import Footer from './Footer'
// import { Link } from "react-router-dom";

const API_URL = "";

class Mentorreg extends React.Component {
  state = {
    pk: 0,
    name: "",
    email: "",
    contact:"",
    cname: "",
    designation:"",
    
  };

  componentDidMount() {
    if (this.props.student) {
      const {
            pk,
            name,
            email,
            contact,
            cname,
            designation,
        } = this.props.student;
      this.setState({ 
          pk, 
          name,
          email,
          contact,
          cname,
          designation,
        });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editStudent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <div className="fluid-container">
        <Navbar/>
        <div className="row display-flex justify-content-center tp">Register</div>
      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 px-5">

       
      <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Contact:</Label>
          <Input
            type="phone"
            name="contact"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup><FormGroup>
          <Label for="member1">Firm Name:</Label>
          <Input
            type="text"
            name="cname"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Designation</Label>
          <Input
            type="text"
            name="designation"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <div className="extbt">
        <Button className="bt1">Register</Button>
        </div>
      </Form>
      </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Mentorreg;