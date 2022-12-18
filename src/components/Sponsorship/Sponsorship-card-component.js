import {React} from "react";
import {
    MDBBadge,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardLink,
    MDBCardTitle,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import SponsorshipPills from "./Sponsorship-pills-component";


const SponsorshipCardComponent = props => {

    console.log(props.sponsor.partnerships)

    return (
        <MDBCol>
            <MDBCard className={'h-100'}>
                <MDBCardImage
                    //   src={`${props.sponsor.logo}`}
                    alt='...'
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle className={"font"}> <strong>{props.sponsor.name}</strong></MDBCardTitle>
                    <MDBListGroup flush>
                        <MDBListGroupItem> <MDBBadge
                            className='ms-2'>{props.sponsor.years}</MDBBadge>&nbsp;&nbsp;Year(s) With
                            Us</MDBListGroupItem>
                        <MDBListGroupItem> <SponsorshipPills partnerships={props.sponsor.partnerships}/>
                        </MDBListGroupItem>
                    </MDBListGroup>
                    <MDBCardLink href='#'>Website</MDBCardLink>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default SponsorshipCardComponent;