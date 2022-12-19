import {React, useEffect, useState} from "react";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBFile, MDBInput, MDBRow} from 'mdb-react-ui-kit';
import './Sponsor-settings-styles.css';
import {useFormik} from 'formik';
import {
    ref,
    uploadBytes ,
    getDownloadURL, getStorage,
} from "firebase/storage";

const SponsorSettingsComponent = () => {
    const [file,setFile] = useState("")
    const storage = getStorage();


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik({
        //TODO Add a sp variable under initial values for incrementing years i.e. sp1 = studpro 1.0
        initialValues: {
            companyName: '',
            yearsWithUs: '',
            companyURL: '',
            companyLogo: '',
            sp1: '',
            sp2: '',
            sp3: '',
            sp4: '',
            sp5: '',

        }, onSubmit: values => {
            console.log(values)
        },
    });
    const storageRef = ref(storage, `Company-Logos/${Math.random()}`);
    const onChangeHandler = (e) => {

        if(e.target.id.includes("companyLogo") && e.target.files[0]){
            setFile(e.target.value)
            uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(url=>{
                    console.log(url+"url")
                })
            })
        }
    }


    return (<div className='SponsorSettingsComp'>
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
                        <MDBCol size={6}>
                            <select className="form-select" name={"sp1"} onChange={formik.handleChange}
                                    id={"sp1selector"} value={formik.values.sp1} multiple={false}
                                    aria-label="Default select example">
                                <option value=" " defaultValue>Select Partnership Type</option>
                                <option value="Platinum Partner">Platinum Partner</option>
                                <option value="Gold Partner">Gold Partner</option>
                                <option value="Silver Partner">Silver Partner</option>
                                <option value="Bronze Partner">Bronze Partner</option>
                                <option value="Participant Company">Participant Company</option>
                            </select>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro 2.0 Partnership
                        </MDBCol>
                        <MDBCol size={6}>
                            <select className="form-select" name={"sp2"} onChange={formik.handleChange}
                                    id={"sp2selector"} value={formik.values.sp2} multiple={false}
                                    aria-label="Default select example">
                                <option value=" " defaultValue>Select Partnership Type</option>
                                <option value="Platinum Partner">Platinum Partner</option>
                                <option value="Gold Partner">Gold Partner</option>
                                <option value="Silver Partner">Silver Partner</option>
                                <option value="Bronze Partner">Bronze Partner</option>
                                <option value="Participant Company">Participant Company</option>
                            </select>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro 3.0 Partnership
                        </MDBCol>
                        <MDBCol size={6}>
                            <select className="form-select" name={"sp3"} onChange={formik.handleChange}
                                    id={"sp3selector"} value={formik.values.sp3} multiple={false}
                                    aria-label="Default select example">
                                <option value=" " defaultValue>Select Partnership Type</option>
                                <option value="Platinum Partner">Platinum Partner</option>
                                <option value="Gold Partner">Gold Partner</option>
                                <option value="Silver Partner">Silver Partner</option>
                                <option value="Bronze Partner">Bronze Partner</option>
                                <option value="Participant Company">Participant Company</option>
                            </select>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro 4.0 Partnership
                        </MDBCol>
                        <MDBCol size={6}>
                            <select className="form-select" name={"sp4"} onChange={formik.handleChange}
                                    id={"sp4selector"} value={formik.values.sp4} multiple={false}
                                    aria-label="Default select example">
                                <option value=" " defaultValue>Select Partnership Type</option>
                                <option value="Platinum Partner">Platinum Partner</option>
                                <option value="Gold Partner">Gold Partner</option>
                                <option value="Silver Partner">Silver Partner</option>
                                <option value="Bronze Partner">Bronze Partner</option>
                                <option value="Participant Company">Participant Company</option>
                            </select>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow className='mb-4'>
                        <MDBCol size={2} className={'d-flex align-content-start'}>
                            StudPro 5.0 Partnership
                        </MDBCol>
                        {/*TODO: Add a another selector for incrementing years to come!*/}
                        <MDBCol size={6}>
                            <select className="form-select" name={"sp5"} onChange={formik.handleChange}
                                    id={"sp5selector"} value={formik.values.sp5} multiple={false}
                                    aria-label="Default select example">
                                <option value=" " defaultValue>Select Partnership Type</option>
                                <option value="Platinum Partner">Platinum Partner</option>
                                <option value="Gold Partner">Gold Partner</option>
                                <option value="Silver Partner">Silver Partner</option>
                                <option value="Bronze Partner">Bronze Partner</option>
                                <option value="Participant Company">Participant Company</option>
                            </select>
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