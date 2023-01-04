import {React} from "react";

import FooterComponent from "../../UI/Footer/footer-component";
import SponsorSettingsComponent from "../Sposor-settings-component/Sponsor-settings-component";
import Navbar from "../../UI/NavBar/Navbar-component";
import SponsorshipComponent from "../../Sponsorship/Sponsorship-component";

const SponsorSettingsPage = () => {
    return (<>
        <Navbar/>
        <SponsorSettingsComponent/>
        <SponsorshipComponent admin={true}/>
        <FooterComponent/>
    </>)
}

export default SponsorSettingsPage;