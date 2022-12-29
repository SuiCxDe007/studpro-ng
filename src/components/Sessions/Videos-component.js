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
            indents.push(                <MDBCol key={Math.random()} size='4'>
                <b>{x}</b>
                <YouTube
                    opts={opts}
                    videoId={props.video[x]}                  // defaults -> ''
                    id={props.video[x]}                       // defaults -> ''
                    // defaults -> noop
                />
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
