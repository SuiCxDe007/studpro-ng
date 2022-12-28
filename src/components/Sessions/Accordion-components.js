import React, {useEffect, useState} from 'react';
import {MDBAccordion, MDBAccordionItem, MDBRow} from "mdb-react-ui-kit";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import VideosComponent from "./Videos-component";

const AccordionComponent = () => {

    const [videoData, setVideoData] = useState(null);

    const fetchSessionVideos = async () => {
        await getDocs(collection(db, "Videos"))
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

    let entries = []

    return (

        <div>

            {videoData !== null && <MDBAccordion borderless initialActive={1}>

                {videoData.map(xxx => {
                    {
                        entries = Object.keys(xxx.sessions).map((key) => [
                            key,
                            xxx.sessions[key],
                        ]);

                    }

                    return (
                        <MDBAccordionItem collapseId={Math.random()} headerTitle={xxx.session_series_name}>

                                <VideosComponent video={xxx.sessions}/>


                                {/*<YouTube*/}
                                {/*    opts={opts}*/}
                                {/*    videoId={'B_IYFFbKkfY'}                  // defaults -> ''*/}
                                {/*    id={'B_IYFFbKkfY'}                       // defaults -> ''*/}
                                {/*    // defaults -> noop*/}
                                {/*/>*/} </MDBAccordionItem>)
                })}
            </MDBAccordion>


                //      <MDBAccordion initialActive={1}>
                //     <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="youtube" /> &nbsp; Accordion Item #1</>}>
                //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                //         moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                //         Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                //         shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                //         proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                //         aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                //     </MDBAccordionItem>
                //     <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Accordion Item #2</>}>
                //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                //         moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                //         Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                //         shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                //         proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                //         aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                //     </MDBAccordionItem>
                //     <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Accordion Item #3</>}>
                //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                //         moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                //         Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                //         shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                //         proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                //         aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                //     </MDBAccordionItem>
                // </MDBAccordion>}
            }</div>
    );
};

export default AccordionComponent;
