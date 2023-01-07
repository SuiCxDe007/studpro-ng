import './App.css';
import LandingPage from "./pages/Landing-page";
import SponsorSettingsPage from "./components/Admin/Pages/SponsorSettings-page";
import SessionsPage from "./pages/Sessions-page";
import SessionSettingsPage from "./components/Admin/Pages/SessionSettings-page";
import SignIn from "./components/Admin/Auth/SignIn-component";
import {Route, Routes} from 'react-router-dom';
import ErrorPage from "./pages/Error-page";
import DashboardPage from "./components/Admin/Pages/Dashbpard-page";
import AuthContext from "./components/store/auth-context";
import {useContext} from "react";
import {useSelector} from "react-redux";
import CarouselSettingsPage from "./components/Admin/Pages/CarouselSettings-page";
import GalleryPage from "./pages/Gallery-Page";
import GallerySettingsPage from "./components/Admin/Pages/GallerySettings-page";

function App() {
    //TODO Move to REDUX
    const AuthCtx = useContext(AuthContext);
    const isAuth = useSelector(state => state.isAuthenticated)
    return (


        <div className="App">

            <Routes>


                <Route path="/" element={<LandingPage/>}/>

                <Route path="/sessions" element={<SessionsPage/>}/>
                <Route path="/gallery" element={<GalleryPage/>}/>

                <Route path={"/dashboard"} element={isAuth ? <DashboardPage/> : <SignIn/>}/>
                <Route path={"/session-settings"} element={isAuth ? <SessionSettingsPage/> : <SignIn/>}/>
                <Route path={"/sponsor-settings"} element={isAuth ? <SponsorSettingsPage/> : <SignIn/>}/>
                <Route path={"/carousel-settings"} element={isAuth ? <CarouselSettingsPage/> : <SignIn/>}/>
                <Route path={"/gallery-settings"} element={isAuth ? <GallerySettingsPage/> : <SignIn/>}/>

                <Route path="/login" element={<SignIn/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>

            </Routes>

        </div>

    );
}

export default App;
