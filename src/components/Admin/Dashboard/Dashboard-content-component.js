import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBRow
} from "mdb-react-ui-kit";

const DashboardContent = () => {
    return (
        <div>
            <div
                className='p-5 text-center bg-image'
                style={{
                    backgroundImage: `url(${require("../../../media/img/dashboard.webp")})`,
                    objectFit: "cover",
                    height: '400px',
                    backgroundPosition: "center"
                }}
            >

                <div className='mask' style={{backgroundColor: 'rgba(0  ,0,0,0.2)'}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h5 style={{color: "#b2beb5"}}>Welcome to</h5>
                            <h5> <span
                                className="animate-stud" style={{fontSize: '50px'}}>Stud</span>
                                <span
                                    className="animate-login" style={{fontSize: '50px'}}>Pro</span></h5><h5
                            style={{color: "#b2beb5"}}>Admin Dashboard </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginLeft: "50px", marginRight: "50px", marginTop: "20px"}}><MDBRow>
                <MDBCol sm='4'>
                    <a href={'/session-settings'}><MDBCard background="light" style={{maxWidth: '540px'}}>
                        <MDBRow className='g-0'>
                            <MDBCol md='4'>
                                <MDBCardImage style={{objectFit: "cover"}}
                                              src={require("../../../media/img/session-settings-card.png")} alt='...'
                                              fluid/>
                            </MDBCol>
                            <MDBCol md='8'>
                                <MDBCardBody>
                                    <MDBCardHeader background='transparent' border='success'>
                                        Session Settings
                                    </MDBCardHeader>
                                    <MDBCardText><br/>
                                        Update Session Details, add Sessions & remove session series.
                                    </MDBCardText>
                                    <MDBCardFooter>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                    </MDBCardFooter>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard></a>
                </MDBCol>
                <MDBCol sm='4'>
                    <a href={'/sponsor-settings'}><MDBCard background="light" style={{maxWidth: '540px'}}>
                        <MDBRow className='g-0'>
                            <MDBCol md='4'>
                                <MDBCardImage style={{objectFit: "cover"}}
                                              src={require("../../../media/img/sponsor-settings-card.png")} alt='...'
                                              fluid/>
                            </MDBCol>
                            <MDBCol md='8'>
                                <MDBCardBody>
                                    <MDBCardHeader background='transparent' border='success'>
                                        Sponsor Settings
                                    </MDBCardHeader>
                                    <MDBCardText><br/>
                                        Update Sponsor Details, add Sponsors & remove Sponsors.
                                    </MDBCardText>
                                    <MDBCardFooter>
                                        <small className='text-muted'>Last updated 3 mins ago</small>
                                    </MDBCardFooter>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard></a>
                </MDBCol>
                <MDBCol sm='4'>
                    <a href={'/sponsor-settings'}><MDBCard background="light" style={{maxWidth: '540px'}}>
                        <MDBRow className='g-0'>
                            <MDBCol md='4'>
                                <MDBCardImage style={{objectFit: "cover"}}
                                              src={require("../../../media/img/session-settings-card.png")} alt='...'
                                              fluid/>
                            </MDBCol>
                            <MDBCol md='8'>
                                <MDBCardBody>
                                    <MDBCardHeader background='transparent' border='success'>
                                        Carousel Settings
                                    </MDBCardHeader>
                                    <MDBCardText><br/>
                                        Change, Remove & Add Images to Carousel
                                    </MDBCardText>
                                    <MDBCardFooter>
                                        <small className='text-muted'>Admin</small>
                                    </MDBCardFooter>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard></a>
                </MDBCol>
            </MDBRow>
            </div>
        </div>
    );
};

export default DashboardContent;
