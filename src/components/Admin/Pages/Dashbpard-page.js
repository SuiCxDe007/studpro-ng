import React from 'react';
import DashboardContent from "../Dashboard/Dashboard-content-component";
import Navbar from "../../UI/NavBar/Navbar-component";
import Header from "../../UI/Header/header-component";
import FooterComponent from "../../UI/Footer/footer-component";

const DashboardPage = () => {
    return (
        <>
        <Navbar/>
        <DashboardContent/>
    <FooterComponent/></>
    );
};

export default DashboardPage;
