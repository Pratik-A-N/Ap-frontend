import React  from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";
import Navbar from './Navbar';
import Footer from './Footer'
import { Link} from "react-router-dom";
// import { useNavigate } from 'react-router-dom'



class Signup extends React.Component {
  
  state = {
    pk: 0,
    teamname: "",
    member1: "",
    email1:"",
    member2: "",
    email2:"",
    member3: "",
    email3:"",
    member4: "",
    email4:"",
    
  };

  componentDidMount() {
    if (this.props.student) {
      const {
           pk, 
           teamname,
            member1,
            email1,
            member2,
            email2,
            member3,
            email3,
            member4,
            email4
        } = this.props.student;
      this.setState({ 
          pk, 
          teamname, 
          member1,
          email1,
          member2,
          email2,
          member3,
          email3,
          member4,
          email4
        });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

 

  createStudent = e => {
    e.preventDefault();
    
    axios.post(API_URL, this.state)
    .then((response) =>{
      // console.log(response.status);
      if (response.status == 201) {
        console.log("success");
      }
    })
    
    
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

       
      <Form onSubmit={this.createStudent} >
        <FormGroup>
          <Label for="name">Team Name:</Label>
          <Input
            type="text"
            name="teamname"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="member1">Member 1 Name:</Label>
          <Input
            type="text"
            name="member1"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 1 Email:</Label>
          <Input
            type="email"
            name="email1"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="member1">Member 2 Name:</Label>
          <Input
            type="text"
            name="member2"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 2 Email:</Label>
          <Input
            type="email"
            name="email2"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup><FormGroup>
          <Label for="member1">Member 3 Name:</Label>
          <Input
            type="text"
            name="member3"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 3 Email:</Label>
          <Input
            type="email"
            name="email3"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup><FormGroup>
          <Label for="member1">Member 4 Name:</Label>
          <Input
            type="text"
            name="member4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 4 Email:</Label>
          <Input
            type="email"
            name="email4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <div className="extbt">
            <div className="bt1" >
                Add More Members
            </div>
        </div>
        <div id="newmemb">
        <FormGroup>
          <Label for="member1">Member 4 Name:</Label>
          <Input
            type="text"
            name="member4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 4 Email:</Label>
          <Input
            type="email"
            name="email4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="member1">Member 4 Name:</Label>
          <Input
            type="text"
            name="member4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 4 Email:</Label>
          <Input
            type="email"
            name="email4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="member1">Member 4 Name:</Label>
          <Input
            type="text"
            name="member4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 4 Email:</Label>
          <Input
            type="email"
            name="email4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="member1">Member 4 Name:</Label>
          <Input
            type="text"
            name="member4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 4 Email:</Label>
          <Input
            type="email"
            name="email4"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        </div>
        <div className="extbt">
        <Button className="bt1">Register</Button>
        <p>Already Registered ? <Link to="/login">Login</Link></p>
        </div>
      </Form>
      </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Signup;