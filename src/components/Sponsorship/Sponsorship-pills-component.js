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

import {React, useEffect, useState} from "react";
import {Tooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './sponsorship-pills.styles.css'

/**
 *
 * @returns handles everything related to stars (sponsor years & sponsor type)
 */

const SponsorshipYearsWrapper = (props) => {

    //TODO : Add State per new additional year below

    const [spFiveStatus, setSpFiveStatus] = useState('');
    const [spFourStatus, setSpFourStatus] = useState('');
    const [spThreeStatus, setSpThreeStatus] = useState('');
    const [spTwoStatus, setSpTwoStatus] = useState('');
    const [spOneStatus, setSpOneStatus] = useState('');

    useEffect(() => {
        //TODO : Add function checker per new year
        if (props.partnerships) {

            checker("spfive", setSpFiveStatus);
            checker("sptwo", setSpTwoStatus);
            checker("spthree", setSpThreeStatus);
            checker("spfour", setSpFourStatus);
            checker("spone", setSpOneStatus);
        }

    }, []);


    function checker(studpro, callback) {
        if (props.partnerships[studpro].includes("Platinum")) {
            callback(<i className="fas fa-star" style={{color: "#8c14fc"}}></i>)
        }
        if (props.partnerships[studpro].includes("Gold")) {
            callback(<i className="fas fa-star" style={{color: "#FFDF00"}}></i>)

        }
        if (props.partnerships[studpro].includes("Silver")) {
            callback(<i className="fas fa-star" style={{color: "#C0C0C0"}}></i>)

        }
        if (props.partnerships[studpro].includes("Bronze")) {
            callback(<i className="fas fa-star" style={{color: "#CD7F32"}}></i>)

        }
        if (props.partnerships[studpro].includes("Participant")) {
            callback(<i className="far fa-star" style={{color: "#ADD8E6"}}></i>)

        }
    }

    return (
        <>
            {  //TODO : Add new MDBBadge Per new additional year

                props.partnerships && <div>

                    {props.partnerships.spfive.length > 0 && <span id={props.id}
                                                                   data-tooltip-content={`StudPro 5.0 ${props.partnerships.spfive}`}>{spFiveStatus}</span>}
                    {props.partnerships.spfour.length > 0 && <span id={props.id + "4"}
                                                                   data-tooltip-content={`StudPro 4.0 ${props.partnerships.spfour}`}>{spFourStatus}</span>}
                    {props.partnerships.spthree.length > 0 && <span id={props.id + "3"}
                                                                    data-tooltip-content={`StudPro 3.0 ${props.partnerships.spthree}`}>{spThreeStatus}</span>}
                    {props.partnerships.sptwo.length > 0 && <span id={props.id + "2"}
                                                                  data-tooltip-content={`StudPro 2.0 ${props.partnerships.sptwo}`}>{spTwoStatus}</span>}
                    {props.partnerships.spone.length > 0 && <span id={props.id + "1"}
                                                                  data-tooltip-content={`StudPro 1.0 ${props.partnerships.spone}`}>{spOneStatus}</span>}

                    <Tooltip className="studpro-5-diff-arrow" classNameArrow="arrow" style={{zIndex: 100}}
                             anchorId={props.id} place="bottom"/>
                    <Tooltip className="studpro-4-diff-arrow" classNameArrow="arrow" style={{zIndex: 100}}
                             anchorId={props.id + "4"} place="bottom"/>
                    <Tooltip className="studpro-3-diff-arrow" classNameArrow="arrow" style={{zIndex: 100}}
                             anchorId={props.id + "3"} place="bottom"/>
                    <Tooltip className="studpro-2-diff-arrow" classNameArrow="arrow" style={{zIndex: 100}}
                             anchorId={props.id + "2"} place="bottom"/>
                    <Tooltip className="studpro-1-diff-arrow" classNameArrow="arrow" style={{zIndex: 100}}
                             anchorId={props.id + "1"} place="bottom"/>
                </div>}
        </>

    )

}

export default SponsorshipYearsWrapper;