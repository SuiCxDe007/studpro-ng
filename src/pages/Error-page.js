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

import React, {useEffect} from 'react';
import './ErrorPage-styles.css'

/**
 *
 * @returns error page (404)
 */

const ErrorPage = () => {

    useEffect(() => {
// Applying on mount
        document.body.style.overflow = "hidden";
// Applying on unmount
        return () => {
            document.body.style.overflow = "visible";
        }
    }, [])

    return (
        <div style={{overflowX: "hidden"}} className="space">
            <div className="texts font">
                <div>ERROR</div>
                <h1 className="h11">404</h1>
                <hr/>
                <div>How did you get lost in <br/>IEEE Volunteering Space?</div>
                <br/>

            </div>

            <div className="astronaut">
                <img
                    src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
                    alt="" className="src"/>
            </div>
        </div>
    );
};

export default ErrorPage;
