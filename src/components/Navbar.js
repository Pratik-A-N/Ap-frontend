import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import logo from "../Assets/images/logo.png"



export default function Navbar() {
  return (
    <div class="row z">
    <nav class="navbar navbar-expand-lg " >
      <div class="container-fluid">
              <a class="navbar-brand" href="https://abhyudayiitb.org" target="/"> <img src={logo} alt="" /> </a>
              <button class="navbar-toggler" style={{background: "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li class="nav-item tabs">
                    <Link class="nav-link active " aria-current="page" to="/" style={{color:"white"}}>Home</Link>
                  </li>
                  <li class="nav-item tabs">
                    <Link class="nav-link active " to="/rules" style={{color:"white"}}>Rules</Link>
                  </li>
                  <li class="nav-item tabs">
                    <Link class="nav-link active " to="/mentorship" style={{color:"white"}}>Mentorships</Link>
                  </li>
                  <li class="nav-item tabs">
                    <Link class="nav-link active " to="/sector" style={{color:"white"}}>Tracks</Link>
                  </li>
                  <li class="nav-item tabs">
                    <Link class="nav-link active " to="/incentive" style={{color:"white"}}>Incentives</Link> 
                  </li>
                  <li class="nav-item tabs">
                    <Link class="nav-link active " to="/structure" style={{color:"white"}}>Structure</Link>
                  </li>
                  <li class="nav-item tabs">
                    <Link class="nav-link active " to="/sponsor" style={{color:"white"}}>Sponsors & Partners</Link>
                  </li>
                  <li class="nav-item tabs">
                    <Link class="nav-link active " to="/contact" style={{color:"white"}}>Contact us</Link>
                  </li>
                </ul>
                
              </div>
            </div>
          </nav>

    </div>
  )
}
