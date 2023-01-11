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

import {React, useState} from "react";
import {
    MDBBadge,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from 'mdb-react-ui-kit';
import SponsorshipYearsWrapper from "./Sponsorship-pills-component";
import SponsorCardSettings from "../Admin/Sposor-settings-component/Sponsor-card-settings";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {BiBriefcase} from "react-icons/bi";
import {Chip} from "@mui/material";
import './sponsorship-card-component-styles.css';

const SponsorshipCardComponent = props => {

    const [showCareersModal, setShowCareersModal] = useState(false);

    const handleCareersModal =()=>{
        setShowCareersModal(!showCareersModal)
    }
    console.log(props)

    return (
        <div>
            {/*<Dialog*/}
            {/*    open={showCareersModal}*/}
            {/*    TransitionComponent={Slide}*/}
            {/*    keepMounted*/}
            {/*   // onClose={handleDeleteClose}*/}
            {/*    aria-describedby="alert-dialog-slide-description"*/}
            {/*>*/}
            {/*    <DialogTitle style={{color: "green"}}>{"Available Opportunities"}<hr/></DialogTitle>*/}
            {/*    <DialogContent>*/}
            {/*        <DialogContentText id="alert-dialog-slide-description">*/}
            {/*            This action is irreversible!<br/> Are you sure you want to delete <b>?*/}
            {/*            <ul>{props.sponsor.jobs && props.sponsor.jobs.map(x=>{*/}
            {/*                return <li>{x}</li>*/}
            {/*            })}</ul>*/}
            {/*        </b> </DialogContentText>*/}
            {/*    </DialogContent>*/}
            {/*    <DialogActions>*/}
            {/*        <Button variant="outlined" color="warning" onClick={handleCareersModal}>Cancel</Button>*/}
            {/*        <Button onClick={handleCareersModal} variant="contained" color="error">*/}
            {/*            Delete*/}
            {/*        </Button>*/}
            {/*    </DialogActions>*/}
            {/*</Dialog>*/}
            <MDBModal show={showCareersModal} setShow={setShowCareersModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Available Opportunities</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={handleCareersModal}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>{props.sponsor.jobs && props.sponsor.jobs.map(job=>{
                           return <Chip className="chips" style={{marginRight:"10px",marginTop:"10px"}} color="primary" label={job} icon={<BiBriefcase />} />
                        })}</MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={handleCareersModal}>
                                Close
                            </MDBBtn><a href={props.sponsor.jobURL ? props.sponsor.jobURL : '#'} target="_blank">
                            <MDBBtn>Apply</MDBBtn></a>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            <MDBCol>
                <MDBCard className={'h-100'}>
                    <MDBCardImage
                        src={`${props.sponsor.logo}`}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle className={"font"}> <strong>{props.sponsor.name}</strong></MDBCardTitle>
                        <MDBListGroup flush>
                            {props.admin && <MDBListGroupItem> &nbsp;&nbsp;Order ID&nbsp;&nbsp; <MDBBadge
                                className='ms-2' pill color='warning'>{props.sponsor.oid}</MDBBadge></MDBListGroupItem>}
                            <MDBListGroupItem>
                                <MDBBadge
                                    className='ms-2'>{props.sponsor.years}</MDBBadge>&nbsp;&nbsp;Year(s) With
                                Us</MDBListGroupItem>
                            <MDBListGroupItem> <SponsorshipYearsWrapper id={props.sponsor.id}
                                                                        partnerships={props.sponsor.partnerships}/>
                            </MDBListGroupItem>
                            <MDBListGroupItem> <a href={props.sponsor.companyURL} target={"_blank"}>
                                <button style={{position: "relative", bottom: "0"}} type="button"
                                        className="btn btn-primary btn-rounded">Website
                                </button>
                            </a>
                                <button onClick={handleCareersModal} style={{position: "relative", marginLeft:"5px", bottom: "0"}} type="button"
                                       disabled={!props.sponsor.jobs} className="btn btn-success btn-rounded">Careers<MDBBadge className='ms-2' color='warning'>
                                    {props.sponsor.jobs ? props.sponsor.jobs.length : 0}
                                </MDBBadge>
                                    <span className='visually-hidden'>unread messages</span>
                                </button>
                         </MDBListGroupItem>{props.admin && <MDBListGroupItem>
                            <SponsorCardSettings sponsor={props.sponsor}/></MDBListGroupItem>}
                        </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default SponsorshipCardComponent;