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

const SponsorshipPills = (props) => {

    //TODO : Add State per new additional year below

    const [spFiveColor, setSpFiveColor] = useState('');
    const [spFourColor, setSpFourColor] = useState('');
    const [spThreeColor, setSpThreeColor] = useState('');
    const [spTwoColor, setSpTwoColor] = useState('');
    const [spOneColor, setSpOneColor] = useState('');

    useEffect(() => {
        //TODO : Add function checker per new year
        if (props.partnerships) {

            checker("spfive", setSpFiveColor);
            checker("sptwo", setSpTwoColor);
            checker("spthree", setSpThreeColor);
            checker("spfour", setSpFourColor);
            checker("spone", setSpOneColor);
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
                                                                   data-tooltip-content={`StudPro 5.0 ${props.partnerships.spfive}`}>{spFiveColor}</span>}
                    {props.partnerships.spfour.length > 0 && <span id={props.id + "4"}
                                                                   data-tooltip-content={`StudPro 4.0 ${props.partnerships.spfour}`}>{spFourColor}</span>}
                    {props.partnerships.spthree.length > 0 && <span id={props.id + "3"}
                                                                    data-tooltip-content={`StudPro 3.0 ${props.partnerships.spthree}`}>{spThreeColor}</span>}
                    {props.partnerships.sptwo.length > 0 && <span id={props.id + "2"}
                                                                  data-tooltip-content={`StudPro 2.0 ${props.partnerships.sptwo}`}>{spTwoColor}</span>}
                    {props.partnerships.spone.length > 0 && <span id={props.id + "1"}
                                                                  data-tooltip-content={`StudPro 1.0 ${props.partnerships.spone}`}>{spOneColor}</span>}

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

export default SponsorshipPills;