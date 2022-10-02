import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
// import mentor from '../Assets/images/mentor.png'

export default function Mentorship() {
  return (
    <div className="fluid-container">
        <Navbar/>
        <div className="row display-flex justify-content-center tp">MENTORSHIP</div>
        <div className="row display-flex justify-content-center">
        <div className="col-lg-9 col-sm-12 px-5 x">
        Mentors stand to gain the satisfaction of making a difference in a fledgling entrepreneur's life and contributing back to society. In addition, they also get to keep in touch with new technologies, people, and networks by working with the young entrepreneurs. Action plan teams come from different parts of the country and thus through this competition, mentors are able to get in touch with the local problems prevailing elsewhere in the country.

        </div>

        </div>
        <div className="row display-flex justify-content-center">
        <div className="col-lg-9 col-sm-12 px-5 py-5">
        As a mentor, you will not only guide students in developing an action plan of a particular social problem but also you will get an exposure of many social clashes and issues happening in different localities of India. You will be mentoring around 2-3 teams working in a sector that aligns with your field of work. The interaction with the teams will be online and the time invested would be around 1 to 2 hours per week. To know more, contact us.

        </div>

        </div>
        {/* <img src={mentor} alt="" srcset="" id='mentorbg'/> */}
        <div className="mentorbg">
          <div className="row display-flex justify-content-center bam ">
              BE A MENTOR!
          </div>

          <div className="row display-flex justify-content-center b">
                  <div className="col-lg-3 a"><Link className="bt" to="/mentor/register">Register Now</Link></div>
          </div>

        </div>
        <div className="row pt-3 outline">

        <Footer/>
        </div>
    </div>
  )
}
