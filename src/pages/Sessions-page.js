import React from 'react';
import SessionsComponent from "../components/Sessions/Sessions-component";
import Navbar from "../components/UI/NavBar/Navbar-component";
import FooterComponent from "../components/UI/Footer/footer-component";

const SessionsPage = () => {
    return (
        <>
            <Navbar/>
            <SessionsComponent admin={false}/>
    <FooterComponent/>
        </>
    );
};

export default SessionsPage;
