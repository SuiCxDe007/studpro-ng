import React from 'react';
import SessionsComponent from "./Sessions-component";
import Navbar from "../UI/NavBar/Navbar-component";
import FooterComponent from "../UI/Footer/footer-component";

const SessionsPage = () => {
    return (
        <>
            <Navbar/>
            <SessionsComponent/>
    <FooterComponent/>
        </>
    );
};

export default SessionsPage;
