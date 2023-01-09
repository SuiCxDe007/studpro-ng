/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Created by Kaveen Abeyrathne for StudPro 5.0 as a place for students to look
 *  into What they can learn,companies to understand what to expect. This website 
 *  was developed as a first step to taking StudPro to a higher elevation. You are 
 *  free to update,share & modify the work for IEEE purposes ONLY.
 *  
 *  Content of the source code is not authorized to use for any commercial purpose. 
 *
 *  SuiCxDe007 | https://github.com/SuiCxDe007 | kaveenmadawa@gmail.com
 *  
 *  ~ Copyright © 2023 SuiCxDe
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

import React, {useState} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FcAbout} from "react-icons/fc";
import "./Timelines-styles.css"
import {
    MDBBadge,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle, MDBCol, MDBRow,
    MDBTypography
} from "mdb-react-ui-kit";
import {Alert, Chip} from "@mui/material";
import {Computer, ElectricBolt, Face, LinkedIn, Man} from "@mui/icons-material";
import {RxResume} from "react-icons/rx";
import {useStore} from "react-redux";

const TimelineComponent = () => {

    const [chipColor, setChipColor] = useState('info');


    return (
        <div style={{marginLeft: "50px", marginRight: "50px", marginTop: "20px"}}>
            <MDBCard style={{backgroundColor: "#dfe5fd"}}>
                <MDBCardHeader className="card-title-text">StudPro 5.0 Timeline</MDBCardHeader>
                <MDBCardBody>
                    <MDBTypography blockquote className='mb-0 ov-desc'>
                        <p>StudPro is continuing it's 5th iteration as StudPro 5.0 to power-up & upgrade undergraduates
                            & fresh garduates of Sri Lanka.
                            <br/>Check our timeline to get a idea of what we will be covering! That's pretty much every
                            avenue that you are going to need in securing your dream job!<br/><br/></p>
                        <hr style={{height: 5, width: "100%"}}/>
                    </MDBTypography>
                    <VerticalTimeline layout="1-column-left">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="May-June 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<FcAbout/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">Mastering the art of CV &
                                LinkedIn</h3>
                            <p className="font-content">
                               <b> Session series on creating a CV that stands out from the competition & upgrading your
                                   linkedIn profile to next level.</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-3 g-3' style={{paddingLeft:"40px",paddingRight:"40px",marginTop:"10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/WhatsApp Image 2023-01-10 at 12.31.06 AM (1).jpeg")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize:"16px"}}>        Upgrading your LinkedIn to Next Level

                                                <Chip className="chips" color="info" icon={<Man />} label="All Streams" />
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>
                                                Amithe Gamage<br/> Co-Founder - Quantum Leap (Pvt)Ltd
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/WhatsApp Image 2023-01-10 at 12.31.05 AM.jpeg")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize:"18px"}}>Create your Job winning resume

                                          <Chip className="chips" color="info" icon={<ElectricBolt />} label="Electrical Stream" />
                                            </MDBCardTitle>
                                            <MDBCardText><hr/>
                                                Zahra Marzook<br/> Electrical Engineer - Ceylon Electricity Board
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard  className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/WhatsApp Image 2023-01-10 at 12.31.06 AM.jpeg")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                           <MDBCardTitle style={{fontSize:"18px"}}>Create your Job winning resume
                                               <Chip className="chips" color="info" icon={<Computer />} label="Computing Stream" />

                                           </MDBCardTitle>
                                            <MDBCardText><hr/>
                                                Maas Savanghan<br/> Global COE Leader - attune
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<FcAbout/>}
                        >
                            <h3 className="vertical-timeline-element-title">Art Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                Creative Direction, Userrr Experience, Visual Design, SEO, Online Marketing
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<FcAbout/>}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<FcAbout/>}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                            icon={<FcAbout/>}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social
                                Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                                Strategy, Social Media
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                            icon={<FcAbout/>}
                        >
                            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                            icon={<FcAbout/>}
                        >
                            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital
                                Media Visual Imaging</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                            <p>
                                Creative Direction, Visual Design
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                            icon={<FcAbout/>}
                        />
                    </VerticalTimeline>
                </MDBCardBody>
            </MDBCard>


        </div>
    );
};

export default TimelineComponent;
