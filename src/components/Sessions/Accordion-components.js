import React, {useEffect, useState} from 'react';
import {MDBAccordion, MDBAccordionItem, MDBBtn} from "mdb-react-ui-kit";
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import VideosComponent from "./Videos-component";
import {toast, ToastContainer} from "react-toastify";

const AccordionComponent = (props) => {

    const [videoData, setVideoData] = useState(null);
    const [sessionsAvailable, setSessionsAvailable] = useState(true);

    const fetchSessionVideos = async () => {
        await getDocs(collection(db, `Videos/sessions/${props.studPro}`))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setVideoData(newData);
            })
    }


    useEffect(() => {
        fetchSessionVideos()
    }, []);

    const handleDelete = async (id) => {

        await deleteDoc(doc(db, `Videos/sessions/${props.studPro}`, id)).then(() => {
            toast.success('Sessions Deleted!')
            toast.success('Reload the page!')
        }).catch((error) => {
            toast.error(`Error Deleting Sessions.`)
            toast.error('Reload the page!')
            console.error('Error deleting document: ', error);
        });
    }

    useEffect(() => {
        if (videoData && videoData.length === 0) {
            setSessionsAvailable(false)
        } else {
            setSessionsAvailable(true)
        }
    }, [videoData]);


    return (

        <div>
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
            {!sessionsAvailable && <center>No Sessions Available</center>}
            {videoData !== null && <MDBAccordion style={{marginTop: "20px"}} borderless initialActive={1}>

                {videoData.map(xxx => {

                    return (
                        <MDBAccordionItem key={Math.random()} collapseId={Math.random()}
                                          headerTitle={xxx.session_series_name}>
                            <center>{xxx.session_description}</center>
                            <br/>
                            {props.admin &&
                                <div><MDBBtn color={"danger"} onClick={() => handleDelete(xxx.id)}>Delete Session
                                    Series</MDBBtn><br/><br/></div>}
                            <VideosComponent video={xxx.sessions}/>
                        </MDBAccordionItem>)
                })}
            </MDBAccordion>
            }
        </div>
    );
};

export default AccordionComponent;
