import React from 'react';
import YouTube from "react-youtube";
import {MDBCol, MDBRow} from "mdb-react-ui-kit";

const VideosComponent = (props) => {

    var indents = [];

    const opts = {
        height: '190',
        width: '340',

    };
    for (const x in props.video){

        if (x!=='null'){
            console.log(x+props.video[x])
            indents.push(                <MDBCol style={{overflowX:"auto"}} key={Math.random()} size='4'>
                <YouTube
                    opts={opts}
                    videoId={props.video[x]}                  // defaults -> ''
                    id={props.video[x]}                       // defaults -> ''
                    // defaults -> noop
                />
                <span style={{fontSize:"0.9rem"}}>{x}</span>
            </MDBCol>)
        }
    }
    return (
       <MDBRow>
        {indents}
       </MDBRow>

    );
};

export default VideosComponent;
