import {React, useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import SponsorshipCardComponent from "./Sponsorship-card-component";
import './sponsorship-component-styles.css'
import {MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBTypography} from 'mdb-react-ui-kit';


const SponsorshipComponent = (props) => {
    const [sponsordataState, setSponsorData] = useState('');

    const fetchPost = async () => {
        await getDocs(collection(db, "Companies"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setSponsorData(newData)
                console.log(newData)
            })
    }

    useEffect(() => {
        fetchPost()
    }, [])


    return (<div className={'sponsorship-component'}>

            {sponsordataState.length > 0 && <MDBCard style={{backgroundColor: "#dfe5fd"}}>
                <MDBCardHeader className="card-title-text">Our Partners</MDBCardHeader>
                <MDBCardBody>
                    <MDBTypography blockquote className='mb-0 ov-desc'>
                        <p>We have partnered with Industry leading companies from all around Sri Lanka & with their
                            generous support we are able to make our events a success! <br/><br/></p>
                    </MDBTypography>
                    <h2 className={'font'}>Platinum Partners</h2>
                    <MDBRow style={{marginTop: "0px"}} className='row-cols-1 row-cols-md-4 g-4'>

                        {sponsordataState && sponsordataState.sort((a, b) => a.oid > b.oid ? 1 : -1).map(sponsor => (
                            <SponsorshipCardComponent key={sponsor.id} sponsor={sponsor}/>
                        )).sort()}
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>}
        </div>
    )
}


export default SponsorshipComponent;