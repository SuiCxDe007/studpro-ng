import React from 'react';
import {
    MDBAccordion,
    MDBAccordionItem,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBIcon,
    MDBTypography
} from "mdb-react-ui-kit";
import image from '../../media/img/studpro-programs.webp'
import {Accordion} from "@mui/material";
import AccordionComponent from "./Accordion-components";
const SessionsComponent  = () => {


    return (
        <div style={{marginLeft:"50px", marginRight:"50px"}} className='Sessions'>

            <MDBCard style={{backgroundColor: "#dfe5fd"}}>
                <img src={image}/>
                <MDBCardHeader className="card-title-text">Session Gallery</MDBCardHeader>
                <MDBCardBody>
                    <MDBTypography blockquote className='mb-0 ov-desc'>
                        <p>Throughout StudPro, We have conducted various sessions covering all major aspects which are required for you to secure a job your dream company! We have made them available to you to watch whenever you want to refresh your memory or to watch just before a interview.</p>
                    </MDBTypography>
                </MDBCardBody>
            </MDBCard>


            <AccordionComponent/>


        </div>
    );
};

export default SessionsComponent ;
