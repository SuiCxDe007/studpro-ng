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
import {collection, getDocs,onSnapshot ,doc} from "firebase/firestore";
import {db} from "../../firebase";
import SponsorshipCardComponent from "./Sponsorship-card-component";
import './sponsorship-component-styles.css'
import {MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBTypography} from 'mdb-react-ui-kit';
import UISkeleton from "../Utils/Skeleton";


const SponsorshipComponent = (props) => {
    const [sponsordataState, setSponsorData] = useState('');

    const fetchPost = async () => {
       await onSnapshot(collection(db, "Companies"), (snapshot) => {
            setSponsorData(snapshot.docs.map((doc)=>({...doc.data(), id: doc.id})))
        })
    }

    useEffect(() => {
        fetchPost()
    }, [])


    return (<div className={'sponsorship-component'}>

       <MDBCard style={{backgroundColor: "#dfe5fd"}}>
                <MDBCardHeader className="card-title-text">Our Partners</MDBCardHeader>
                <MDBCardBody>
                    <MDBTypography blockquote className='mb-0 ov-desc'>
                        <p>We have partnered with Industry leading companies from all around Sri Lanka & with their
                            generous support we are able to make our events a success! <br/><br/></p>
                    </MDBTypography>
                    {sponsordataState.length > 0 ?   <MDBRow style={{marginTop: "0px"}} className='row-cols-1 row-cols-md-4 g-4'>
                        {sponsordataState && sponsordataState.sort((a, b) => a.oid > b.oid ? 1 : -1).map(sponsor => (
                            <SponsorshipCardComponent admin={props.admin} key={sponsor.id} sponsor={sponsor}/>
                        )).sort()}
                    </MDBRow> :
                        <UISkeleton/>}
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}


export default SponsorshipComponent;