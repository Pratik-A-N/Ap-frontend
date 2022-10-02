import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Submitted() {
  return (
    <div className="fluid-container">
      <Navbar/>
      <div className="row display-flex justify-content-center tp tps">Thanks for forming a team login credentials are sent to your Registered emails!</div>
      <div className="extbt">
        <p><Link to="/login" style={{color :"blue" , fontSize:"2vh"}}>Login</Link> to your Account </p>
        </div>
    </div>
  )
}
