import React, {useState} from 'react';
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {useFormik} from "formik";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../firebase";
import {toast, ToastContainer} from "react-toastify";
import {MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBFile, MDBInput, MDBRow, MDBSpinner} from "mdb-react-ui-kit";
import GalleryCard from "./GalleryCard-component";

const GallerySettingsComponent = () => {

    const [imageURL, setImageURL] = useState('');
    const [imgHeight, setImgHeight] = useState(1);
    const [imgWidth, setImgWidth] = useState(1);
    const storage = getStorage();

    const formik = useFormik({

        initialValues: {
            galleryImageURL: '',

        }, onSubmit: async values => {
            await addDoc(collection(db, "PhotoGallery/StudProIteration/studpro5"), {

                src: imageURL,
                width: imgWidth,
                height: imgHeight

            }).then(() => {
                toast.success('Carousel Image Updated!')
                toast.info('Reload the page!')
            }).catch(e => {
                toast.error(`Carousel Image update failure.`)
                toast.error('Reload the page!')
            });
            values.galleryImageURL = ''
            setImageURL('')
        },
    });
    const storageRef = ref(storage, `/Gallery/${Math.random()}`);
    const onChangeHandler = (e) => {

        if (e.target.id.includes("galleryImageURL") && e.target.files[0]) {

            let img = new Image()
            img.src = window.URL.createObjectURL(e.target.files[0])
            img.onload = () => {
                setImgHeight(img.height);
                setImgWidth(img.width);
            }
            uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(url => {
                    setImageURL(url)
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
                <span style={{marginTop: "10px"}} className="card-title-text">Add Gallery Image</span>
                <p className={"font"} style={{fontSize: "20px"}}>Add a New Image to Gallery. <b
                    style={{color: "red"}}> Make sure the image is Compressed & Converted to webp to save storage</b></p>
                <MDBCardBody>
                    <form onChange={onChangeHandler} onSubmit={formik.handleSubmit} className={"form-font"}>

                        <MDBRow className='mb-4'>
                            <MDBCol size={2} className={'d-flex align-content-start'}>
                                Upload Image
                            </MDBCol>
                            <MDBCol>
                                <MDBFile size={4}
                                         required
                                         className={'d-flex align-content-start'}
                                         id='galleryImageURL'
                                         onChange={formik.handleChange}
                                         value={formik.values.galleryImageURL}
                                />
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBBtn disabled={imageURL.length === 0} className='mb-4' type='submit' block>
                            {imageURL.length === 0 ? <MDBSpinner grow color='light'>
                                <span className='visually-hidden'>Loading...</span>
                            </MDBSpinner> : <span>Add Image</span>}
                        </MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
            <GalleryCard/>
        </div>
    );

};

export default GallerySettingsComponent;
