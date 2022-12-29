import React, {useEffect, useState} from 'react';
import {MDBAccordion, MDBAccordionItem} from "mdb-react-ui-kit";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import VideosComponent from "./Videos-component";

const AccordionComponent = (props) => {

    const [videoData, setVideoData] = useState(null);

    const fetchSessionVideos = async () => {
        await getDocs(collection(db, `Videos/sessions/${props.studPro}`))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setVideoData(newData)
                //  console.log(newData)
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



    return (

        <div>

            {videoData !== null && <MDBAccordion style={{marginTop: "20px"}} borderless initialActive={1}>

                {videoData.map(xxx => {

                    return (
                        <MDBAccordionItem key={Math.random()} collapseId={Math.random()} headerTitle={xxx.session_series_name}>

                            <VideosComponent video={xxx.sessions}/>
                        </MDBAccordionItem>)
                })}
            </MDBAccordion>
            }</div>
    );
};

export default AccordionComponent;
