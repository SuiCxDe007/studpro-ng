import React, {useState} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBFile, MDBInput, MDBRow, MDBSpinner} from "mdb-react-ui-kit";
import {useFormik} from "formik";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../firebase";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {toast, ToastContainer} from "react-toastify";
import CarouselCard from "./CarouelCard-component";

const CarouselSettings = () => {

    const [logoURL, setLogoURL] = useState('');
    const storage = getStorage();

    const formik = useFormik({

        initialValues: {
            name: '',
            carouselURL: '',

        }, onSubmit: async values => {
            await addDoc(collection(db, "CarouselData"), {

                name: values.name,
                url: logoURL,

            }).then(() => {
                toast.success('Carousel Image Updated!')
                toast.info('Reload the page!')
            }).catch(e => {
                toast.error(`Carousel Image update failure.`)
                toast.error('Reload the page!')
            });
            values.name = ''
            values.carouselURL = ''
        },
    });
    const storageRef = ref(storage, `/Carousel/${Math.random()}`);
    const onChangeHandler = (e) => {

        if (e.target.id.includes("carouselURL") && e.target.files[0]) {
            uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(url => {
                    setLogoURL(url)
                })
            })
        }
    }

    return (
        <div style={{marginTop: "20px", marginLeft: "50px", marginRight: "50px"}}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <MDBCard style={{backgroundColor: "#dfe5fd"}}>
                <span style={{marginTop: "10px"}} className="card-title-text">Add Carousel Image</span>
                <p className={"font"} style={{fontSize: "20px"}}>Add a New Image to carousel. <b style={{color:"red"}}> Make sure the image height is 400px</b></p>
                <b><i>Convert Image type into .webp to reduce image size</i></b>
                <MDBCardBody>
                    <form onChange={onChangeHandler} onSubmit={formik.handleSubmit} className={"form-font"}>

                        <MDBInput className='mb-3'
                                  id='name'
                                  onChange={formik.handleChange}
                                  value={formik.values.name}
                                  required
                                  label='Identifier Name'
                        />
                        <MDBRow className='mb-4'>
                            <MDBCol size={2} className={'d-flex align-content-start'}>
                                Upload Image
                            </MDBCol>
                            <MDBCol>
                                <MDBFile size={4}
                                         required
                                         className={'d-flex align-content-start'}
                                         id='carouselURL'
                                         onChange={formik.handleChange}
                                         value={formik.values.carouselURL}
                                />
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBBtn disabled={logoURL.length===0} className='mb-4' type='submit' block>
                            {logoURL.length===0?  <MDBSpinner grow color='light'>
                                <span className='visually-hidden'>Loading...</span>
                            </MDBSpinner>: <span>Add Image</span>}
                        </MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
            <CarouselCard/>
        </div>
    );
};

export default CarouselSettings;
