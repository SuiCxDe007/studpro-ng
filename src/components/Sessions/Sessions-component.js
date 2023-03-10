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
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBTypography
} from "mdb-react-ui-kit";
import image from '../../media/img/studpro-programs.webp'
import AccordionComponent from "./Accordion-components";

/**
 *
 * @returns parent sessions component
 */

const SessionsComponent  = (props) => {


    return (
        <div style={{marginLeft:"50px",marginTop:"20px", marginRight:"50px"}} className='Sessions'>

            <MDBCard style={{backgroundColor: "#dfe5fd"}}>
                <img alt="session_img" src={image}/>
                <MDBCardHeader className="card-title-text">Session Gallery</MDBCardHeader>
                <MDBCardBody>
                    <MDBTypography blockquote className='mb-0 ov-desc'>
                        <p>Throughout StudPro, We have conducted various sessions covering all major aspects which are required for you to secure a job your dream company! We have made them available to you to watch whenever you want to refresh your memory or to watch just before a interview.</p>
                    </MDBTypography>
                </MDBCardBody>
            </MDBCard>

            <MDBCard style={{backgroundColor: "#eedffd",marginTop:"20px"}}>

                <MDBCardHeader >
                    <span style={{marginTop: "10px"}}> <span
                        className="animate-stud" style={{fontSize: '50px'}}>Stud</span>
                                    <span
                                        className="animate-pro" style={{fontSize: '50px'}}>Pro 5.0</span>   <span
                                        className="animate-rest" style={{fontSize: '50px'}}>Sessions</span>
                                  </span>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBTypography blockquote className='mb-0 ov-desc'>
                        <AccordionComponent admin={props.admin} studPro={"studpro5"}/>
                    </MDBTypography>
                </MDBCardBody>
            </MDBCard>


            <MDBCard style={{backgroundColor: "#fddffc",marginTop:"20px"}}>

                <MDBCardHeader >
                    <span style={{marginTop: "10px"}}> <span
                        className="animate-stud" style={{fontSize: '50px'}}>Stud</span>
                                    <span
                                        className="animate-pro" style={{fontSize: '50px'}}>Pro 4.0</span>   <span
                            className="animate-rest" style={{fontSize: '50px'}}>Sessions</span>
                                  </span>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBTypography blockquote className='mb-0 ov-desc'>
                        <AccordionComponent admin={props.admin} studPro={"studpro4"}/>
                    </MDBTypography>
                </MDBCardBody>
            </MDBCard>

        </div>
    );
};

export default SessionsComponent ;
