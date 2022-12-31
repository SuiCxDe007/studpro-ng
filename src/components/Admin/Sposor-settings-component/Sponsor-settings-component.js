import {React, useEffect, useState} from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBFile, MDBInput, MDBRow} from 'mdb-react-ui-kit';
import './Sponsor-settings-styles.css';
import {useFormik} from 'formik';
import {
    ref,
    uploadBytes ,
    getDownloadURL, getStorage,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../../firebase";
import {Alert, AlertTitle, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const SponsorSettingsComponent = () => {
    const [logoURL, setLogoURL] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const storage = getStorage();

    useEffect(() => {
        if(showAlert === true){
            setTimeout(() => {
                setShowAlert(false)
            }, "10000")
        }
    }, [showAlert]);


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik({
        //TODO Add a sp variable under initial values for incrementing years i.e. sp1 = studpro 1.0
        initialValues: {
            companyName: '',
            yearsWithUs: '',
            companyURL: '',
            companyLogo: '',
            oid:'',
            sp1: '',
            sp2: '',
            sp3: '',
            sp4: '',
            sp5: '',

        }, onSubmit: async values => {
            const docRef = await addDoc(collection(db, "Companies"), {
                //TODO Add upcoming years to partnerships MAP
                name: values.companyName,
                logo: logoURL,
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
            }).then(
                setShowAlert(true)
            );
            console.log("Document written with ID: ", docRef.id);
                values.companyName= ''
                values.yearsWithUs= ''
                values.companyURL= ''
                values.companyLogo= ''
                values.oid=''
                values.sp1= ''
                values.sp2= ''
                values.sp3= ''
                values.sp4= ''
                values.sp5= ''


        },
    });
    const storageRef = ref(storage, `Company-Logos/${Math.random()}`);
    const onChangeHandler = (e) => {

        if(e.target.id.includes("companyLogo") && e.target.files[0]){
            uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(url=>{
                    setLogoURL(url)
                })
            })
        }
    }



    return (<div className='SponsorSettingsComp'>

        {showAlert &&  <center> <Alert variant="filled" className={"alert-fixed"} severity="success">
       <center><AlertTitle>Success</AlertTitle></center>
            Company Added Successfully!
    </Alert></center>}
        <MDBCard style={{backgroundColor: "#dfe5fd"}}>
            <span style={{marginTop: "10px"}} className="card-title-text">Add New Company</span>
            <p className={"font"} style={{fontSize: "20px"}}>Add a New Company to Company list in Landing Page</p>
            <MDBCardBody>
                <form onChange={onChangeHandler} onSubmit={formik.handleSubmit} className={"form-font"}>

                    <MDBInput className='mb-3'
                              id='companyName'
                              onChange={formik.handleChange}
                              value={formik.values.companyName}
                              required
                              label='Company Name'
                    />
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            Upload Company Logo
                        </MDBCol>
                        <MDBCol>
                            <MDBFile size={4}
                                     required
                                     className={'d-flex align-content-start'}
                                     id='companyLogo'
                                     onChange={formik.handleChange}
                                     value={formik.values.companyLogo}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBInput
                        type='url'
                        id='companyURL'
                        required
                        label='Company Website'
                        onChange={formik.handleChange}
                        value={formik.values.companyURL}
                    />
                    <br/>
                    <div className="form-helper">Enter the Order in which the Company should be displayed.</div>
                    <MDBInput
                        type='number'
                        id='oid'
                        required
                        label='Order ID'
                        onChange={formik.handleChange}
                        value={formik.values.oid}
                    />
                    <br/>
                    <MDBInput
                        type={"number"}
                        min={1}
                        id='yearsWithUs'
                        onChange={formik.handleChange}
                        value={formik.values.yearsWithUs}
                        required
                        label='Years With Us'
                    />
                    <br/>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro 1.0 Partnership
                        </MDBCol>
                        <MDBCol style={{marginLeft:"30px"}} className={'d-flex align-content-start'} size={6}>
                          <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                                <InputLabel id="demo-select-small">Select Partnership Type</InputLabel>
                                <Select
                                    name={"sp1"} onChange={formik.handleChange}
                                    id={"sp1selector"} value={formik.values.sp1}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value="" defaultValue> <em>None</em></MenuItem>
                                    <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                    <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                    <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                    <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                    <MenuItem value="Participant Company">Participant Company</MenuItem>

                                </Select>
                            </FormControl>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro 2.0 Partnership
                        </MDBCol>
                        <MDBCol style={{marginLeft:"30px"}} className={'d-flex align-content-start'} size={6}>
                            <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                                <InputLabel id="demo-select-small">Select Partnership Type</InputLabel>
                                <Select
                                    name={"sp2"} onChange={formik.handleChange}
                                    id={"sp2selector"} value={formik.values.sp2}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value="" defaultValue> <em>None</em></MenuItem>
                                    <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                    <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                    <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                    <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                    <MenuItem value="Participant Company">Participant Company</MenuItem>

                                </Select>
                            </FormControl>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro 3.0 Partnership
                        </MDBCol>
                        <MDBCol style={{marginLeft:"30px"}} className={'d-flex align-content-start'} size={6}>
                            <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                                <InputLabel id="demo-select-small">Select Partnership Type</InputLabel>
                                <Select
                                    name={"sp3"} onChange={formik.handleChange}
                                    id={"sp3selector"} value={formik.values.sp3}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value="" defaultValue> <em>None</em></MenuItem>
                                    <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                    <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                    <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                    <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                    <MenuItem value="Participant Company">Participant Company</MenuItem>

                                </Select>
                            </FormControl>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro 4.0 Partnership
                        </MDBCol>
                        <MDBCol style={{marginLeft:"30px"}} className={'d-flex align-content-start'} size={6}>
                            <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                                <InputLabel id="demo-select-small">Select Partnership Type</InputLabel>
                                <Select
                                    name={"sp4"} onChange={formik.handleChange}
                                    id={"sp4selector"} value={formik.values.sp4}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value="" defaultValue> <em>None</em></MenuItem>
                                    <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                    <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                    <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                    <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                    <MenuItem value="Participant Company">Participant Company</MenuItem>

                                </Select>
                            </FormControl>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro 5.0 Partnership
                        </MDBCol>
                        {/*TODO: Add a another selector for incrementing years to come!*/}
                        <MDBCol style={{marginLeft:"30px"}} className={'d-flex align-content-start'} size={6}>
                            <FormControl  sx={{ m: 1, minWidth: 220 }} size="small">
                                <InputLabel id="demo-select-small">Select Partnership Type</InputLabel>
                                <Select
                                    name={"sp5"} onChange={formik.handleChange}
                                    id={"sp5selector"} value={formik.values.sp5}
                                    labelId="demo-select-small"
                                    label="Select Partnership Type"
                                >
                                    <MenuItem value="" defaultValue> <em>None</em></MenuItem>
                                    <MenuItem value="Platinum Partner">Platinum Partner</MenuItem>
                                    <MenuItem value="Gold Partner">Gold Partner</MenuItem>
                                    <MenuItem value="Silver Partner">Silver Partner</MenuItem>
                                    <MenuItem value="Bronze Partner">Bronze Partner</MenuItem>
                                    <MenuItem value="Participant Company">Participant Company</MenuItem>

                                </Select>
                            </FormControl>
                        </MDBCol>

                    </MDBRow>

                    <MDBBtn className='mb-4' type='submit' block>
                        Add Company
                    </MDBBtn>
                </form>
            </MDBCardBody>
        </MDBCard>
    </div>)

}

export default SponsorSettingsComponent;