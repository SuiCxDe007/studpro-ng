import React from 'react';
import Navbar from "../components/UI/NavBar/Navbar-component";
import FooterComponent from "../components/UI/Footer/footer-component";
import GalleryComponent from "../components/Gallery/Gallery-component";

const GalleryPage = () => {
    return (
        <>
            <Navbar/>
            <GalleryComponent/>
            <FooterComponent/>

        </>
    );
};

export default GalleryPage;
