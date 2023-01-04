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

const SponsorshipCardComponent = props => {


    const onDeleteHandler = async (id) => {
        await deleteDoc(doc(db, `Companies`, id)).then(() => {
            toast.success('Partner Deleted!')
            toast.success('Reload the page!')
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
        onDeleteHandler(props.sponsor.id).then(r => setOpen(false));
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Slide}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{color: "red"}}>{"Confirm Deletion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        This action is irreversible!<br/> Are you sure you want to delete <b>{props.sponsor.name}?
                    </b> </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="warning" onClick={handleClickOpen}>Cancel</Button>
                    <Button onClick={handleClose} variant="contained" color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>


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
                            </a> {props.admin &&
                                <MDBBtn onClick={handleClickOpen} rounded className='mx-2' color='danger'>
                                    Delete
                                </MDBBtn>}
                            </MDBListGroupItem> </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol></div>
    )
}

export default SponsorshipCardComponent;