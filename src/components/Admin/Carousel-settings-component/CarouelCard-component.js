import React from 'react';
import {useEffect, useState} from "react";
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBRow} from "mdb-react-ui-kit";
import {deleteObject, getStorage, ref} from "firebase/storage";
import {toast} from "react-toastify";
import Box from "@mui/material/Box";
import {Skeleton} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

const CarouselCard = () => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [sponsordataState, setSponsorData] = useState(null);

    const storage = getStorage();

    const fetchPost = async () => {
        await getDocs(collection(db, "CarouselData"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setSponsorData(newData)
            })
    }

    useEffect(() => {
        fetchPost()
    }, [])


    const onDeleteHandler = async (id, URL) => {

        const gsReference = ref(storage, URL);

        await deleteDoc(doc(db, `CarouselData`, id)).then(() => {

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
        }).finally(
            setShowDeleteModal(false)
        );
    }

    const handleDeleteModalOpen = () => {
        setShowDeleteModal(!showDeleteModal);
    };

    return (
        <div style={{marginTop:"20px"}}>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            {sponsordataState ? sponsordataState.map(x=>{

                return(
                    <>
                        <Dialog
                            key={x.id}
                            open={showDeleteModal}
                            TransitionComponent={Slide}
                            keepMounted
                            onClose={handleDeleteModalOpen}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle style={{color: "red"}}>{"Confirm Deletion"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    This action is irreversible!<br/> Are you sure you want to delete this image? </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button variant="outlined" color="warning" onClick={handleDeleteModalOpen}>Cancel</Button>
                                <Button onClick={()=>onDeleteHandler(x.id,x.url)} variant="contained" color="error">
                                    Delete
                                </Button>
                            </DialogActions>
                        </Dialog>
                    <MDBCol key={x.url}>
                    <MDBCard >
                        <MDBCardImage height='200px' src={x.url} alt='...' position='top' />
                        <MDBCardBody>
                            <MDBCardText>
                                {x.name}
                            </MDBCardText>
                            <MDBBtn onClick={handleDeleteModalOpen} color={"danger"}>Delete</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                        </>
                )

            }) : (
              <>  <Box sx={{ pt: 0.5 }}>
                    <Skeleton animation="wave" height={120} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={30}  />
                    <Skeleton animation="wave" height={30}  />
                    <Skeleton animation="wave" height={30}  />
                </Box>
                <Box sx={{ pt: 0.5 }}>
                <Skeleton animation="wave" height={120} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={30} />
                <Skeleton animation="wave" height={30} />
                <Skeleton animation="wave" height={30} />
                </Box>
                <Box sx={{ pt: 0.5 }}>
                <Skeleton animation="wave" height={120} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={30} />
                <Skeleton animation="wave" height={30} />
                <Skeleton animation="wave" height={30} />
                </Box></>
            )}

            </MDBRow>
        </div>
    );
};

export default CarouselCard;
