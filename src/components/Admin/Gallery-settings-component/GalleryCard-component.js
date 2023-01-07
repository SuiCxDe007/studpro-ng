import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import {MDBRow} from "mdb-react-ui-kit";
import UISkeleton from "../../Utils/Skeleton";
import GalleryCardWrapperComponent from "./Gallery-card-wrapper-component";

const GalleryCard = () => {

    const [sponsordataState, setSponsorData] = useState(null);

    const fetchPost = async () => {
        await getDocs(collection(db, "PhotoGallery/StudProIteration/studpro5"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setSponsorData(newData)
            })
    }

    useEffect(() => {
        fetchPost()
    }, [])


    return (
        <div style={{marginTop: "20px"}}>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {sponsordataState ? sponsordataState.map(x => {
                    return <GalleryCardWrapperComponent data={x}/>
                }) : (
                    <UISkeleton/>
                )}

            </MDBRow>
        </div>
    );
};

export default GalleryCard;
