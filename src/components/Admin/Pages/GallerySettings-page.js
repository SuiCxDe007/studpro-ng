import React from 'react';
import GallerySettingsComponent from "../Gallery-settings-component/Gallery-settings-component";
import Navbar from "../../UI/NavBar/Navbar-component";
import FooterComponent from "../../UI/Footer/footer-component";

const GallerySettingsPage = () => {
    return (
        <>
            <Navbar/>
            <GallerySettingsComponent/>
            <FooterComponent/>
        </>
    );
};

export default GallerySettingsPage;
