import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
// import rule from '../Assets/images/rule.png'
// import faq from '../Assets/images/faq.png'

export default function Rules() {
  return (
    <div className="fluid-container">
        <Navbar/>
        <div className="row display-flex justify-content-center tp">RULES AND ELIGIBILITY</div>
        <div className="row display-flex justify-content-center rulebg">
            <div className="col-lg-10">
                <ul>
                    <li style={{fontSize:"2.5vh"}}>Any startup incorporated before 4 years of the conclusion of the competition i.e before January 2018 will not be allowed to participate.</li>
                    <li style={{fontSize:"2.5vh"}}>The plan should solve a critical social problem in an innovative as well as transformational manner and should have some quantifiable social return.</li>
                    <li style={{fontSize:"2.5vh"}}>There is no age restriction on any individual to participate. Anyone, from students to working professionals across the nation, can participate. </li>
                    <li style={{fontSize:"2.5vh"}}>Action Plan aims to promote startups that require assistance in funding, mentoring, etc. Therefore startups who have raised external funding i.e. funding from angel investors, venture capitalists, etc. cannot participate.</li>
                    <li style={{fontSize:"2.5vh"}}>Teams can have a maximum of 4 members including the Team leader.</li>
                    <li style={{fontSize:"2.5vh"}}>The Team leader will be the point of contact and his/her email address will be used for future correspondence.</li>
                    <li style={{fontSize:"2.5vh"}}>The team must abide by timely instructions, guidelines and ethics provided by Abhyuday with general business ethics.</li>
                </ul>
            </div>
            
        </div>
        
        <div className="row display-flex justify-content-center c ">
        FREQUENTLY ASKED QUESTIONS
        </div>
        <div className="row display-flex justify-content-center faqbg">
            <div className="col-lg-10 col-sm-12">
            <div class="accordion" id="accordionExample">
        <div class="accordion-item my-5 mx-5">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            WHO CAN PARTICIPATE IN ACTION PLAN COMPETITION?
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Anyone, from students to working professionals across the nation, can participate. For more information refer Rules and Guidelines in Competition Manual.
            </div>
            </div>
        </div>
        <div class="accordion-item my-5 mx-5">
            <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            WHAT IS REGISTRATION/PARTICIPATION FEE FOR ACTION PLAN?
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            There is NO registration/participation fee.
            </div>
            </div>
        </div>
        <div class="accordion-item my-5 mx-5">
            <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            HOW CAN I CONFIRM THAT I HAVE SUBMITTED THE PLAYBOOK?
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            After submitting your entry, you will see a page confirming the receipt of your playbook along with a confirmation mail.

            </div>
            </div>
        </div>
        <div class="accordion-item my-5 mx-5 ">
            <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            CAN I CHANGE MY TEAM LATER?
            </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Yes, you can change your team info and other registration details later on the website. You can even add a team member or drop someone. However, you cannot change the details of the Team Leader later.

            </div>
            </div>
        </div>
        <div class="accordion-item my-5 mx-5 ">
            <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            WHAT SHOULD BE THE SIZE OF MY TEAM?
            </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Your team can consist of 2-8 members.
            </div>
            </div>
        </div>
        <div class="accordion-item my-5 mx-5 ">
            <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            CAN A TEAM CONSISTS PEOPLE FROM DIFFERENT COLLEGES?
            </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Yes, teams can consist of individuals from different colleges.
            </div>
            </div>
        </div>
        <div class="accordion-item my-5 mx-5 ">
            <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            DOES MY ACTION PLAN HAVE TO BE TECHNOLOGY RELATED?
            </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            No, we encourage all entries that can be developed into an Action plan. It must fit into model of Activism, Not for profit (NGO) or Social entrepreneurship.
            </div>
            </div>
        </div>
        <div class="accordion-item my-5 mx-5 ">
            <h2 class="accordion-header" id="heading8">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
            HOW DOES THE MENTORING PROGRAM WORK?
            </button>
            </h2>
            <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            Mentors are experienced sector-specific experts who provide assistance and guidance to the participants. They will offer suggestions and feedbacks to help participants develop and refine their model. Participants are not required to have a mentor, although teams are strongly encouraged to take advantage of this opportunity.
            </div>
            </div>
        </div>
        <div className="col py-5 px-5 note">
            <i style={{fontSize:"2vh;"}}>Note: Teams may be asked to provide proof of the above at any time during the competition cycle and in the eventuality of wrong details/information your entry shall be disqualified. By registering for Action plan, Abhyuday expressly disclaims any obligation or undertaking to update or revise any forward-looking statements, targets, estimates or any related information contained in this concept note to reflect any change in events, conditions, assumptions or circumstances on which any such statements are based unless so required by applicable law. Furthermore, by participating in Action Plan, each participating team and all of its team members agree to allow Abhyuday, IIT Bombay to use their names, images and information regarding the team's action plan, any other material forwarded as part of their submission, and prize information in publicity and marketing for the same.</i>
            </div>
        </div>
            </div>
        </div>
        <div className="outline">
        <Footer/>

        </div>
    </div>
  )
}
