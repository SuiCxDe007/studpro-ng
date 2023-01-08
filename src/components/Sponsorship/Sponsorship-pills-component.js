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
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-extreme.css';
import 'tippy.js/themes/light.css';


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
            callback(<i className="fas fa-star" style={{color:"#8c14fc"}}></i>)
        }
        if (props.partnerships[studpro].includes("Gold")) {
            callback(<i className="fas fa-star" style={{color:"#FFDF00"}}></i>)

        }
        if (props.partnerships[studpro].includes("Silver")) {
            callback(<i className="fas fa-star" style={{color:"#C0C0C0"}}></i>)

        }
        if (props.partnerships[studpro].includes("Bronze")) {
            callback( <i className="fas fa-star" style={{color:"#CD7F32"}}></i>)

        }
        if (props.partnerships[studpro].includes("Participant")) {
            callback( <i className="far fa-star" style={{color:"#ADD8E6"}}></i>)

        }
    }

    return (
        <>
            {  //TODO : Add new MDBBadge Per new additional year

                props.partnerships && <div>
                    {props.partnerships.spfive.length > 0 &&  <Tippy theme={"light"} animation={"scale-extreme"} placement={"bottom"} content={`StudPro 5.0 ${props.partnerships.spfive}`}>{spFiveColor}</Tippy>}
                    {props.partnerships.spfour.length > 0 &&  <Tippy theme={"light"}  animation={"scale-extreme"} placement={"bottom"} content={`StudPro 4.0 ${props.partnerships.spfour}`}>{spFourColor}</Tippy>}
                    {props.partnerships.spthree.length > 0 && <Tippy theme={"light"}  animation={"scale-extreme"} placement={"bottom"} content={`StudPro 3.0 ${props.partnerships.spthree}`}>{spThreeColor}</Tippy>}
                    {props.partnerships.sptwo.length > 0 &&   <Tippy theme={"light"}  animation={"scale-extreme"} placement={"bottom"} content={`StudPro 2.0 ${props.partnerships.sptwo}`}>{spTwoColor}</Tippy>}
                    {props.partnerships.spone.length > 0 &&   <Tippy theme={"light"} animation={"scale-extreme"} placement={"bottom"} content={`StudPro 1.0 ${props.partnerships.spone}`}>{spOneColor}</Tippy>}
                </div>}
        </>

    )

}

export default SponsorshipPills;