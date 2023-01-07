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
