import React from 'react';
import Navbar from "../../UI/NavBar/Navbar-component";
import FooterComponent from "../../UI/Footer/footer-component";
import CarouselSettings from "../Carousel-settings-component/Carousel-settings-component";

const CarouselSettingsPage = () => {
    return (
        <>
            <Navbar/>
            <CarouselSettings/>
            <FooterComponent/>
        </>
    );
};

export default CarouselSettingsPage;

