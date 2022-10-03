import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


export default function Structure() {
  return (
    <div className="fluid-container">
        <Navbar/>
        <div className="structbg pb-5">

        
        <div className="upperrow1 desktop">
            <div className="col-lg-2 check">
                <div className="circle">1</div>
                <div className="event">AP Launch</div>
                <div className="date">3rd October</div>
                <div className="line"></div>
                <div className="triangle"></div>
            </div>
            <div className="col-lg-2 down"></div>
            <div className="col-lg-2 check">
                <div className="circle">3</div>
                <div className="event">Registration Deadline</div>
                <div className="date">28th October</div>
                <div className="line"></div>
                <div className="triangle"></div>
            </div>
            <div className="col-lg-2 down"></div>
            <div className="col-lg-2 check">
                <div className="circle">5</div>
                <div className="event">Round 1 Results</div>
                <div className="date">8th November</div>
                <div className="line"></div>
                <div className="triangle"></div>
            </div>
        </div>
        <div className="upperrow1 desktop">
            <div className="col-lg-2 ">              
            </div>
            <div className="col-lg-2 check2">
                <div className="inverted"></div>
                <div className="line2"></div>
                <div className="circle2">2</div>
                <div className="event">Workshops</div>
                <div className="date">8th - 28th October</div>

            </div>
            <div className="col-lg-2 ">
                
            </div>
            <div className="col-lg-2 check2">
                <div className="inverted"></div>
                <div className="line2"></div>
                <div className="circle2">4</div>
                <div className="event">Playbook Submission Deadline</div>
                <div className="date">28th October</div>

            </div>
            <div className="col-lg-2 side">
            </div>
            <div className="col-lg-2 otherside">
                <div className="arm">
                    <div className="horizontal"></div>
                    <div className="line3"></div>
                </div>
                <div className="fist">
                <div className="circle2">6</div>
                <div className="event">Mentor Allocation</div>
                <div className="date">11th November</div>
                </div>

            </div>
        </div>
        <div className="upperrow1 desktop">
            <div className="col-lg-2 down ">
                <div className="circle2">12</div>
                <div className="event">Results</div>
                <div className="date">22nd January</div>
                <div className="line2"></div>
                <div className="triangle2"></div>
            </div>
            <div className="col-lg-2 check"></div>
            <div className="col-lg-2 down">
                <div className="circle2">10</div>
                <div className="event">Final Round Submissions</div>
                <div className="date">15th January</div>
                <div className="line2"></div>
                <div className="triangle2"></div>
            </div>
            <div className="col-lg-2 check"></div>
            <div className="col-lg-2 down side2">
                <div className="circle2">8</div>
                <div className="event">Zonals Round 2 pitching</div>
                <div className="date">5th - 15th December</div>
                <div className="line2"></div>
                <div className="triangle2"></div>
            </div>
            <div className="col-lg-2 otherside">
                <div className="arm">
                    <div className="horizontal2"></div>
                    <div className="line4"></div>
                </div>
                <div className="fist">
                <div className="circle2">7</div>
                <div className="event">Advanced Entrepreneurship Workshops </div>
                <div className="date">16th November - 1st December</div>
                </div>

            </div>
        </div>
        <div className="upperrow1 desktop">
            <div className="col-lg-2 ">              
            </div>
            <div className="col-lg-2 check2">
                <div className="inverted2"></div>
                <div className="line"></div>
                <div className="circle">11</div>
                <div className="event">Final Closed Room Pitching (Social Fest)</div>
                <div className="date">21st January</div>

            </div>
            <div className="col-lg-2 ">
                
            </div>
            <div className="col-lg-2 check2">
                <div className="inverted2"></div>
                <div className="line"></div>
                <div className="circle">9</div>
                <div className="event">Round 2 Results</div>
                <div className="date">15th December</div>

            </div>
            
            
        </div>

        {/* mobile structure */}
        <div className="upperrow1 mobile">
            <div className="col-lg-2 otherside side2">
                <div className="arm col-3">
                    <div className="horizontal2"></div>
                    <div className="line4"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle">1</div>
                    <div className="event">AP Launch </div>
                    <div className="date">3rd October</div>

                </div>
                </div>

            </div>
            <div className="col-lg-2 otherside side">
                <div className="arm col-3">
                    <div className="horizontal"></div>
                    <div className="line3"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle2">2</div>
                    <div className="event">Workshops </div>
                    <div className="date">8th - 28th October</div>

                </div>
                </div>

            </div>            
            <div className="col-lg-2 otherside side2">
                <div className="arm col-3">
                    <div className="horizontal2"></div>
                    <div className="line4"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle">3</div>
                    <div className="event">Registration Deadline</div>
                    <div className="date">28th October</div>

                </div>
                </div>

            </div>
            <div className="col-lg-2 otherside side">
                <div className="arm col-3">
                    <div className="horizontal"></div>
                    <div className="line3"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle2">4</div>
                    <div className="event">Playbook Submission Deadline </div>
                    <div className="date">28th October</div>

                </div>
                </div>

            </div>            
            <div className="col-lg-2 otherside side2">
                <div className="arm col-3">
                    <div className="horizontal2"></div>
                    <div className="line4"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle">5</div>
                    <div className="event">Round 1 Results </div>
                    <div className="date">8th November</div>

                </div>
                </div>

            </div>
            <div className="col-lg-2 otherside side">
                <div className="arm col-3">
                    <div className="horizontal"></div>
                    <div className="line3"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle2">6</div>
                    <div className="event">Mentor Allocation</div>
                    <div className="date">11th November</div>

                </div>
                </div>

            </div>            
            <div className="col-lg-2 otherside side2">
                <div className="arm col-3">
                    <div className="horizontal2"></div>
                    <div className="line4"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle">7</div>
                    <div className="event">Advanced Entrepreneurship Workshops </div>
                    <div className="date">16th November - 1st December</div>

                </div>
                </div>

            </div>
            <div className="col-lg-2 otherside side">
                <div className="arm col-3">
                    <div className="horizontal"></div>
                    <div className="line3"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle2">8</div>
                    <div className="event">Zonals Round 2 pitching </div>
                    <div className="date">5th - 15th December</div>

                </div>
                </div>

            </div>            
            <div className="col-lg-2 otherside side2">
                <div className="arm col-3">
                    <div className="horizontal2"></div>
                    <div className="line4"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle">9</div>
                    <div className="event">Round 2 Results</div>
                    <div className="date">15th December</div>

                </div>
                </div>

            </div>
            <div className="col-lg-2 otherside side">
                <div className="arm col-3">
                    <div className="horizontal"></div>
                    <div className="line3"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle2">10</div>
                    <div className="event">Final Round Submissions </div>
                    <div className="date">15th January</div>

                </div>
                </div>

            </div>            
            <div className="col-lg-2 otherside side2">
                <div className="arm col-3">
                    <div className="horizontal2"></div>
                    <div className="line4"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle">11</div>
                    <div className="event">Final Closed Room Pitching (Social Fest)</div>
                    <div className="date">21st January</div>

                </div>
                </div>

            </div>
            <div className="col-lg-2 otherside side">
                <div className="arm col-3">
                    <div className="horizontal"></div>
                    <div className="line3"></div>
                </div>
                <div className="col-9 acf">
                    <div className="fist">
                    <div className="circle2">12</div>
                    <div className="event">Results</div>
                    <div className="date">22nd January</div>
                </div>
                </div>

            </div>            
        </div>

        </div>
        
        <div className="row pt-3  outline">

        <Footer/>
        </div>
    </div>
    
  )
}
