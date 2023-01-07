import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol} from "mdb-react-ui-kit";
import {deleteObject, getStorage, ref} from "firebase/storage";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../../firebase";
import {toast} from "react-toastify";

const GalleryCardWrapper = (props) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const onDeleteHandler = async (id, URL) => {
        const storage = getStorage();
        const gsReference = ref(storage, URL);

        await deleteDoc(doc(db, `PhotoGallery/StudProIteration/studpro5`, id)).then(() => {

            deleteObject(gsReference).then(() => {
                toast.success('Image Deleted!')
                toast.info('Reload the page!')
            }).catch((error) => {
                toast.error(`Error Deleting Image from Object Storage.`)
                console.error('Error deleting Image: ', error);
            });
        }).catch((error) => {
            toast.error(`Error Deleting Image.`)
            toast.error('Reload the page!')
            console.error('Error deleting document: ', error);
        }).finally(() => {
                setShowDeleteModal(false);
            }
        );
    }

    const handleDeleteModalOpen = () => {
        setShowDeleteModal(!showDeleteModal);
    };


    return (
        <div>
            <Dialog
                key={props.data.id}
                open={showDeleteModal}
                TransitionComponent={Slide}
                keepMounted
                onClose={handleDeleteModalOpen}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{color: "red"}}>{"Confirm Deletion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        This action is irreversible!<br/> Are you sure you want to delete this
                        image?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="warning" onClick={handleDeleteModalOpen}>Cancel</Button>
                    <Button onClick={() => onDeleteHandler(props.data.id, props.data.src)} variant="contained"
                            color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <MDBCol key={props.data.src}>
                <MDBCard>
                    <MDBCardImage height='200px' src={props.data.src} alt='...' position='top'/>
                    <MDBCardBody>
                        <MDBBtn onClick={handleDeleteModalOpen} color={"danger"}>Delete</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    );
};

export default GalleryCardWrapper;
