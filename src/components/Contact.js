import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import contbg from '../Assets/images/contbg.png'
import call from '../Assets/images/call.png'
import visit from '../Assets/images/visit.png'
import write from '../Assets/images/write.png'
import { Button, Input} from "reactstrap";


export default function Contact() {
  
  return (
    <div className="fluid-container">
        <Navbar/>
        {/* <img src={contbg} alt="" srcset="" id='contbg'/> */}
        <div className="row disply-flex justify-content-center cg">
          <div className="col-lg-7 mt-5">
            <div className="row display-flex justify-content-center align-items-center">
                <img src={write} alt="" srcset="" className='writ' /> <h3 style={{display:"contents"}} ><b>WRITE TO US!</b></h3> 
            </div>
            <div className="row display-flex justify-content-center">
              <div className="col-lg-9 px-5">
                <div className='py-3'>
                <label htmlFor="">Your Name:</label>
                <Input
                  type="text"
                  name="teamname"
                  // onChange={this.onChange}
                  // value={this.defaultIfEmpty(this.state.name)}
                />

                </div>
                <div className='py-3'>
                <label htmlFor="">Email:</label>
                <Input
                  type="email"
                  name="email"
                  // onChange={this.onChange}
                  // value={this.defaultIfEmpty(this.state.name)}
                />

                </div>
                <div className='py-3'>
                <label htmlFor="">Contact:</label>
                <Input
                  type="phone"
                  name="contact"
                  // onChange={this.onChange}
                  // value={this.defaultIfEmpty(this.state.name)}
                />

                </div>
                <div className='py-3'>
                <label htmlFor="">Message:</label>
                <Input
                  type="text"
                  name="message"
                  // onChange={this.onChange}
                  // value={this.defaultIfEmpty(this.state.name)}
                />

                </div>
                <div className="extbt">
                <Button className="bt1">Send</Button>
                </div>
                </div>

              </div>
          </div>
          <div className="col-lg-5 mt-5">
            <div className="row display-flex justify-content-center sd">
            VISIT US!
            {/* <img src={visit} alt="" srcset="" className='writ' />  */}
            {/* <h3 style={{display:"contents"}} ><b>VISIT US!</b></h3>  */}
            </div>
            <div className="row pb-3 cc">
              <div className="col-lg-2 ">

              </div>
              <div className="col-lg-10 w-50 vad">
                <h4>Abhyuday Office, Student Activity Center, (SAC) IIT Bombay - 400076</h4>

              </div>
            </div>
            <div className="row display-flex justify-content-center sd">
            GIVE US A CALL!
            {/* <img src={call} alt="" srcset="" className='writ' /> */}
             {/* <h3 style={{display:"contents"}} ><b>GIVE US A CALL!</b></h3>  */}
            </div>
            <div className="row pb-2 cc">
              <div className="col-lg-2 ">

              </div>
              <div className="col-lg-10 w-50 vad">
                <h4><b>Achira Jain</b></h4>
                <h4>Competitions Manager</h4>
                <h4>+91 70233 24101</h4>
              </div>
            </div>
            <div className="row pb-2 cc">
              <div className="col-lg-2 ">

              </div>
              <div className="col-lg-10 w-50 vad">
                <h4><b>Chirag S.</b></h4>
                <h4>Competitions Manager</h4>
                <h4>+91 80730 82919</h4>
              </div>
            </div>
            <div className="row cc" >
              <div className="col-lg-2 ">

              </div>
              <div className="col-lg-10 w-50 vad">
                <h4><b>Yash Saraogi</b></h4>
                <h4>Competitions Manager</h4>
                <h4>+91 86028 61690</h4>
              </div>
            </div>
            {/* <div className="row display-flex align-items-center ">
            </div>
            <div className="row f">
              <div className="col-lg-6">

              </div>
            </div>
            <div className="row py-5 display-flex align-items-center">
            <img src={call} alt="" srcset="" className='ca'/>
            </div> */}
          </div>
        </div>
         
          
          
            
        <Footer/>
    </div>
  )
}
