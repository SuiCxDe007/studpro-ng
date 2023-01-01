import React from 'react';
import SessionSettingsComponent from "../Sessoion-settings-component/Session-settings-component";
import Navbar from "../../UI/NavBar/Navbar-component";
import FooterComponent from "../../UI/Footer/footer-component";

const SessionSettingsPage = () => {
    return (
        <>
            <Navbar/>
        <SessionSettingsComponent/>
        <FooterComponent/>
        </>
    );
};

export default SessionSettingsPage;
