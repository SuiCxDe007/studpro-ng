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
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import SponsorshipPills from "./Sponsorship-pills-component";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../firebase";
import {toast} from "react-toastify";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { getStorage, ref, deleteObject } from "firebase/storage";
import SponsorCardSettings from "../Admin/Sposor-settings-component/Sponsor-card-settings";

const SponsorshipCardComponent = props => {

    const storage = getStorage();

    const onDeleteHandler = async (id,logo) => {
        const gsReference = ref(storage, logo);
        await deleteDoc(doc(db, `Companies`, id)).then(() => {

            deleteObject(gsReference).then(() => {
                toast.success('Partner Deleted!')
                toast.success('Reload the page!')
            }).catch((error) => {
                console.error('Error deleting logo: ', error);
            });

        }).catch((error) => {
            toast.error(`Error Deleting Partner.`)
            toast.error('Reload the page!')
            console.error('Error deleting document: ', error);
        });
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        onDeleteHandler(props.id,props.logo).then(r => setOpen(false));
    };

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
                            <MDBListGroupItem> <SponsorshipPills partnerships={props.sponsor.partnerships}/>
                            </MDBListGroupItem>
                            <MDBListGroupItem> <a href={props.sponsor.companyURL} target={"_blank"}>
                                <button style={{position: "relative", bottom: "0"}} type="button"
                                        className="btn btn-primary btn-rounded">Website
                                </button>
                            </a>  </MDBListGroupItem>{props.admin &&<MDBListGroupItem>
                                <SponsorCardSettings sponsor={props.sponsor}/></MDBListGroupItem>}
                            </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol></div>
    )
}

export default SponsorshipCardComponent;