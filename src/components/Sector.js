import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import fo from '../Assets/images/fo.png'
import fto from '../Assets/images/fto.png'
import fth from '../Assets/images/fth.png'
import ffo from '../Assets/images/ffo.png'
import ffi from '../Assets/images/ffi.png'
import fs from '../Assets/images/fs.png'


export default function Sector() {
  return (
    <div className="fluid-container">
        <Navbar/>
        <div className="row px-3 trackdesk">
          <div className="col-lg-2  bgt" id='one'>
            {/* <div className="child1">
             <img src={fo} alt="" srcset="" />
            </div> */}
             
          </div>
          <div className="col-lg-2 bgt " id='two' >
            {/* <div className="child2">
             <img src={fto} alt="" srcset="" />
            </div> */}

          </div>
          <div className="col-lg-2 bgt" id='three'>
            {/* <div className="child3">
             <img src={fth} alt="" srcset="" />
            </div> */}

          </div>
          <div className="col-lg-2 bgt" id='four'>
            {/* <div className="child4">
             <img src={ffo} alt="" srcset="" />
            </div> */}

          </div>
          <div className="col-lg-2 bgt" id='five'>
            {/* <div className="child5">
             <img src={ffi} alt="" srcset="" />
            </div> */}

          </div>
          <div className="col-lg-2 bgt" id='six'>
            {/* <div className="child6">
             <img src={fs} alt="" srcset="" />
            </div> */}

          </div>
        </div>  

        <div className="trackmob">
          <div className="row display-flex justify-content-center xh">
          <div className="col-sm-6  bgt" id='one'>
            {/* <div className="child1">
             <img src={fo} alt="" srcset="" />
            </div> */}
             
          </div>
          </div>
          <div className="row display-flex justify-content-center xh">
          <div className="col-sm-6  bgt" id='two'>
            {/* <div className="child1">
             <img src={fo} alt="" srcset="" />
            </div> */}
             
          </div>
          </div>
          <div className="row display-flex justify-content-center xh">
          <div className="col-sm-6  bgt" id='three'>
            {/* <div className="child1">
             <img src={fo} alt="" srcset="" />
            </div> */}
             
          </div>
          </div>
          <div className="row display-flex justify-content-center xh">
          <div className="col-sm-6  bgt" id='four'>
            {/* <div className="child1">
             <img src={fo} alt="" srcset="" />
            </div> */}
             
          </div>
          </div>
          <div className="row display-flex justify-content-center xh">
          <div className="col-sm-6  bgt" id='five'>
            {/* <div className="child1">
             <img src={fo} alt="" srcset="" />
            </div> */}
             
          </div>
          </div>
          <div className="row display-flex justify-content-center xh">
          <div className="col-sm-6  bgt" id='six'>
            {/* <div className="child1">
             <img src={fo} alt="" srcset="" />
            </div> */}
             
          </div>
          </div>
        </div>
      <div className="out">
        <Footer/>
      </div>
    </div>
  )
}
