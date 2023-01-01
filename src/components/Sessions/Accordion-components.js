import React, {useEffect, useState} from 'react';
import {MDBAccordion, MDBAccordionItem} from "mdb-react-ui-kit";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import VideosComponent from "./Videos-component";

const AccordionComponent = (props) => {

    const [videoData, setVideoData] = useState(null);
    const [sessionsAvailable, setsessionsAvailable] = useState(true);

    const fetchSessionVideos = async () => {
        await getDocs(collection(db, `Videos/sessions/${props.studPro}`))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setVideoData(newData)
            })
    }


    useEffect(() => {
        return () => {
            fetchSessionVideos()
        };
    }, []);

    const opts = {
        height: '190',
        width: '340',
    };

    useEffect(() => {
        if (videoData && videoData.length === 0) {
            setsessionsAvailable(false)
        } else {
            setsessionsAvailable(true)
        }
    }, [videoData]);


    return (

        <div>&nbsp;
            {!sessionsAvailable && <center>No Sessions Available</center>}
            {videoData !== null && <MDBAccordion style={{marginTop: "20px"}} borderless initialActive={1}>

                {videoData.map(xxx => {

                    return (
                        <MDBAccordionItem  key={Math.random()} collapseId={Math.random()}
                                          headerTitle={xxx.session_series_name}>
                            <center>{xxx.session_description}</center>
                            <br/>
                            <VideosComponent video={xxx.sessions}/>
                        </MDBAccordionItem>)
                })}
            </MDBAccordion>
            }
        </div>
    );
};

export default AccordionComponent;
