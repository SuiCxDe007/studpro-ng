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
import {FcAbout, FcIdea} from "react-icons/fc";
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
import {
    ArrowCircleLeftRounded,
    CellTower, ChangeHistory,
    Computer,
    ElectricBolt,
    Face,
    Factory,
    Man,
    People,
    PeopleAltTwoTone, PeopleTwoTone,
    Person4, QuestionAnswer, Scale, Star
} from "@mui/icons-material";
import {BiMicrochip} from "react-icons/bi";
import {GiComb, GiIdea} from "react-icons/gi";


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
                            icon={<Face/>}
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
                            icon={<Factory/>}
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
                            date="July 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<GiIdea/>}
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
                                                E.K. Indranatha<br/> Chief Electrical Engineer - Ceylon Electricity
                                                Board
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
                            className="vertical-timeline-element--work"
                            date="September 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<GiComb/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">Groom Yourself</h3>
                            <p className="font-content">
                                <b> Session series on grooming yourself mentally & physically before facing your next
                                    interview! Looks & your mental health plays a major role on your outlook! Get to
                                    know all about them here!.</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-3 g-3 d-flex justify-content-center text-center'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/rasini.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}> Groom Your Mentality<br/>
                                                <Chip className="chips" color="info" icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>
                                                Rasini Bandara<br/> Mental Health Care Professional - Mind Heals PVT
                                                (Ltd)
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/sampath.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 02<br/>
                                                <Chip className="chips" color="info" icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Sampath Soysa<br/> Senior Executive - University of Bolton
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="October 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<PeopleAltTwoTone/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">Interviews 101</h3>
                            <p className="font-content">
                                <b> Facing interviews can be nerve wrecking! We are here to help you get over your fears
                                    and crush your interviews with your Dream company. Focusing on how to face both
                                    general interviews & technical interviews</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-3 g-3 text-center'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/sachin.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}> General Interviews<br/>
                                                <Chip className="chips" color="info" icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>
                                                Sachin Duneeka<br/> Partner Support & customer Success - hSenid Business
                                                Solutions
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/THARAKA.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Technical Interviews<br/>
                                                <Chip className="chips" color="info" icon={<Computer/>}
                                                      label="Computing Stream"/>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Tharaka Madhushanka<br/> Associate Technical Lead - 99x
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/indika.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Technical Interviews<br/>
                                                <Chip className="chips" color="info" icon={<ElectricBolt/>}
                                                      label="Electrical & Telco Stream"/>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Indike Gunathilake<br/> Senior Vice President - Arimac Lanka
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="October - November 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<Person4/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">Young Protégé</h3>
                            <p className="font-content">
                                <b>Mentor is someone who can guide you towards success by making sure you follow the
                                    correct path. Young Protégé is a 1:1 Mentoring series covering all major streams &
                                    niches to help undergraduates on a more granular level.</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-3 g-3 d-flex justify-content-center text-center'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/youngprotege.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}>Session Series<br/>
                                                <Chip className="chips" color="info" icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>

                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="October 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<Scale/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">Know your ethics</h3>
                            <p className="font-content">
                                <b>To survive in the industry just having technical skills is not enough! To be
                                    recognized & be successfully you will need to be a person who is ethical. Follow our
                                    know your ethics session to know what industry will expect</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-3 g-3 d-flex justify-content-center text-center'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/zamreen.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}>Session Series<br/>
                                                <Chip className="chips" color="info" icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>

                                            <MDBCardText>
                                                <hr/>
                                                Zamreen Zarook<br/> Director - Glinmax Holdings
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="October - November 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<QuestionAnswer/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">Ask Me Anything Series</h3>
                            <p className="font-content">
                                <b> Who better to ask your questions about industry apart from Industry Professionals?
                                    Our Ask Me Anything series caters everyone who would lie to clarify their doubts,
                                    issues & anything else directly from industry experts</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-6 g-3'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/fortude.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}> Session 01

                                                <Chip className="chips" style={{fontSize: "10px"}} color="info"
                                                      icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>
                                                Fortude
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/rizen.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}> Session 02
                                                <Chip className="chips" style={{fontSize: "10px"}} color="info"
                                                      icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>
                                                Rizing attune
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/azebd.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 03
                                                <Chip className="chips" style={{fontSize: "10px"}} color="info"
                                                      icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Azend Technologies
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/directfn.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 04
                                                <Chip className="chips" style={{fontSize: "10px"}} color="info"
                                                      icon={<People/>}
                                                      label="All Streams"/>

                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                DirecFN
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/different.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 05
                                                <Chip className="chips" style={{fontSize: "10px"}} color="info"
                                                      icon={<People/>}
                                                      label="All Streams"/>

                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                :Different
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/dialog.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 06
                                                <Chip className="chips" style={{fontSize: "10px"}} color="info"
                                                      icon={<People/>}
                                                      label="All Streams"/>

                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Dialog
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="October 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<ArrowCircleLeftRounded/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">inTransition</h3>
                            <p className="font-content">
                                <b> Lookiung to step over to IT Industry? Currently in Any other field and trying a way
                                    into IT Industry? We got you covered through inTransition! Listen to our speakers
                                    explain how you can make your transition smooth!</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-3 g-3 d-flex justify-content-center text-center'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/vipula.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                        <MDBCardBody>

                                            <MDBCardTitle style={{fontSize: "16px"}}>Session 01<br/>
                                                <Chip className="chips" color="info" icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>
                                            <hr/>
                                            <MDBCardText>
                                                Vipula Liyanaarachchi<br/> General Manager - Zone24x7
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/dammika.webp")}
                                            alt='...'
                                            position='top'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize: "18px"}}>Session 02<br/>
                                                <Chip className="chips" color="info" icon={<People/>}
                                                      label="All Streams"/>
                                            </MDBCardTitle>
                                            <MDBCardText>
                                                <hr/>
                                                Dr. Dhammika Elkaduwe<br/> Lecturer - University of Peradeniya
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="3rd November 2022"
                            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                            icon={<PeopleTwoTone/>}
                            dateClassName="date"
                        >
                            <h3 className="vertical-timeline-element-title font-header">Career Fair</h3>
                            <p className="font-content">
                                <b>All our sessions & workshops have been preparing our candidates to face nail their
                                    dream job with a industry giant. We are here to provide you with a chance to get you
                                    interviews by leading companies in sri lanka!</b><br/>
                            </p>
                            <MDBRow className='row-cols-1 row-cols-md-3 g-3 d-flex justify-content-center text-center'
                                    style={{paddingLeft: "40px", paddingRight: "40px", marginTop: "10px"}}>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/c1.webp")}
                                            alt='...'
                                            position='top'

                                        />
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/DSC01724.jpg")}
                                            alt='...'
                                            position='top'

                                        />
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard className="cards">
                                        <MDBCardImage
                                            src={require("../../../media/img/Timeline/_DSC2191.jpg")}
                                            alt='...'
                                            position='top'

                                        />
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                            icon={<Star/>}
                        />
                    </VerticalTimeline>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default TimelineComponent;
