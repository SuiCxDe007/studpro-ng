import React from 'react';
import SessionSettingsComponent from "../Sessoion-settings-component/Session-settings-component";
import Navbar from "../../UI/NavBar/Navbar-component";
import FooterComponent from "../../UI/Footer/footer-component";
import SessionsComponent from "../../Sessions/Sessions-component";

const SessionSettingsPage = () => {
    return (
        <>
            <Navbar/>
        <SessionSettingsComponent/>
        <SessionsComponent admin={true} />
        <FooterComponent/>
        </>
    );
};

export default SessionSettingsPage;
