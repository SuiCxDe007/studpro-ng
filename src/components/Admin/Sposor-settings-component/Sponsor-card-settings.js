import {deleteObject, getStorage, ref} from "firebase/storage";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../../firebase";
import {toast} from "react-toastify";
import {React, useState} from "react";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {MDBBtn} from "mdb-react-ui-kit";

const SponsorCardSettings = (props) => {

    const storage = getStorage();

    const onDeleteHandler = async (id, logo) => {
        console.log(props.sponsor.id)
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
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteModalOpen = () => {
        setShowDeleteModal(!showDeleteModal);
    };

    const handleClose = () => {
        onDeleteHandler(props.sponsor.id, props.sponsor.logo).then(r => setShowDeleteModal(false));
    };

    return (
        <>
            <Dialog
                open={showDeleteModal}
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
                    <Button variant="outlined" color="warning" onClick={handleDeleteModalOpen}>Cancel</Button>
                    <Button onClick={handleClose} variant="contained" color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <MDBBtn onClick={handleDeleteModalOpen} rounded className='mx-2' color='danger'>
                Delete
            </MDBBtn>
            <MDBBtn rounded className='mx-2' color='warning'>
                Delete
            </MDBBtn>
        </>
    );
};

export default SponsorCardSettings;
