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

import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FcAbout} from "react-icons/fc";
import "./Timelines-styles.css"
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow,
    MDBTypography
} from "mdb-react-ui-kit";
import {Chip} from "@mui/material";
import {CellTower, Computer, ElectricBolt, Man} from "@mui/icons-material";
import {BiMicrochip} from "react-icons/bi";

const TimelineComponent = () => {

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
                                <b> Session series on creating a CV that stands out from the competition & upgrading
                                    your
                                    linkedIn profile to next level.</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-3 g-3'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/amithe.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}> Upgrading your LinkedIn to Next
                                                Level

                                                <Chip className="chips" color="info" icon={<Man/>} label="All Streams"/>
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
                                            src={require("../../../media/img/Timeline/zahar.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Create your Job winning resume

                                                <Chip className="chips" color="info" icon={<ElectricBolt/>}
                                                      label="Electrical Stream"/>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Zahra Marzook<br/> Electrical Engineer - Ceylon Electricity Board
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/maas.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Create your Job winning resume
                                                <Chip className="chips" color="info" icon={<Computer/>}
                                                      label="Computing Stream"/>

                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Maas Savanghan<br/> Global COE Leader - attune
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="June 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<FcAbout/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">Know Your Industry</h3>
                            <p className="font-content">
                                <b> Session series on providing insight to undergraduates & fresh graduates on what to
                                    expect when joining the industry as a newbie, which tech stacks to focus on and much
                                    more!.</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-4 g-3'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/anuradha.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}> Session 01

                                                <Chip className="chips" color="info" icon={<CellTower/>}
                                                      label="Telecom Stream"/>
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>
                                                Anuradha Udunuwara<br/> Senior Enterprise Solutions Architect - Sri
                                                Lanka Telecom
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/ruschira.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}> Session 02
                                                <Chip className="chips" color="info" icon={<BiMicrochip/>}
                                                      label="Electronic Stream"/>
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>
                                                Ruchira Lakshan<br/> Application Engineer - Synopsys (Pvt)Ltd
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/pasan.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 03
                                                <Chip className="chips" color="info" icon={<ElectricBolt/>}
                                                      label="Electrical Stream"/>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Pasan Pethiyagode<br/> Electrical Design Engineer - Duo Operations Ltd
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/yohan.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 04
                                                <Chip className="chips" color="info" icon={<Computer/>}
                                                      label="Computing Stream"/>

                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Senior Tech Lead -<br/> 99x
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="july 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<FcAbout/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">Know Your Niche</h3>
                            <p className="font-content">
                                <b> Session series on identifying the available job opportunities, career paths & job
                                    roles in each stream.</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-3 g-3'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/jehan.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}> Session 01<br/>
                                                <Chip className="chips" color="info" icon={<Computer/>}
                                                      label="Computing Stream"/>
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>
                                                Jehan Wijesinghe<br/> Head of product - Surge Global
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/indranatha.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 02<br/>
                                                <Chip className="chips" color="info" icon={<ElectricBolt/>}
                                                      label="Electrical Stream"/>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                E.K. Indranatha<br/> Chief Electrical Engineer - Ceylon Electricity Board
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/thilin.jpeg")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 03<br/>
                                                <Chip className="chips" color="info" icon={<BiMicrochip/>}
                                                      label="Electronic Stream"/>

                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Thilina Bandara<br/> Senior Consultant - Zone24x7
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
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
