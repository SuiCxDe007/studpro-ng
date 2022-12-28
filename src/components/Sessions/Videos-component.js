import React from 'react';
import YouTube from "react-youtube";
import {MDBCol, MDBRow} from "mdb-react-ui-kit";

const VideosComponent = (props) => {

    console.log(props.video)

    var indents = [];

    const opts = {
        height: '190',
        width: '340',

    };
    for (const x in props.video){
        console.log(x+props.video[x])
        indents.push(                <MDBCol size='4'>
            <YouTube
            opts={opts}
            videoId={props.video[x]}                  // defaults -> ''
            id={props.video[x]}                       // defaults -> ''
            // defaults -> noop
        />
        </MDBCol>)
    }
    return (
       <MDBRow>
        {indents}
       </MDBRow>

    );
};

export default VideosComponent;
