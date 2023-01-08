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

import {React} from "react";
import {
    MDBBadge,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import SponsorshipYearsWrapper from "./Sponsorship-pills-component";
import SponsorCardSettings from "../Admin/Sposor-settings-component/Sponsor-card-settings";

const SponsorshipCardComponent = props => {

    return (
        <div>
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
                            </a> </MDBListGroupItem>{props.admin && <MDBListGroupItem>
                            <SponsorCardSettings sponsor={props.sponsor}/></MDBListGroupItem>}
                        </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default SponsorshipCardComponent;