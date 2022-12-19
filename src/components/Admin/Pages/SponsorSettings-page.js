import {React} from "react";

import FooterComponent from "../../UI/Footer/footer-component";
import SponsorSettingsComponent from "../Sponsor-settings-component";
import Navbar from "../../UI/NavBar/Navbar-component";

const SponsorSettingsPage = () => {
    return (<>
        <Navbar/>
        <SponsorSettingsComponent/>
        <FooterComponent/>
    </>)
}

export default SponsorSettingsPage;