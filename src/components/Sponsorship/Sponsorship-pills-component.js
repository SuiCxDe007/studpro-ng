import {React, useEffect, useState} from "react";
import {MDBBadge} from 'mdb-react-ui-kit';


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
            callback("success")
        }
        if (props.partnerships[studpro].includes("Gold")) {
            callback("warning")
        }
        if (props.partnerships[studpro].includes("Silver")) {
            callback("secondary")
        }
        if (props.partnerships[studpro].includes("Bronze")) {
            callback("primary")
        }
        if (props.partnerships[studpro].includes("Participant")) {
            callback("info")
        }
    }

    return (
        <>
            {  //TODO : Add new MDBBadge Per new additional year

                props.partnerships && <div>
                    {props.partnerships.spfive.length > 0 && <MDBBadge pill className='mx-2' color={spFiveColor}>
                        StudPro 5.0 {props.partnerships.spfive}
                    </MDBBadge>}
                    {props.partnerships.spfour.length > 0 && <MDBBadge pill className='mx-2' color={spFourColor}>
                        StudPro 4.0 {props.partnerships.spfour}
                    </MDBBadge>}
                    {props.partnerships.spthree.length > 0 && <MDBBadge pill className='mx-2' color={spThreeColor}>
                        StudPro 3.0 {props.partnerships.spthree}
                    </MDBBadge>}
                    {props.partnerships.sptwo.length > 0 && <MDBBadge pill className='mx-2' color={spTwoColor}>
                        StudPro 2.0 {props.partnerships.sptwo}
                    </MDBBadge>}
                    {props.partnerships.spone.length > 0 && <MDBBadge pill className='mx-2' color={spOneColor}>
                        StudPro 1.0 {props.partnerships.spone}
                    </MDBBadge>}
                </div>}
        </>

    )
}

export default SponsorshipPills;