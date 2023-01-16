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

import './App.css';
import LandingPage from "./pages/Landing-page";
import SponsorSettingsPage from "./components/Admin/Pages/SponsorSettings-page";
import SessionsPage from "./pages/Sessions-page";
import SessionSettingsPage from "./components/Admin/Pages/SessionSettings-page";
import SignIn from "./components/Admin/Auth/SignIn-component";
import {Route, Routes} from 'react-router-dom';
import ErrorPage from "./pages/Error-page";
import DashboardPage from "./components/Admin/Pages/Dashbpard-page";
import {useSelector} from "react-redux";
import CarouselSettingsPage from "./components/Admin/Pages/CarouselSettings-page";
import GalleryPage from "./pages/Gallery-Page";
import GallerySettingsPage from "./components/Admin/Pages/GallerySettings-page";
import ScrollToTop from "react-scroll-to-top";
import TimelinePage from "./pages/Timeline-Page";

/**
 *
 * @returns main App Component
 *
 */

//TODO Move Routes to seperate comp.

function App() {

    const isAuth = useSelector(state => state.isAuthenticated)
    return (

        <div className="App">
            <ScrollToTop smooth color="#FFA500"/>
            <Routes>
                <Route path="/login" element={<SignIn/>}/>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/sessions" element={<SessionsPage/>}/>
                <Route path="/gallery" element={<GalleryPage/>}/>
                <Route path="/timeline" element={<TimelinePage/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>

                <Route path={"/dashboard"} element={isAuth ? <DashboardPage/> : <SignIn/>}/>
                <Route path={"/session-settings"} element={isAuth ? <SessionSettingsPage/> : <SignIn/>}/>
                <Route path={"/sponsor-settings"} element={isAuth ? <SponsorSettingsPage/> : <SignIn/>}/>
                <Route path={"/carousel-settings"} element={isAuth ? <CarouselSettingsPage/> : <SignIn/>}/>
                <Route path={"/gallery-settings"} element={isAuth ? <GallerySettingsPage/> : <SignIn/>}/>
            </Routes>
        </div>
    );
}

export default App;
