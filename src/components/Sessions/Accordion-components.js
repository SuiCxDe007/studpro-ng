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

import React, {useEffect, useState} from 'react';
import {MDBAccordion, MDBAccordionItem, MDBBtn} from "mdb-react-ui-kit";
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import VideosComponent from "./Videos-component";
import {toast, ToastContainer} from "react-toastify";
import {AccordionSkeleton} from "../Utils/Skeleton";

/**
 *
 * @returns wrapper component for accordion with youtube videos
 *
 */

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
            {!sessionsAvailable && <center style={{fontFamily:"sans-serif"}}>No Sessions Available</center>}
            {videoData !== null ? <MDBAccordion style={{marginTop: "20px"}} borderless initialActive={1}>

                {videoData.map(session => {

                    return (
                        <MDBAccordionItem style={{fontFamily:"sans-serif"}} key={Math.random()} collapseId={Math.random()}
                                          headerTitle={session.session_series_name}>
                            <center className={"font"}>{session.session_description}</center>
                            <br/>
                            {props.admin &&
                                <div><MDBBtn color={"danger"} onClick={() => handleDelete(session.id)}>Delete Session
                                    Series</MDBBtn><br/><br/></div>}
                            <VideosComponent video={session.sessions}/>
                        </MDBAccordionItem>)
                })}
            </MDBAccordion>
            :<AccordionSkeleton/>}
        </div>
    );
};

export default AccordionComponent;
