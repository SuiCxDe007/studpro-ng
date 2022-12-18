import {React} from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardLink, MDBCardOverlay,
    MDBCardText,
    MDBCardTitle, MDBCol,
    MDBListGroup,
    MDBListGroupItem, MDBRow
} from 'mdb-react-ui-kit';


const SponsorshipCardComponent = props => {

    return (
        <MDBCol >
        <MDBCard className={'h-100'}>
            <MDBCardImage
                src={`${props.sponsor.logo}`}
                alt='...'
                position='top'
            />
            <MDBCardBody>
                <MDBCardTitle className={"font"}> <strong>{props.sponsor.name}</strong></MDBCardTitle>
                <MDBCardText>
                                 {props.sponsor.partnership}
                             </MDBCardText>
                <MDBListGroup flush>
                            <MDBListGroupItem>Years With Us</MDBListGroupItem>
                        </MDBListGroup>
                <MDBCardLink href='#'>Website</MDBCardLink>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
           )
}

export default SponsorshipCardComponent;