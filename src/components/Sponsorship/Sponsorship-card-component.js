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
import SponsorshipPills from "./Sponsorship-pills-component";


const SponsorshipCardComponent = props => {

    console.log(props.sponsor.partnerships)

    return (
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
                        <MDBListGroupItem> <MDBBadge
                            className='ms-2'>{props.sponsor.years}</MDBBadge>&nbsp;&nbsp;Year(s) With
                            Us</MDBListGroupItem>
                        <MDBListGroupItem> <SponsorshipPills partnerships={props.sponsor.partnerships}/>
                        </MDBListGroupItem>

                        <MDBListGroupItem>  <a href={props.sponsor.companyURL} target={"_blank"}> <button style={{position:"relative", bottom:"0"}} type="button" className="btn btn-primary btn-rounded">Website</button></a>
                    </MDBListGroupItem>   </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default SponsorshipCardComponent;