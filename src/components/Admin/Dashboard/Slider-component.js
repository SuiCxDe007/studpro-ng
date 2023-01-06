import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";
import {Skeleton} from "@mui/material";
import React from "react";

const SliderComponent = () => {

    const [URLData, setURLData] = useState(null);

    const fetchPost = async () => {
        await getDocs(collection(db, "CarouselData"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setURLData(newData)
            })
    }

    useEffect(() => {
        fetchPost()
    }, []);


    return (
        <div>
            {URLData ?  <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>          <div
                    className='p-5 text-center bg-image'
                    style={{
                        backgroundImage: `url(${require("../../../media/img/dashboard.webp")})`,
                        objectFit: "cover",
                        height: '400px',
                        backgroundPosition: "center"
                    }}
                >

                    <div className='mask' style={{backgroundColor: 'rgba(0  ,0,0,0.2)'}}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h5 className='font'>Welcome to</h5>
                                <h5><span className="animate-ieee" style={{fontSize: '50px'}}>IEEE&nbsp;</span> <span
                                    className="animate-stud" style={{fontSize: '50px'}}>Stud</span>
                                    <span
                                        className="animate-pro" style={{fontSize: '50px'}}>Pro</span></h5>
                                <center>                        <div style={{backgroundColor: "#085c84", borderRadius: "20px", width:"290px"}}><span
                                    style={{color: "white", fontSize: "20px"}} className="typing-demo">Step to your Career</span></div></center>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                {URLData.map(img => {
                    return <SwiperSlide>
                        <div
                            className='p-5 text-center bg-image'
                            style={{
                                backgroundImage: `url(${img.url})`,
                                objectFit: "cover",
                                height: '400px',
                                backgroundPosition: "center"
                            }}
                        >
                        </div>
                    </SwiperSlide>
                })}
            </Swiper> :   <div>
                <Skeleton height={133} animation="wave"/>
                <Skeleton height={133} animation="wave" />
                <Skeleton height={133.99} animation="wave" />
            </div>}
        </div>
    );
};

export default SliderComponent;
