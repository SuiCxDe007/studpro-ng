/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Created by Kaveen Abeyrathne for StudPro 5.0 as a place for students to look
 *  into What they can learn,companies to understand what to expect. This website
 *  was developed as a first step to taking StudPro to a higher elevation. You are
 *  free to update,share & modify the work for IEEE purposes ONLY.
 *
 *  Content of the source code is not authorized to use for any commercial purpose.
 *
 *  SuiCxDe007 | https://github.com/SuiCxDe007 | kaveenmadawa@gmail.com
 *
 *  ~ Copyright © 2023 SuiCxDe
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

import {deleteObject, getStorage, ref} from "firebase/storage";
import {deleteDoc, doc, updateDoc} from "firebase/firestore";
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

/**
 *
 * Created by Kaveen Abeyrathne | ©SuiCxDe | https://github.com/SuiCxDe007/
 * StudPro 5.0
 *
 */

/**
 *
 * This Component is used to control settings of Sponsorship card. Per Iteration make the marked updates as required.
 * Improvements : Add Logo update to modal dialog.
 *
 */

const SponsorCardSettings = (props) => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const storage = getStorage();

    const onDeleteHandler = async (id, logo) => {

        const gsReference = ref(storage, logo);

        await deleteDoc(doc(db, `Companies`, id)).then(() => {

            deleteObject(gsReference).then(() => {
                toast.success('Partner Deleted!')
            }).catch((error) => {
                toast.error(`Error Deleting Logo.`)
                console.error('Error deleting logo: ', error);
            });
        }).catch((error) => {
            toast.error(`Error Deleting Partner.`)
            console.error('Error deleting document: ', error);
        });
    }

    const handleDeleteModalOpen = () => {
        setShowDeleteModal(!showDeleteModal);
    };

    const handleUpdateModalOpen = () => {
        setShowUpdateModal(!showUpdateModal);
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
            jobs: props.sponsor.jobs,
            jobURL: props.sponsor.jobURL,
            // TODO Add iterations here
            sp1: props.sponsor.partnerships.spone,
            sp2: props.sponsor.partnerships.sptwo,
            sp3: props.sponsor.partnerships.spthree,
            sp4: props.sponsor.partnerships.spfour,
            sp5: props.sponsor.partnerships.spfive,

        }, onSubmit: async values => {

            if (typeof values.jobs === "object") {
                values.jobs = values.jobs.join(",")
            }

            const updateRef = doc(db, "Companies", props.sponsor.id);
            await updateDoc(updateRef, {

                name: values.companyName,
                oid: values.oid,
                years: values.yearsWithUs,
                companyURL: values.companyURL,
                jobs: values.jobs===undefined || values.jobs.length === 0 ? null : values.jobs.split(','),
                jobURL: values.jobURL===undefined  || values.jobURL.length === 0 ? null : values.jobURL,
                partnerships: {
                    spone: values.sp1, sptwo: values.sp2, spthree: values.sp3, spfour: values.sp4, spfive: values.sp5,
                }
            }).then(() => {
                toast.success('Partner Updated!')
                setShowUpdateModal(false)
            }).catch(error => {
                toast.error(`Error Updating Partner.`)
                toast.error('Reload the page!')
                console.error('Error deleting document: ', error);
                setShowUpdateModal(false);
            })
        },
    });

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

            <Dialog open={showUpdateModal} TransitionComponent={Slide}>
                <DialogTitle>Update Company Info</DialogTitle>
                <DialogContent>
                    <div>
                        <form onSubmit={formik.handleSubmit} className={"form-font"}>
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
                                style={{marginBottom: "15px"}}
                                label="Order ID"
                                type="number"
                                fullWidth
                                variant="standard"
                                defaultValue={formik.values.oid}
                                value={formik.values.oid}
                            /><br/>
                            <TextField
                                name="jobs"
                                autoFocus
                                margin="dense"
                                id="jobs"
                                label="Available Job Opportunities (Separate by comma)"
                                type="text"
                                fullWidth
                                variant="standard"
                                defaultValue={formik.values.jobs}
                                onChange={formik.handleChange}
                                value={formik.values.jobs}
                            /><br/>
                            <TextField
                                name="jobURL"
                                autoFocus
                                margin="dense"
                                id="jobURL"
                                label="Job Application URL"
                                type="url"
                                fullWidth
                                variant="standard"
                                defaultValue={formik.values.jobURL}
                                onChange={formik.handleChange}
                                value={formik.values.jobURL}
                            /><br/><br/>
                            {/*TODO add another form control for iteration*/}
                            <FormControl sx={{m: 1, minWidth: 220}} size="small">
                                <InputLabel id="demo-select-small">StudPro 1.0 Partnership Type</InputLabel>
                                <Select
                                    name={"sp1"} onChange={formik.handleChange}
                                    id={"sp1selector"} value={formik.values.sp1}
                                    defaultValue={props.sponsor.partnerships.spone}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value=""> <em>None</em></MenuItem>
                                    <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                    <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                    <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                    <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                    <MenuItem value="Participant Company">Participant Company</MenuItem>

                                </Select>
                            </FormControl>
                            <FormControl sx={{m: 1, minWidth: 220}} size="small">
                                <InputLabel id="demo-select-small">StudPro 2.0 Partnership Type</InputLabel>
                                <Select
                                    name={"sp2"} onChange={formik.handleChange}
                                    id={"sp2selector"} value={formik.values.sp2}
                                    defaultValue={props.sponsor.partnerships.sptwo}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value=""> <em>None</em></MenuItem>
                                    <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                    <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                    <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                    <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                    <MenuItem value="Participant Company">Participant Company</MenuItem>

                                </Select>
                            </FormControl>
                            <FormControl sx={{m: 1, minWidth: 220}} size="small">
                                <InputLabel id="demo-select-small">StudPro 3.0 Partnership Type</InputLabel>
                                <Select
                                    name={"sp3"} onChange={formik.handleChange}
                                    id={"sp3selector"} value={formik.values.sp3}
                                    defaultValue={props.sponsor.partnerships.spthree}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value=""> <em>None</em></MenuItem>
                                    <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                    <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                    <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                    <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                    <MenuItem value="Participant Company">Participant Company</MenuItem>

                                </Select>
                            </FormControl>
                            <FormControl sx={{m: 1, minWidth: 220}} size="small">
                                <InputLabel id="demo-select-small">StudPro 4.0 Partnership Type</InputLabel>
                                <Select
                                    name={"sp4"} onChange={formik.handleChange}
                                    id={"sp3selector"} value={formik.values.sp4}
                                    defaultValue={props.sponsor.partnerships.spfour}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value=""> <em>None</em></MenuItem>
                                    <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                    <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                    <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                    <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                    <MenuItem value="Participant Company">Participant Company</MenuItem>

                                </Select>
                            </FormControl>
                            <FormControl sx={{m: 1, minWidth: 220}} size="small">
                                <InputLabel id="demo-select-small">StudPro 5.0 Partnership Type</InputLabel>
                                <Select
                                    name={"sp5"} onChange={formik.handleChange}
                                    id={"sp5selector"} value={formik.values.sp5}
                                    defaultValue={props.sponsor.partnerships.spfive}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value=""> <em>None</em></MenuItem>
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
                    <Button variant="contained" color="warning" onClick={formik.handleSubmit}>Update</Button>
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
