import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import nabard from '../Assets/images/nabard.jpeg'
import Servo from '../Assets/images/servo.jpg'
import cio from '../Assets/images/cio.jpg'
import sup from '../Assets/images/sup.jpg'
import yinc from '../Assets/images/yinc.jpg'
import asem from '../Assets/images/asem.png'
import ba from '../Assets/images/ba.png'
import getuni from '../Assets/images/getuni.png'
import east from '../Assets/images/east.png'
import tgh from '../Assets/images/tgh.png'
import desi from '../Assets/images/desi.png'
import ed from '../Assets/images/ed.png'
import aic from '../Assets/images/ip/aic.png'
import eight from '../Assets/images/ip/eight.jpg'
import elev from '../Assets/images/ip/elev.jpg'
import fitt from '../Assets/images/ip/fitt.png'
import five from '../Assets/images/ip/five.png'
import four from '../Assets/images/ip/four.jpg'
import nine from '../Assets/images/ip/nine.png'
import one from '../Assets/images/ip/one.jpg'
import seven from '../Assets/images/ip/seven.png'
import six from '../Assets/images/ip/six.jpg'
import teen5 from '../Assets/images/ip/teen5.jpg'
import teen8 from '../Assets/images/ip/teen8.png'
import teen7 from '../Assets/images/ip/teen7.png'
import teen9 from '../Assets/images/ip/teen9.png'
import ten from '../Assets/images/ip/ten.png'
import tewl from '../Assets/images/ip/tewl.png'
import tha from '../Assets/images/ip/tha.png'
import three from '../Assets/images/ip/three.jpg'
import tim from '../Assets/images/ip/tim.jpg'
import two from '../Assets/images/ip/two.jpg'





export default function Sponsor() {
  return (
    <div className="fluid-container">
        <Navbar/>
        <div className="row display-flex justify-content-center tp">SPONSORS</div>
            <div className="row display-flex justify-content-center">
                <div className="col-lg-4 spbg">
                    <img src={nabard} alt="" srcset="" className="spchild"/>
                </div>
                <div className="col-lg-4 spbg">
                    <img src={Servo} alt="" srcset="" className="spchild"/>
                </div>
                <div className="col-lg-4 spbg" >
                    IDF
                </div>
            </div>
            <div className="row display-flex justify-content-center">
            Powered By
            </div>
            <div className="row display-flex justify-content-center">
                {/* <div className="col-lg-4"> */}
                The Univation
                {/* </div> */}
            </div>

        {/* <div className="row display-flex justify-content-center tp">PARTNERS</div> */}
        

        <div className="row display-flex justify-content-center tp">Incubation Partners</div>

        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-a"><img className="spchild" style={{backgroundColor:"white"}} src={aic} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={eight} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={elev} alt="" srcset="" /></div>
        </div>
        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={fitt} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={five} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={four} alt="" srcset="" /></div>
        </div>
        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={nine} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={one} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={seven} alt="" srcset="" /></div>
        </div>
        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={six} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={teen5} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={teen7} alt="" srcset="" /></div>
        </div>
        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-a"><img style={{backgroundColor:"white"}} className="spchild" src={teen8} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img style={{backgroundColor:"white"}} className="spchild" src={teen9} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img  className="spchild" src={ten} alt="" srcset="" /></div>
        </div>
        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={tewl} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img style={{backgroundColor:"white"}} className="spchild" src={tha} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={three} alt="" srcset="" /></div>
        </div>
        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={tim} alt="" srcset="" /></div>
            <div className="col-lg-4 spbg filter-a"><img className="spchild" src={two} alt="" srcset="" /></div>
            {/* <div className="col-lg-4 spbg filter-a"><img src={elev} alt="" srcset="" /></div> */}
        </div>


        <div className="row display-flex justify-content-center tp">Investment Partners</div>

        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-b">IP 1</div>
            <div className="col-lg-4 spbg filter-b">IP 2</div>
            <div className="col-lg-4 spbg filter-b">IP 3</div>
        </div>

        <div className="row display-flex justify-content-center tp">Media Partners</div>

        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-c">
                
                <img src={cio} alt="" srcset="" className="spchild" id='cio' />

                
            </div>
            <div className="col-lg-4 spbg filter-c">
                
                <img src={sup} alt="" srcset="" className="spchild" id='sup'/>

                
            </div>
            <div className="col-lg-4 spbg filter-c">
                
                <img src={yinc} alt="" srcset="" className="spchild" id='yinc' />

                
            </div>
            <div className="col-lg-4 spbg filter-c">
                
                <img src={asem} alt="" srcset="" className="spchild" id='asem'/>

                
            </div>
            <div className="col-lg-4 spbg filter-c">
                
                <img src={ba} alt="" srcset="" className="spchild" id='asem' />

                
            </div>
            <div className="col-lg-4 spbg filter-c">
                
                <img src={getuni} alt="" srcset="" className="spchild" id='gu'/>

                
            </div> 
            <div className="col-lg-4 spbg filter-c">
                
                <img src={east} alt="" srcset="" className="spchild"/>

                
            </div>
            <div className="col-lg-4 spbg filter-c">
                
                <img src={tgh} alt="" srcset="" className="spchild"/>

                
            </div>
            <div className="col-lg-4 spbg filter-c">
                
                <img src={desi} alt="" srcset="" className="spchild"/>

                
            </div>
            <div className="col-lg-4 spbg filter-c">
                
                <img src={ed} alt="" srcset="" style={{backgroundColor:"white"}} className="spchild"/>

                
            </div>
        </div>

        <div className="row display-flex justify-content-center tp">Outreach Partners</div>

        <div className="row display-flex justify-content-center">
            <div className="col-lg-4 spbg filter-a">OR 1</div>
            <div className="col-lg-4 spbg filter-a">OR 2</div>
            <div className="col-lg-4 spbg filter-a">OR 3</div>
        </div>

        <div className="out">

        <Footer/>
        </div>
    </div>

  )
}
