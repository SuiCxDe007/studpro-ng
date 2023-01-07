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
