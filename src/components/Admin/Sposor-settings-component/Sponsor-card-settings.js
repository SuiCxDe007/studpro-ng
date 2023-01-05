import {deleteObject, getStorage, ref} from "firebase/storage";
import {addDoc, collection,updateDoc  , deleteDoc, doc} from "firebase/firestore";
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
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useFormik} from "formik";

const SponsorCardSettings = (props) => {

    const storage = getStorage();

    const onDeleteHandler = async (id, logo) => {
        console.log(props.sponsor.id)
        const gsReference = ref(storage, logo);
        await deleteDoc(doc(db, `Companies`, id)).then(() => {

            deleteObject(gsReference).then(() => {
                toast.success('Partner Deleted!')
                toast.info('Reload the page!')
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
    const [showUpdateMpdal, setShowUpdateMpdal] = useState(false);

    const handleDeleteModalOpen = () => {
        setShowDeleteModal(!showDeleteModal);
    };

    const handleUpdateModalOpen = () => {
        setShowUpdateMpdal(!showUpdateMpdal);
    };

    const handleDeleteClose = () => {
        onDeleteHandler(props.sponsor.id, props.sponsor.logo).then(() => setShowDeleteModal(false));
    };


    const formik = useFormik({


        initialValues: {
            companyName: props.sponsor.name,
            yearsWithUs: props.sponsor.years,
            companyURL: props.sponsor.companyURL,
            oid: props.sponsor.oid,
            sp1: props.sponsor.partnerships.spone,
            sp2: props.sponsor.partnerships.sptwo,
            sp3: props.sponsor.partnerships.spthree,
            sp4: props.sponsor.partnerships.spfour,
            sp5: props.sponsor.partnerships.spfive,

        }, onSubmit: async values => {

            console.log(values)
            const updateRef = doc(db, "Companies", props.sponsor.id);
            const docRef = await updateDoc(updateRef, {

                name: values.companyName,
                oid : values.oid,
                years: values.yearsWithUs,
                companyURL : values.companyURL,
                partnerships: {
                    spone: values.sp1,
                    sptwo: values.sp2,
                    spthree: values.sp3,
                    spfour: values.sp4,
                    spfive: values.sp5,
                }
            }).then(()=> {
                toast.success('Partner Updated!')
                toast.info('Reload the page!')
                setShowUpdateMpdal(false)
            }).catch(error=>{
                toast.error(`Error Updating Partner.`)
                toast.error('Reload the page!')
                console.error('Error deleting document: ', error);
                setShowUpdateMpdal(false);
            })


        },
    });

    const handleUpdateClose = () => {

    }


    return (
        <>
            <Dialog
                open={showDeleteModal}
                TransitionComponent={Slide}
                keepMounted
                onClose={handleDeleteClose}
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
                    <Button onClick={handleDeleteClose} variant="contained" color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={showUpdateMpdal}                 TransitionComponent={Slide} onClose={handleUpdateClose}>
                <DialogTitle>Update Company Info</DialogTitle>
                <DialogContent>


                    <div>
                        <form  onSubmit={formik.handleSubmit} className={"form-font"}>
                        <TextField
                            name="companyName"
                            autoFocus
                            margin="dense"
                            id="companyName"
                            label="Company Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                            value={formik.values.companyName}
                        />
                        <TextField
                            name="yearsWithUs"
                            autoFocus
                            margin="dense"
                            id="yearsWithUs"
                            label="Years with Us"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={formik.handleChange}
                            value={formik.values.yearsWithUs}
                        />
                        <TextField
                            name="companyURL"
                            autoFocus
                            margin="dense"
                            id="companyURL"
                            label="Company URL"
                            type="url"
                            fullWidth
                            onChange={formik.handleChange}
                            variant="standard"
                            value={formik.values.companyURL}
                        />
                        <TextField
                            name="oid"
                            autoFocus
                            margin="dense"
                            id="oid"
                            onChange={formik.handleChange}
                            style={{marginBottom:"15px"}}
                            label="Order ID"
                            type="number"
                            fullWidth
                            variant="standard"
                            defaultValue={formik.values.oid}
                            value={formik.values.oid}
                        /><br/>
                            {/*TODO add another form control for iteration*/}
                        <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                            <InputLabel id="demo-select-small">StudPro 1.0 Partnership Type</InputLabel>
                            <Select
                                name={"sp1"} onChange={formik.handleChange}
                                id={"sp1selector"} value={formik.values.sp1}
                                defaultValue={ props.sponsor.partnerships.spone}
                                labelId="demo-select-small"
                                label="Select Partnership Type"
                            >
                                <MenuItem value="" > <em>None</em></MenuItem>
                                <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                <MenuItem value="Participant Company">Participant Company</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                            <InputLabel id="demo-select-small">StudPro 2.0 Partnership Type</InputLabel>
                            <Select
                                name={"sp2"} onChange={formik.handleChange}
                                id={"sp2selector"} value={formik.values.sp2}
                                defaultValue={ props.sponsor.partnerships.sptwo}
                                labelId="demo-select-small"
                                label="Select Partnership Type"
                            >
                                <MenuItem value="" > <em>None</em></MenuItem>
                                <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                <MenuItem value="Participant Company">Participant Company</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                            <InputLabel id="demo-select-small">StudPro 3.0 Partnership Type</InputLabel>
                            <Select
                                name={"sp3"} onChange={formik.handleChange}
                                id={"sp3selector"} value={formik.values.sp3}
                                defaultValue={ props.sponsor.partnerships.spthree}
                                labelId="demo-select-small"
                                label="Select Partnership Type"
                            >
                                <MenuItem value="" > <em>None</em></MenuItem>
                                <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                <MenuItem value="Participant Company">Participant Company</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                            <InputLabel id="demo-select-small">StudPro 4.0 Partnership Type</InputLabel>
                            <Select
                                name={"sp4"} onChange={formik.handleChange}
                                id={"sp3selector"} value={formik.values.sp4}
                                defaultValue={ props.sponsor.partnerships.spfour}
                                labelId="demo-select-small"
                                label="Select Partnership Type"
                            >
                                <MenuItem value="" > <em>None</em></MenuItem>
                                <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                <MenuItem value="Participant Company">Participant Company</MenuItem>

                            </Select>
                        </FormControl>
                        <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                            <InputLabel id="demo-select-small">StudPro 5.0 Partnership Type</InputLabel>
                            <Select
                                name={"sp5"} onChange={formik.handleChange}
                                id={"sp5selector"} value={formik.values.sp5}
                                defaultValue={ props.sponsor.partnerships.spfive}
                                labelId="demo-select-small"
                                label="Select Partnership Type"
                            >
                                <MenuItem value="" > <em>None</em></MenuItem>
                                <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                <MenuItem value="Participant Company">Participant Company</MenuItem>

                            </Select>
                        </FormControl>

                        </form>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="warning" onClick={handleUpdateModalOpen}>Cancel</Button>
                    <Button  variant="contained" color="warning" onClick={formik.handleSubmit}>Subscribe</Button>
                </DialogActions>
            </Dialog>

            <MDBBtn onClick={handleDeleteModalOpen} rounded className='mx-2' color='danger'>
                Delete
            </MDBBtn>
            <MDBBtn onClick={handleUpdateModalOpen} rounded className='mx-2' color='warning'>
                Update
            </MDBBtn>
        </>
    );
};

export default SponsorCardSettings;
