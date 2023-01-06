import React from "react";
import Navbar from "../components/UI/NavBar/Navbar-component";
import Header from "../components/UI/Header/header-component";
import WhatIs from "../components/UI/WhatIs/WhatIs-component";
import SponsorshipComponent from "../components/Sponsorship/Sponsorship-component";
import FooterComponent from "../components/UI/Footer/footer-component";
import SliderComponent from "../components/Admin/Dashboard/Slider-component";

export default function LandingPage() {
    return (<>
        <Navbar/>
        <SliderComponent/>
        <WhatIs/>
        {/*<SponsorshipComponent admin={false}/>*/}
        <FooterComponent/>
    </>)
}