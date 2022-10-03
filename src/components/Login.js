import React ,{ useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link , useNavigate } from "react-router-dom";

// import { API_URL } from "../constants";
const API_URL = "https://cr.abhyudayiitb.org/api/login";
// const API_URL = "http://localhost:8000/api/login";



export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    pk: 0,
    username: "",
    password: "",
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
      if(response.status == 200){
        console.log("success");
        navigate("/session");
      }
    })
    .catch((error)=>{
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
    <div class="alert alert-danger w-100 display-flex justify-content-spacearound" id="danger" role="alert" >
      Wrong Creddentials!
      <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div className="fluid-container">
        <Navbar/>
        <div className="row display-flex justify-content-center tp">Login</div>
        <div className="row display-flex justify-content-center">
          <div className="col-lg-5 px-5">
            <Form onSubmit={(e) => {handleSubmit(e)}}>
              <FormGroup>
                <Label for="name">Username:</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={(e) =>{onChange(e)}}
                  value={user.username}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="member1">Password:</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={(e) =>{onChange(e)}}
                  value={user.password}
                  required
                />
              </FormGroup>
              <div className="extbt">
              <Button className="bt1">
                <span class="spinner-border spinner-border-sm " id="loading" role="status" aria-hidden="true"></span>
                <span id="afterload">Login</span>
              </Button>
              <p>Not Registered Already ? <Link to="/signup">Register</Link></p>

              </div>
            </Form>
            <Footer/>
          </div>
        </div>
      </div>
    </div>

  )
}

