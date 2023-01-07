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

import {React, useEffect, useState} from 'react';
import {Alert, AlertTitle, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBInput, MDBRow} from "mdb-react-ui-kit";
import {useFormik} from 'formik';
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../firebase";
import './Session-settings-styles.css'

const SessionSettingsComponent = () => {

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (showAlert === true) {
            setTimeout(() => {
                setShowAlert(false)
            }, "10000")
        }
    }, [showAlert]);


    const formik = useFormik({

        initialValues: {

            sessionSeriesName: ' ',
            sessionSeriesDescription: ' ',
            iteration:'studpro5',
            sessionOneName: ' ',
            sessionOneYT: ' ',
            sessionTwoName: ' ',
            sessionTwoYT: ' ',
            sessionThreeName: ' ',
            sessionThreeYT: ' ',
            sessionFourName: ' ',
            sessionFourYT: ' ',
            sessionFiveName: ' ',
            sessionFiveYT: ' ',
            sessionSixName: ' ',
            sessionSixYT: ' ',


        }, onSubmit: async (values, {resetForm}) => {

            const obj = {
                [values.sessionOneName.length > 2 ? values.sessionOneName : 'null']: values.sessionOneYT.length > 3 ? values.sessionOneYT : '',
                [values.sessionTwoName.length > 2 ? values.sessionTwoName : 'null']: values.sessionTwoYT.length > 3 ? values.sessionTwoYT : '',
                [values.sessionThreeName.length > 2 ? values.sessionThreeName : 'null']: values.sessionThreeYT.length > 3 ? values.sessionThreeYT : '',
                [values.sessionFourName.length > 2 ? values.sessionThreeName : 'null']: values.sessionFourYT.length > 3 ? values.sessionFourYT : '',
                [values.sessionFiveName.length > 2 ? values.sessionThreeName : 'null']: values.sessionFiveYT.length > 3 ? values.sessionFiveYT : '',
                [values.sessionSixName.length > 2 ? values.sessionThreeName : 'null']: values.sessionSixYT.length > 3 ? values.sessionSixYT : ''
            }

            const docRef = await addDoc(collection(db, `Videos/sessions/${values.iteration}`), {

                session_series_name: values.sessionSeriesName,
                session_description: values.sessionSeriesDescription,
                sessions: obj
            }).then(setShowAlert(true));
            console.log("Document written with ID: ", docRef.id);

            formik.resetForm()


        },
    });

    return (<div className='SessionSettingsComp'>

        {showAlert && <center><Alert variant="filled" className={"alert-fixed"} severity="success">
            <center><AlertTitle>Success</AlertTitle></center>
            Video Added Successfully!
        </Alert></center>}
        <MDBCard style={{backgroundColor: "#dfe5fd"}}>
            <span style={{marginTop: "10px"}} className="card-title-text">Add New Video</span>
            <p className={"font"} style={{fontSize: "20px"}}>Add a New Session Series to gallery</p>
            <MDBCardBody>
                <center style={{color: "red"}} className={"font"}>Please add the videos of a session at once, this
                    cannot be updated later.
                </center>
                <br/>
                <form onSubmit={formik.handleSubmit} className={"form-font"}>

                    <MDBInput
                        id='sessionSeriesName'
                        required
                        label='Session Series Name'
                        onChange={formik.handleChange}
                        value={formik.values.sessionSeriesName}
                    />
                    <br/>
                    <MDBInput
                        type='text'
                        id='sessionSeriesDescription'
                        required
                        label='Session Series Description'
                        onChange={formik.handleChange}
                        value={formik.values.sessionSeriesDescription}
                    />
                    <br/>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro Iteration
                        </MDBCol>
                        <MDBCol className={'d-flex align-content-start'} size={6}>
                            <FormControl sx={{m: 1, minWidth: 220}} size="small">
                                <InputLabel id="demo-select-small">Select Iteration</InputLabel>
                                <Select
                                    name={"iteration"} onChange={formik.handleChange}
                                    id={"iterationselector"} value={formik.values.iteration}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                    required
                                >
                                    {/*TODO Add Upcoming iterations here*/}
                                    <MenuItem value="studpro5" defaultValue>StudPro 5.0</MenuItem>
                                    <MenuItem value="studpro4">StudPro 4.0</MenuItem>
                                </Select>
                            </FormControl>
                        </MDBCol>
                    </MDBRow>
                    <div id='textExample1' className='form-text d-flex align-content-start'>
                        You can find youtube Video ID at the end of Youtube URL after watch?v= (Ex -
                        https://www.youtube.com/watch?v=B_IYFFbKkfz, ID is <b
                        style={{color: "red"}}>&nbsp;B_IYFFbKkfz</b>)
                    </div>
                    <br/>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionOneName'
                                required
                                label='Session Name'
                                onChange={formik.handleChange}
                                value={formik.values.sessionOneName}
                            />
                        </MDBCol>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionOneYT'
                                required
                                label='Youtube ID'
                                onChange={formik.handleChange}
                                value={formik.values.sessionOneYT}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionTwoName'
                                label='Session Name'
                                onChange={formik.handleChange}
                                value={formik.values.sessionTwoName}
                            />
                        </MDBCol>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionTwoYT'
                                label='Youtube ID'
                                onChange={formik.handleChange}
                                value={formik.values.sessionTwoYT}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionThreeName'
                                label='Session Name'
                                onChange={formik.handleChange}
                                value={formik.values.sessionThreeName}
                            />
                        </MDBCol>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionThreeYT'
                                label='Youtube ID'
                                onChange={formik.handleChange}
                                value={formik.values.sessionThreeYT}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionFourName'
                                label='Session Name'
                                onChange={formik.handleChange}
                                value={formik.values.sessionFourName}
                            />
                        </MDBCol>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionFourYT'
                                label='Youtube ID'
                                onChange={formik.handleChange}
                                value={formik.values.sessionFourYT}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionFiveName'
                                label='Session Name'
                                onChange={formik.handleChange}
                                value={formik.values.sessionFiveName}
                            />
                        </MDBCol>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionFiveYT'
                                label='Youtube ID'
                                onChange={formik.handleChange}
                                value={formik.values.sessionFiveYT}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionSixName'
                                label='Session Name'
                                onChange={formik.handleChange}
                                value={formik.values.sessionSixName}
                            />
                        </MDBCol>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            <MDBInput
                                type='text'
                                id='sessionSixYT'
                                label='Youtube ID'
                                onChange={formik.handleChange}
                                value={formik.values.sessionSixYT}
                            />
                        </MDBCol>
                    </MDBRow>
                    <br/>

                    <MDBBtn className='mb-4' type='submit' block>
                        Add Session Series
                    </MDBBtn>
                </form>
            </MDBCardBody>
        </MDBCard>
    </div>)
};

export default SessionSettingsComponent;
