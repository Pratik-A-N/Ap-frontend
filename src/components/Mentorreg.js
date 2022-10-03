import React ,{ useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {  useNavigate } from "react-router-dom";

// import { API_URL } from "../constants";
const API_URL = "https://cr.abhyudayiitb.org/api/mentor";
// const API_URL = "http://localhost:8000/api/mentor";



export default function Mentorreg() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    pk: 0,
    name:"",
    email:"",
    contact:"",
    firm:"",
    desig:"",
  })

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =>{
    let x = document.getElementById("loading");
      x.style.display = 'block';
      let y = document.getElementById("afterload");
      y.style.display = 'none';
    e.preventDefault();
    // console.log(user);
    axios.post(API_URL, user)
    .then((response) =>{
      console.log(response);
      if(response.status == 201){
        console.log("success");
        navigate("/mentorreg");
        let z = document.getElementById("success");
        z.style.display = 'flex';
        let x = document.getElementById("loading");
        x.style.display = 'none';
        let y = document.getElementById("afterload");
        y.style.display = 'block';
      }
    })
    .catch((error)=>{
      console.log(error);
      let x = document.getElementById("loading");
      x.style.display = 'none';
      let y = document.getElementById("afterload");
      y.style.display = 'block';
      let z = document.getElementById("danger");
      z.style.display = 'flex';
    })
  };

  return (
    <div>
    <div class="alert alert-success w-100 display-flex justify-content-spacearound" id="success" role="alert" >
      Submitted Successfully !
      <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-danger w-100 display-flex justify-content-spacearound" id="danger" role="alert" >
      Error ! Please try again
      <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div className="fluid-container">
        <Navbar/>
        <div className="row display-flex justify-content-center tp">Mentor Registration</div>
        <div className="row display-flex justify-content-center">
          <div className="col-lg-5 px-5">
            <Form onSubmit={(e) => {handleSubmit(e)}}>
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                  type="text"
                  name="name"
                  onChange={(e) =>{onChange(e)}}
                  value={user.name}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={(e) =>{onChange(e)}}
                  value={user.email}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Contact:</Label>
                <Input
                  type="phone"
                  name="contact"
                  onChange={(e) =>{onChange(e)}}
                  value={user.contact}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Firm / Company Name:</Label>
                <Input
                  type="text"
                  name="firm"
                  onChange={(e) =>{onChange(e)}}
                  value={user.firm}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Designation:</Label>
                <Input
                  type="text"
                  name="desig"
                  onChange={(e) =>{onChange(e)}}
                  value={user.desig}
                  required
                />
              </FormGroup>
              <div className="extbt">
              <Button className="bt1">
                <span class="spinner-border spinner-border-sm " id="loading" role="status" aria-hidden="true"></span>
                <span id="afterload">Register</span>
              </Button>

              </div>
            </Form>
            <Footer/>
          </div>
        </div>
      </div>
    </div>

  )
}

