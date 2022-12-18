import React from "react";
import "./WhatIs-styles.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCardOverlay,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function WhatIs() {
    return (
        <>
            <div className="WhatisComp">


                <br/>
                <MDBRow style={{marginTop: "0px"}} className='row-cols-1 row-cols-md-2 g-2'>
                    <MDBCol>
                        <MDBCard  >
                            <MDBCardImage height="330px" overlay src={require('../../../media/img/overview-img.png')}
                                          alt='...'/>
                            <MDBCardOverlay>
                            </MDBCardOverlay>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                <MDBCard style={{backgroundColor:"#dfe5fd"}}>
                    <MDBCardHeader className="card-title-text">OVERVIEW</MDBCardHeader>
                    <MDBCardBody>
                        <MDBTypography blockquote className='mb-0 ov-desc'>
                            <p>StudPro Career Fair was an initiative by Institute of Electrical and Electronics
                                Engineers (IEEE) Young Professional Sri Lanka Section 2017 Executive Committee to
                                provide a platform for IEEE student members to expose their talent to the industries as
                                well as to encourage the student members to continue their IEEE membership as Young
                                Professionals.</p>
                        </MDBTypography>
                    </MDBCardBody>
                </MDBCard>
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBCard  style={{backgroundColor:"#dfe5fd"}}>
                    <MDBCardHeader className="card-title-text">What We Do</MDBCardHeader>
                    <MDBCardBody>
                        <MDBTypography blockquote className='mb-0 ov-desc'>
                            <p>IEEE StudPro is an annual event hosted by the IEEE Young Professionals Sri
                                Lanka that intends to expose the talents and skills of all fresh
                                graduates and undergraduates in Sri Lanka to the corporate world
                                immediately after graduation or during the last stages of their degree.
                                It was first started back in 2017 and has continued its journey for 5
                                successful years.<br/><br/></p>
                        </MDBTypography>
                        <MDBRow style={{marginTop: "0px"}} className='row-cols-1 row-cols-md-4 g-4'>
                            <MDBCol>
                                <MDBCard className='h-100'>
                                    <MDBCardImage
                                        src={require('../../../media/img/webinars.png')}
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className={"font"}> <strong>Webinars</strong></MDBCardTitle>
                                        <MDBCardText className={"font"}><br/>
                                            <b> Webinars & Session series starting from CV writing, Grooming, Interview facing tips, Industry niches & much more!
                                            </b> </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100'>
                                    <MDBCardImage
                                        src={require('../../../media/img/workshops.png')}
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className={"font"}> <strong>Workshops</strong></MDBCardTitle>
                                        <MDBCardText className={"font"}><br/>
                                            <b> Workshops on how to maintain your LinkedIn Profile, writing Emails, Creating CVs and a whole lot more to ensure our candidates are better prepared
                                            </b> </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100'>
                                    <MDBCardImage
                                        src={require('../../../media/img/ama.png')}
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className={"font"}> <strong>Ask Me Anything Series
                                            Graduates</strong></MDBCardTitle>
                                        <MDBCardText className={"font"}><br/>
                                            <b> A Session series targeted to get answers for burning questions of undergraduates & fresh graduates directly from industry professionals.
                                            </b> </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100'>
                                    <MDBCardImage
                                        src={require('../../../media/img/careerfair.png')}
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className={"font"}> <strong>
                                            Career Fair</strong></MDBCardTitle>
                                        <MDBCardText className={"font"}><br/>
                                            <b> Flagship event of IEEE StudPro to make sure the candidates who are groomed to a higher level are ready to take their next step with a industry giant
                                            </b> </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

                <div style={{marginTop: "20px"}}>
                    <MDBCard  style={{backgroundColor:"#dfe5fd"}}>
                        <span style={{marginTop: "10px"}} className="card-title-text">For Whom?</span>
                        <p className={"font"} style={{fontSize: "20px"}}>IEEE StudPro Career Fairs' target audience are
                            undergraduates & fresh graduates who are seeking internships and/or jobs.</p>
                        <MDBRow style={{marginTop: "0px"}} className='row-cols-1 row-cols-md-4 g-4'>
                            <MDBCol>
                                <MDBCol>
                                    <MDBCard background='dark' className='h-75 text-white'>
                                        <MDBCardImage overlay src={require('../../../media/img/card-student.webp')}
                                                      alt='...'/>
                                        <MDBCardOverlay>
                                        </MDBCardOverlay>
                                    </MDBCard>
                                </MDBCol>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100'>
                                    <MDBCardImage
                                        src={require('../../../media/img/company-card.webp')}
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className={"font"}> <strong>Undergraduates/Fresh
                                            Graduates</strong></MDBCardTitle>
                                        <MDBCardText className={"font"}><br/>
                                            <b> Undergraduates who are seeking for Internships and/or Jobs can apply for
                                                the Career fair. We have coverage of 21+ state & private universities
                                                covering all corners of Sri Lanka.
                                            </b> </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard className='h-100'>
                                    <MDBCardImage
                                        src={require('../../../media/img/caompany-card2.webp')}
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className={"font"}><b>Companies</b></MDBCardTitle>
                                        <MDBCardText className={"font"}><br/><b>
                                            As a company, IEEE StudPro career fair is a place where you can find high
                                            caliber individuals who are seeking internships & jobs under one roof. Our
                                            coverage of 21+ universities ensure candidates are covered from each
                                            university.
                                        </b></MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCol>
                                    <MDBCard background='dark' className='h-75 text-white'>
                                        <MDBCardImage overlay src={require('../../../media/img/card-company.jpg')}
                                                      alt='...'/>
                                        <MDBCardOverlay>
                                        </MDBCardOverlay>
                                    </MDBCard>
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </div>


            </div>


        </>
    )
}