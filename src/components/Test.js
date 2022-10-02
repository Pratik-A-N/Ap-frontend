import React , {useState} from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";
import Navbar from "./Navbar";
import { Link , useNavigate} from "react-router-dom";
import Footer from "./Footer";

export default function Test() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
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
      console.log(user);
      axios.post(API_URL, user)
      .then((response) =>{
        if(response.status == 201){
          console.log("success");
          navigate("/submitted");
        }
        else{
          console.log(response.data.error);
          let x = document.getElementById("loading");
          x.style.display = 'none';
          let y = document.getElementById("afterload");
          y.style.display = 'block';
          let z = document.getElementById("danger");
          z.style.display = 'flex';
          let w = document.getElementById("msgtext");
          w.innerText = response.data.error
        }
      })
      .catch((error)=>{
        let x = document.getElementById("loading");
          x.style.display = 'none';
          let y = document.getElementById("afterload");
          y.style.display = 'block';
          let z = document.getElementById("danger");
          z.style.display = 'flex';
          let w = document.getElementById("msgtext");
          w.innerText = "Error! Please try again"
      })
    };

    // const onClick = (e) =>{
      
    // }

    

  return (
    <div>
    <div class="alert alert-danger w-100 display-flex justify-content-spacearound" id="danger" role="alert" >
      <span id="msgtext"></span>
      <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div className="fluid-container">
        <Navbar/>
        <div className="row display-flex justify-content-center tp">Register</div>
      <div className="row display-flex justify-content-center">
        <div className="col-lg-5 px-5">

       
      <Form onSubmit={(e) => {handleSubmit(e)}} >
        <FormGroup>
          <Label for="name">Team Name:</Label>
          <Input
            type="text"
            name="teamname"
            onChange={(e) =>{onChange(e)}}
            value={user.teamname}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="member1">Member 1 Name:</Label>
          <Input
            type="text"
            name="member1"
            onChange={(e) =>{onChange(e)}}
            value={user.member1}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 1 Email:</Label>
          <Input
            type="email"
            name="email1"
            onChange={(e) =>{onChange(e)}}
            value={user.email1}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="member1">Member 2 Name:</Label>
          <Input
            type="text"
            name="member2"
            onChange={(e) =>{onChange(e)}}
            value={user.member2}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 2 Email:</Label>
          <Input
            type="email"
            name="email2"
            onChange={(e) =>{onChange(e)}}
            value={user.email2}
          />
        </FormGroup><FormGroup>
          <Label for="member1">Member 3 Name:</Label>
          <Input
            type="text"
            name="member3"
            onChange={(e) =>{onChange(e)}}
            value={user.member3}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 3 Email:</Label>
          <Input
            type="email"
            name="email3"
            onChange={(e) =>{onChange(e)}}
            value={user.email3}
          />
        </FormGroup><FormGroup>
          <Label for="member1">Member 4 Name:</Label>
          <Input
            type="text"
            name="member4"
            onChange={(e) =>{onChange(e)}}
            value={user.member4}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Member 4 Email:</Label>
          <Input
            type="email"
            name="email4"
            onChange={(e) =>{onChange(e)}}
            value={user.email4}
          />
        </FormGroup>
        <div className="extbt">
        <Button className="bt1">
          <span class="spinner-border spinner-border-sm " id="loading" role="status" aria-hidden="true"></span>
          <span id="afterload">Register</span>
        </Button>
        {/* <button class="btn btn-primary" type="button" >
          Loading...
        </button> */}
        <p>Already Registered ? <Link to="/login">Login</Link></p>
        </div>
      </Form>
      </div>
      </div>
      <Footer/>
      </div>
      </div>
  )
}
