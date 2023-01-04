import {React} from "react";
import {
    MDBBadge, MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCol, MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import SponsorshipPills from "./Sponsorship-pills-component";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../firebase";
import {toast, ToastContainer} from "react-toastify";

const SponsorshipCardComponent = props => {


    const onDeleteHandler =async (id) => {
        await deleteDoc(doc(db, `Companies`, id)).then(() => {
            toast.success('Partner Deleted!')
            toast.success('Reload the page!')
        }).catch((error) => {
            toast.error(`Error Deleting Partner.`)
            toast.error('Reload the page!')
            console.error('Error deleting document: ', error);
        });
    }

    return (
        <MDBCol>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
                            className='ms-2' pill color='warning' >{props.sponsor.oid}</MDBBadge></MDBListGroupItem>}
                        <MDBListGroupItem>
                            <MDBBadge
                            className='ms-2'>{props.sponsor.years}</MDBBadge>&nbsp;&nbsp;Year(s) With
                            Us</MDBListGroupItem>
                        <MDBListGroupItem> <SponsorshipPills partnerships={props.sponsor.partnerships}/>
                        </MDBListGroupItem>
                        <MDBListGroupItem> <a href={props.sponsor.companyURL} target={"_blank"}>
                            <button style={{position: "relative", bottom: "0"}} type="button"
                                    className="btn btn-primary btn-rounded">Website
                            </button>
                        </a> {props.admin && <MDBBtn onClick={()=>onDeleteHandler(props.sponsor.id)} rounded className='mx-2' color='danger'>
                            Delete
                        </MDBBtn>}
                        </MDBListGroupItem> </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default SponsorshipCardComponent;