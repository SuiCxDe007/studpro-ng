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

import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import {MDBRow} from "mdb-react-ui-kit";
import UISkeleton from "../../Utils/Skeleton";
import CarouselCardWrapper from "./Carousel-card-wrapper";

const CarouselCard = () => {

    const [carouselImageData, setCarouselImageData] = useState(null);

    const fetchPost = async () => {
        await getDocs(collection(db, "CarouselData"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setCarouselImageData(newData)
            })
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div style={{marginTop: "20px"}}>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {carouselImageData ? carouselImageData.map(carouselImage => {
                    return (
                        <CarouselCardWrapper data={carouselImage}/>
                    )
                }) : (
                    <UISkeleton/>
                )}
            </MDBRow>
        </div>
    );
};

export default CarouselCard;
