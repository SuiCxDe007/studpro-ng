import React from "react";
import "./WhatIs-styles.css";
import {
    MDBBadge,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCardOverlay,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBIcon,
    MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';
import studProProgramImg from '../../../media/img/studpro-programs.webp';
import YouTube from "react-youtube";

export default function WhatIs() {

    const opts = {
        height: '190',
        width: '340',

    };


    return (
        <>
            <div className="WhatisComp">
                <br/>
                <MDBRow style={{marginTop: "0px"}} className='row-cols-1 row-cols-md-2 g-2'>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage height="330px" overlay src={require('../../../media/img/overview-img.png')}
                                          alt='...'/>
                            <MDBCardOverlay>
                            </MDBCardOverlay>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard style={{backgroundColor: "#dfe5fd"}}>
                            <MDBCardHeader className="card-title-text">OVERVIEW</MDBCardHeader>
                            <MDBCardBody>
                                <MDBTypography blockquote className='mb-0 ov-desc'>
                                    <p>StudPro Career Fair was an initiative by Institute of Electrical and Electronics
                                        Engineers (IEEE) Young Professional Sri Lanka Section 2017 Executive Committee
                                        to
                                        provide a platform for IEEE student members to expose their talent to the
                                        industries as
                                        well as to encourage the student members to continue their IEEE membership as
                                        Young
                                        Professionals.</p>
                                </MDBTypography>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBCard style={{backgroundColor: "#dfe5fd"}}>
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
                                            <b> Webinars & Session series starting from CV writing, Grooming, Interview
                                                facing tips, Industry niches & much more!
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
                                            <b> Workshops on how to maintain your LinkedIn Profile, writing Emails,
                                                Creating CVs and a whole lot more to ensure our candidates are better
                                                prepared
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
                                            <b> A Session series targeted to get answers for burning questions of
                                                undergraduates & fresh graduates directly from industry professionals.
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
                                            <b> Flagship event of IEEE StudPro to make sure the candidates who are
                                                groomed to a higher level are ready to take their next step with a
                                                industry giant
                                            </b> </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

                <div style={{marginTop: "20px"}}>
                    <MDBCard style={{backgroundColor: "#dfe5fd", paddingBottom: "20px"}}>
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

                <div style={{marginTop: "20px"}}>
                    <MDBCard style={{paddingLeft: "10px", backgroundColor: "#dfe5fd", paddingBottom: "20px"}}>
                        <span style={{marginTop: "10px"}}> <span
                            className="animate-stud" style={{fontSize: '50px'}}>Stud</span>
                                    <span
                                        className="animate-pro" style={{fontSize: '50px'}}>Pro 5.0</span>
                                  </span>
                        <p className={"font"} style={{fontSize: "20px"}}>Fifth Iteration of StudPro, <MDBBadge
                            color='warning'>StudPro 5.0 </MDBBadge>&nbsp;was
                            able to conduct
                            <b> 20+ sessions </b>for <MDBIcon fas icon="laptop"/> Computing, <MDBIcon fas
                                                                                                      icon="microchip"/> &nbsp;Electrical, <MDBIcon
                                fas icon="plug"/> Electronic & <MDBIcon fas icon="broadcast-tower"/> Telecommunication
                            Streams reaching
                            <b> 2500+ Participants</b> covering&nbsp;
                            <b> 21 Major Universities</b> with over
                            <b> 20+
                                Professional speakers!</b>
                            <br/>
                            <MDBBtn className={'bg-danger bg-gradient'} size='lg' style={{margin: "20px"}}><MDBIcon fas
                                                                                                                    icon="video"/> &nbsp;
                                <b>Watch Our Sessions</b></MDBBtn><br/>
                        </p>
                        <MDBCardImage position='top' src={studProProgramImg} alt='...'/>
                    </MDBCard>
                </div>


                <MDBRow style={{marginTop: "0px"}} className='row-cols-1 row-cols-md-4 g-2'>
                    <MDBCol>
                        <YouTube
                            opts={opts}
                            title={'SutdPRO %>_)21412424'}
                            loading={'loadddddddddddddddddddddddddd'}
                            videoId={'B_IYFFbKkfY'}                  // defaults -> ''
                            id={'B_IYFFbKkfY'}                       // defaults -> ''
                            // defaults -> noop
                        />
                    </MDBCol>    <MDBCol>
                        <YouTube
                            opts={opts}
                            videoId={'B_IYFFbKkfY'}                  // defaults -> ''
                            id={'B_IYFFbKkfY'}                       // defaults -> ''
                            // defaults -> noop
                        />
                    </MDBCol>    <MDBCol>
                        <YouTube
                            opts={opts}
                            videoId={'B_IYFFbKkfY'}                  // defaults -> ''
                            id={'B_IYFFbKkfY'}                       // defaults -> ''
                            // defaults -> noop
                        />
                    </MDBCol>    <MDBCol>
                        <YouTube
                            opts={opts}
                            videoId={'B_IYFFbKkfY'}                  // defaults -> ''
                            id={'B_IYFFbKkfY'}                       // defaults -> ''
                            // defaults -> noop
                        />
                    </MDBCol>

                </MDBRow>



            </div>
        </>
    )
}