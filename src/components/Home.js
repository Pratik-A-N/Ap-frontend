import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import apl from '../Assets/images/apl.png'
import cash from '../Assets/images/cash.png'
import metor from '../Assets/images/metor.png'
import workshop from '../Assets/images/workshop.png'
import network from '../Assets/images/network.png'
// import Group from '../Assets/images/Group.png'
// import Group2 from '../Assets/images/Group2.png'


export default function Home() {
  return (
    <div className="fluid-container">
      <div className="homeimg">
        <div className="pg1">
            <Navbar/>
            <div className="row display-flex justify-content-center">
              <img src={apl} alt="" srcset="" className='spchil' />
            </div>
            <div className="row display-flex justify-content-center ap animated animatedFadeInUp fadeInUp">
                Action Plan
            </div>
            <div className="row display-flex justify-content-center taged  animated animatedFadeInUp fadeInUp">
                Asia's fastest growing
            </div>
            <div className="row display-flex justify-content-center tagline animated animatedFadeInUp fadeInUp">
                Social Entrepreneurship Competition
            </div>
            <div className="row display-flex justify-content-center tagline2 animated animatedFadeInUp fadeInUp">
                IDEATE | INNOVATE | IMPLEMENT
            </div>
    
            <div className="row display-flex justify-content-center b">
                <div className="col-lg-2 a"><Link className="bt" to="/signup">Register</Link></div>
                <div className="col-lg-2 a"><Link className="bt" to="/login">Login</Link></div>
            </div>
        </div>
        <div className="pg4">
            <div className="row display-flex justify-content-center under c animated animatedFadeInUp fadeInUp" >
            SOCIAL ENTREPRENEURSHIP- A BURNING NEED
            </div>
            <div className="row display-flex justify-content-center qu pt-5">
            “A little bit of good can turn into a whole lot of good when fueled by the commitment of a social entrepreneur.” 
– Jeff Skoll

            </div>
            {/* <img src={Group} alt="" srcset="" id="group" / > */}
            <div className="row display-flex justify-content-center animated animatedFadeInUp fadeInUp pb-5">
                <div className="col-10 dsimi">
                What business entrepreneurs are to the economy, social entrepreneurs are to social change. They are driven, creative individuals who question the status quo, exploit new opportunities, refuse to give up, and remake the world for the better. With prime minister Narendra Modi stating that Social Entrepreneurship is the key to speeding up our Amrit Kaal journey on the occasion of India@75, it has become even more clear that social impact activities are the need of the hour. And promoting the spirit of social entrepreneurship is the path ahead.
                </div>
            </div> 
            
        </div> 
        <div className="pg4 pb-5">
            <div className="row display-flex justify-content-center under c animated animatedFadeInUp fadeInUp">
                WHAT IS ACTION PLAN?
            </div>
            {/* <img src={Group} alt="" srcset="" id="group" / > */}
            <div className="row display-flex justify-content-center animated animatedFadeInUp fadeInUp">
                <div className="col-10 d">
                Action Plan is Abhyuday, IIT Bombay’s Flagship Social Entrepreneurship Competition which fosters young minds of the nation to identify grass root level problems and design a sustainable business model for them. This nationwide competition takes participating teams through multiple stages, guiding them to develop a BMC and pitch in front of mentors and investors.
                Since its launch in 2012, Action Plan has witnessed tremendous growth in previous years. Action Plan is set to be Asia’s largest growing social Entrepreneurship Competition. 

                    
                </div>
            </div> 
            <div className="row display-flex justify-content-center" id="nums">
              <div className="col-lg-3 e">
                
                  <div className="co" >
                    <span className="counter" data-target="1000">1000</span><span>+</span>
                  </div>
                  <div className="subhead">
                    Teams participated
                  </div>
              
              </div>
              <div className="col-lg-3 e">
                <div className="co" >
                  <span className="counter" data-target="150">150</span><span>+</span>
                </div>
                <div className="subhead">
                  Teams received professional mentorship
                </div>
              </div>
              <div className="col-lg-3 e">
                <div className="co" >
                  <span className="counter" data-target="50">50</span><span>+</span>
                </div>
                <div className="subhead">
                  Partners
                </div>
              </div>
            </div>
        </div> 
        </div>
          
        <div class="pg3">
        <div class="row display-flex justify-content-center under c  cbs">
            WHAT'S IN FOR YOU ?
          </div>
            <div className="row display-flex justify-content-center">
              <div className="col-lg-3 back">
                <div className='newlo'><img src={cash} alt="" srcset="" className='nelo'/></div>
                <div className="new">Cash Prize</div>
                <div className="discrip">Incentives worth 20L+ for the top teams including a total cash prize of 3L for the winners of each tracks.</div>
              </div>
              <div className="col-lg-3 back">
                <div className="newlo"><img src={metor} alt="" srcset="" className='nelo'/></div>
                <div className="new">Mentorships</div>
                <div className="discrip">Being a participant of Action Plan, you will be allotted professional mentors who have mentored a lot of startups earlier and would help groom yours as well. </div>
               </div>
            </div>
            <div className="row display-flex justify-content-center">
              <div className="col-lg-3 back">
              <div className='newlo'><img src={workshop} alt="" srcset="" className='nelo'/></div>
              <div className="new">Workshops</div>
                <div className="discrip">A workshop is a path that introduces you to the experience of being an entrepreneur. Get an opportunity to be a part of exclusive and interesting workshops in both Round 1 and Round 2 by leading speakers of the field.</div>
              </div>
              <div className="col-lg-3 back">
              <div className='newlo'><img src={network} alt="" srcset="" className='nelo'/></div>
              <div className="new">Networking Opportunities</div>
              <div className="discrip">Get an opportunity to netwok with Action Plan's excelent partner base spread across Asia, Europe and North America.</div>
              </div>
            </div>
            <div class="row display-flex justify-content-center under c g cbs">
            TESTIMONIALS
          </div>
          {/* <img src={Group2} alt="" srcset="" id="group2" /> */}
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators" style={{marginBottom: "-5vh"}}>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

            </div>
            <div class="carousel-inner" style={{color: "#031F30"}}>
              <div class="carousel-item active">
                <div class="row display-flex justify-content-center">
                  <div class="col-lg-4 cent">
                    <div class="card tw" >
                      {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                      <div class="card-body cbs">
                        <p class="card-text">Abhyuday provided us a great platform of Action Plan, where we got an opportunity
                    to learn through workshop from the expert and Mentor connect helped us for getting
                    critical feedback on the startup during the mentoring session. Even in a virtual mode,
                    the event was structure well and we made good connection with co-participants.
                    The finale of the event had prominent jury panel from social sectors which helped
                    us get valuable feedback. Overall, a great effort by team Abhyuday, IIT Bombay in
                    current challenging time</p>
                    <h4 class="card-title"><b>- Pacify</b></h4>

                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 cent">
                    <div class="card tw" >
                      {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                      <div class="card-body cbs">
                        
                        <p class="card-text">The event was engaging and very well organised. Even with the difficulties involved
                    with the online procedures, the Abhyuday team was able to execute the competition
                    efficiently. What made it special was the vision to empower youth to act responsibly.
                    Our experience was enriching, owing to the very experienced judges who helped us with the insights.</p>
                    <h4 class="card-title">
                          <b>- Asbah</b>
                        </h4>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="carousel-item">
                <div class="row display-flex justify-content-center">

                  <div class="col-lg-4 cent">
                    <div class="card tw">
                      {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                      <div class="card-body cbs">
                        <p class="card-text">Action plan provided a wonderful opportunity filled with new learnings and great
                        connections and keeping it open age event has given a diverse background a reality check
                        for the work on their startups. At each level it gave me a new challenge which has helped
                        my startup to a great extent. It is a platform which recognizes social work or
                        entrepreneurship as a social sector for a better society at the same time it is very well
                        structured and loaded with learnings. </p>
                        <h4 class="card-title"><b>- Team Bliscare</b></h4>

                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 cent">
                    <div class="card tw" >
                      {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                      <div class="card-body cbs">
                        <p class="card-text">I have been fortunate to be associated with an initiative
                    that is aimed at providing social entrepreneurship. The entire
                    program is not only innovative but also well structured and
                    scientifically administered where elements of creativity with
                    sound sense of organizational ability is judged. The commendation
                    goes to the entire Abhyuday’s team who put in real hard work to make
                    this competition qualitative.</p>
                    <h4 class="card-title"><b>- Dr. A K S Suryavanshi, Dean (Student Welfare)</b></h4>

                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="carousel-item">
                <div class="row display-flex justify-content-center">
                  <div class="col-lg-4 cent">
                    <div class="card tw">
                      {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                      <div class="card-body cbs">
                        <p class="card-text">Abhyuday provided us a great platform where we found like-minded people and
                    organisations (in judging panels) trying to help social enterprises. That's what every social
                    entrepreneur wants and that's exactly what the Action Plan provides us with.
                    Mentor-connect by Abhyuday has played a huge role for us and I am sure the same is true
                    for every participant in the Action Plan. Kudos to the Abhyuday team!!!</p>
                    <h4 class="card-title"><b>- Team Airth</b></h4>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div id="carouselExampleIndicators5" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators" style={{marginBottom: "-5vh"}}>
              <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="4" aria-label="Slide 5"></button>


            </div>
            <div class="carousel-inner" style={{color: "#031F30"}}>
              <div class="carousel-item active">
                <div class="row display-flex justify-content-center">
                  <div class="col-lg-3 cent">
                    <div class="card tw" >
                      {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                      <div class="card-body">
                        <p class="card-text">Abhyuday provided us a great platform of Action Plan, where we got an opportunity
                    to learn through workshop from the expert and Mentor connect helped us for getting
                    critical feedback on the startup during the mentoring session. Even in a virtual mode,
                    the event was structure well and we made good connection with co-participants.
                    The finale of the event had prominent jury panel from social sectors which helped
                    us get valuable feedback. Overall, a great effort by team Abhyuday, IIT Bombay in
                    current challenging time</p>
                    <h4 class="card-title"><b>- Pacify</b></h4>

                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
              <div class="carousel-item">
                <div class="row display-flex justify-content-center">
                <div class="col-lg-3 cent">
                    <div class="card tw" >
                      <div class="card-body">
                        
                        <p class="card-text">The event was engaging and very well organised. Even with the difficulties involved
                    with the online procedures, the Abhyuday team was able to execute the competition
                    efficiently. What made it special was the vision to empower youth to act responsibly.
                    Our experience was enriching, owing to the very experienced judges who helped us with the insights.</p>
                    <h4 class="card-title">
                          <b>- Asbah</b>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row display-flex justify-content-center">
                <div class="col-lg-3 cent">
                    <div class="card tw">
                      <div class="card-body">
                        <p class="card-text">Action plan provided a wonderful opportunity filled with new learnings and great
                        connections and keeping it open age event has given a diverse background a reality check
                        for the work on their startups. At each level it gave me a new challenge which has helped
                        my startup to a great extent. It is a platform which recognizes social work or
                        entrepreneurship as a social sector for a better society at the same time it is very well
                        structured and loaded with learnings. </p>
                        <h4 class="card-title"><b>- Team Bliscare</b></h4>

                      </div>
                    </div>
                  </div> 
                </div>
              </div>
              <div class="carousel-item">
                <div class="row display-flex justify-content-center">
                  <div class="col-lg-3 cent">
                    <div class="card tw" >
                      <div class="card-body">
                        <p class="card-text">I have been fortunate to be associated with an initiative
                    that is aimed at providing social entrepreneurship. The entire
                    program is not only innovative but also well structured and
                    scientifically administered where elements of creativity with
                    sound sense of organizational ability is judged. The commendation
                    goes to the entire Abhyuday’s team who put in real hard work to make
                    this competition qualitative.</p>
                    <h4 class="card-title"><b>- Dr. A K S Suryavanshi, Dean (Student Welfare)</b></h4>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row display-flex justify-content-center">
                <div class="col-lg-3 cent">
                    <div class="card tw">
                      <div class="card-body">
                        <p class="card-text">Abhyuday provided us a great platform where we found like-minded people and
                    organisations (in judging panels) trying to help social enterprises. That's what every social
                    entrepreneur wants and that's exactly what the Action Plan provides us with.
                    Mentor-connect by Abhyuday has played a huge role for us and I am sure the same is true
                    for every participant in the Action Plan. Kudos to the Abhyuday team!!!</p>
                    <h4 class="card-title"><b>- Team Airth</b></h4>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          
        </div>
          <div class="row display-flex justify-content-center c g">
            CONTACT US
          </div>
          <div class="contact" id="contact">
            <div class="row display-flex justify-content-center" style={{margin: "5vh 0"}}>
                <div class="col-lg-3 cen">
                    <div class="manage-inner">
                        <div class="camp" style={{fontSize: "2.7vh"}}><b>Achira Jain</b> </div>
                        <div class="department">Competitions Manager</div>
                        <a href="mailto:achira@abhyudayiitb.org" style={{textDecoration: "none"}}><div class="department">achira@abhyudayiitb.org</div></a>
                        <div class="department">+91 70233 24101</div>
                    </div>
                      
                </div>
                <div class="col-lg-3 cen">
                    <div class="manage-inner">
                        <div class="camp" style={{fontSize: "2.7vh"}}><b>Chirag S.</b> </div>
                        <div class="department">Competitions Manager</div>
                        <a href="mailto:chirag@abhyudayiitb.org" style={{textDecoration: "none"}}><div class="department">chirag@abhyudayiitb.org</div></a>
                        <div class="department">+91 80730 82919</div>
                    </div>
                </div>
                <div class="col-lg-3 cen">
                  <div class="manage-inner">
                      <div class="camp" style={{fontSize: "2.7vh"}}><b>Yash Saraogi</b> </div>
                      <div class="department">Competitions Manager</div>
                      <a href="mailto:yash@abhyudayiitb.org " style={{textDecoration: "none"}}><div class="department">yash@abhyudayiitb.org </div></a>
                      <div class="department">+91 86028 61690</div>
                  </div>
              </div>
            </div>
            <div class="row display-flex justify-content-center">
                <div style={{width: "8vh"}}>
                    <a href="https://www.facebook.com/abhyuday.iitb/" target="/" class="fa fa-facebook" style={{fontSize: "2.5vh"}}> </a>
                </div>
                <div style={{width: "8vh"}}>
                    <a href="https://www.instagram.com/iitbombay_abhyuday/" target="/" class="fa fa-instagram" style={{fontSize: "2.5vh"}}> </a>
                </div>
                <div style={{width: "8vh"}}>
                    <a href="https://www.linkedin.com/company/abhyuday-iit-bombay/mycompany/" target="/" class="fa fa-linkedin" style={{fontSize: "2.5vh"}}> </a>
                </div>
                <div style={{width: "8vh"}}>
                    <a href="https://twitter.com/Abhyuday_IITB?s=07" target="/" class="fa fa-twitter" style={{fontSize: "2.5vh"}}> </a>
                </div>
                <div style={{width: "8vh"}}>
                    <a href="https://www.youtube.com/c/AbhyudayIITBombay" target="/" class="fa fa-youtube" style={{fontSize: "2.5vh"}}> </a>
                </div>
            </div>
            <a href="https://abhyudayiitb.org" target="/" style={{textDecoration: "none"}}><div class="row display-flex justify-content-center camp py-3" style={{fontSize: "2.5vh"}}>
                © Abhyuday | IIT Bombay
            </div></a>
        </div> 
        {/* <Helmet>
            <script src="../Assets/js/script.js" type="text/javascript" />
        </Helmet> */}
    </div>
  )
}
