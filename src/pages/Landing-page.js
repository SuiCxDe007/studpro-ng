/*
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *  Created by Kaveen Abeyrathne for StudPro 5.0 as a place for students to look
 *  into What they can learn,companies to understand what to expect. This website
 *  was developed as a first step to taking StudPro to a higher elevation. You are
 *  free to update,share & modify the work for IEEE purposes ONLY.
 *
 *  Content of the source code is not authorized to use for any commercial purpose.
 *
 *  SuiCxDe007 | https://github.com/SuiCxDe007 | kaveenmadawa@gmail.com
 *
 *  ~ Copyright © 2023 SuiCxDe
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

import React from "react";
import Navbar from "../components/UI/NavBar/Navbar-component";
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