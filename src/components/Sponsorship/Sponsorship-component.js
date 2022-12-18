import {React, useEffect, useReducer} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase";
import SponsorshipCardComponent from "./Sponsorship-card-component";
import './sponsorship-component-styles.css'
import {MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBTypography} from 'mdb-react-ui-kit';

const SponsorDataReducer = (state, action) => {
    if (action.type === 'SET_BRONZE') {
        return {...state, bronze: action.bronze}
    }
    if (action.type === 'SET_SILVER') {
        return {...state, silver: action.silver}
    }
    if (action.type === 'SET_GOLD') {
        return {...state, gold: action.gold}
    }
    if (action.type === 'SET_PLATINUM') {
        return {...state, platinum: action.platinum}
    }
    if (action.type === 'SET_PARTICIPANT') {
        return {...state, participant: action.participant}
    }
    if (action.type === 'GET_BRONZE') {
        return {bronze: state.bronze}
    }
    if (action.type === 'GET_GOLD') {
        return {gold: state.gold}
    }
    if (action.type === 'GET_PLATINUM') {
        return {platinum: state.platinum}
    }
    if (action.type === 'GET_SILVER') {
        return {silver: state.silver}
    }
    if (action.type === 'GET_PARTICIPANT') {
        return {participant: state.participant}
    }
    return {bronze: '', participant: '', gold: '', platinum: '', silver: ''}
}

const SponsorshipComponent = (props) => {
    const [sponsordataState, dispatchSponsorData] = useReducer(SponsorDataReducer, {bronze: ''});

    const fetchPost = async (sponsorType) => {
        await getDocs(collection(db, sponsorType))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                if (sponsorType === "Bronze") {
                    dispatchSponsorData({type: 'SET_BRONZE', bronze: newData})
                }
                if (sponsorType === "Gold") {
                    dispatchSponsorData({type: 'SET_GOLD', gold: newData})
                }
                if (sponsorType === "platinum") {
                    dispatchSponsorData({type: 'SET_PLATINUM', platinum: newData})
                }
                if (sponsorType === "Silver") {
                    dispatchSponsorData({type: 'SET_SILVER', silver: newData})
                }
                if (sponsorType === "Participant") {
                    dispatchSponsorData({type: 'SET_PARTICIPANT', participant: newData})
                }
            })

    }

    useEffect(() => {
        fetchPost("Bronze").then(
            dispatchSponsorData({type: "GET_BRONZE"}));
        fetchPost("Silver").then(
            dispatchSponsorData({type: "GET_SILVER"}));
        fetchPost("Gold").then(
            dispatchSponsorData({type: "GET_GOLD"}));
        fetchPost("platinum").then(
            dispatchSponsorData({type: "GET_PLATINUM"}));
        fetchPost("Participant").then(
            dispatchSponsorData({type: "GET_PARTICIPANT"}));
    }, [])

    useEffect(() => {
        console.log(sponsordataState.bronze)
        if (sponsordataState.platinum) {
            console.log("ddd")
            sponsordataState.platinum.map(d => console.log(d.partnership))
        }

    }, [sponsordataState])


    return (<div className={'sponsorship-component'}>

            <MDBCard style={{backgroundColor: "#dfe5fd"}}>
                <MDBCardHeader className="card-title-text">Our Partners</MDBCardHeader>
                <MDBCardBody>
                    <MDBTypography blockquote className='mb-0 ov-desc'>
                        <p>We have partnered with Industry leading companies from all around Sri Lanka & with their
                            generous support we are able to make our events a success! <br/><br/></p>
                    </MDBTypography>
                    <h2 className={'font'}>Platinum Partners</h2>
                    <MDBRow style={{marginTop: "0px"}} className='row-cols-1 row-cols-md-4 g-4'>

                        {sponsordataState.platinum && sponsordataState.platinum.sort((a, b) => a.oid > b.oid ? 1 : -1).map(sponsor => (
                            <SponsorshipCardComponent key={sponsor.id} sponsor={sponsor}/>
                        )).sort()}
                    </MDBRow>

                    <h2 className={'font'} style={{marginTop:"20px"}}>Gold Partners</h2>
                    <MDBRow  style={{marginTop: "0px" ,display:"flex" , justifyContent:"center"}} className='row-cols-1 row-cols-md-4 g-4 ' >

                        {sponsordataState.gold && sponsordataState.gold.sort((a, b) => a.oid > b.oid ? 1 : -1).map(sponsor => (
                            <SponsorshipCardComponent key={sponsor.id} sponsor={sponsor}/>
                        )).sort()}
                    </MDBRow>
                    <h2 className={'font'} style={{marginTop:"20px"}}>Silver Partners</h2>
                    <MDBRow  style={{marginTop: "0px" ,display:"flex" , justifyContent:"center"}} className='row-cols-1 row-cols-md-4 g-4 ' >

                        {sponsordataState.silver && sponsordataState.silver.sort((a, b) => a.oid > b.oid ? 1 : -1).map(sponsor => (
                            <SponsorshipCardComponent key={sponsor.id} sponsor={sponsor}/>
                        )).sort()}
                    </MDBRow>
                    <h2 className={'font'} style={{marginTop:"20px"}}>Bronze Partners</h2>
                    <MDBRow  style={{marginTop: "0px" ,display:"flex" , justifyContent:"center"}} className='row-cols-1 row-cols-md-4 g-4 ' >

                        {sponsordataState.bronze && sponsordataState.bronze.sort((a, b) => a.oid > b.oid ? 1 : -1).map(sponsor => (
                            <SponsorshipCardComponent key={sponsor.id} sponsor={sponsor}/>
                        )).sort()}
                    </MDBRow>
                    <h2 className={'font'} style={{marginTop:"20px"}}>Participating Companies</h2>
                    <MDBRow  style={{marginTop: "0px" ,display:"flex" , justifyContent:"center"}} className='row-cols-1 row-cols-md-4 g-4 ' >

                        {sponsordataState.participant && sponsordataState.participant.sort((a, b) => a.oid > b.oid ? 1 : -1).map(sponsor => (
                            <SponsorshipCardComponent key={sponsor.id} sponsor={sponsor}/>
                        )).sort()}
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}


export default SponsorshipComponent;