import './App.css';
import LandingPage from "./pages/Landing-page";
import SponsorSettingsPage from "./components/Admin/Pages/SponsorSettings-page";
import Navbar from "./components/UI/NavBar/Navbar-component";
import FooterComponent from "./components/UI/Footer/footer-component";
import SessionsPage from "./components/Sessions/Sessions-page";
import SessionSettingsPage from "./components/Admin/Pages/SessionSettings-page";
import SignIn from "./components/Admin/Auth/SignIn-component";
import {BrowserRouter, NavLink, Routes, Route, useNavigate} from 'react-router-dom';
import ErrorPage from "./pages/Error-page";
import {Login} from "@mui/icons-material";
import DashboardPage from "./components/Admin/Pages/Dashbpard-page";
import {ProtectedRoute} from "./components/Utils/ProtectedRoute";
import AuthContext from "./components/store/auth-context";
import {useContext} from "react";
import {useSelector} from "react-redux";
import CarouselSettingsPage from "./components/Admin/Pages/CarouselSettings-page";
function App() {
    //TODO Move to REDUX
    const AuthCtx = useContext(AuthContext);
    const isAuth = useSelector(state => state.isAuthenticated)
    return (


      <div className="App">

          <Routes>


              <Route path="/" element={<LandingPage />} />

              <Route path="/sessions" element={<SessionsPage />} />

              <Route path={"/dashboard"} element={isAuth ? <DashboardPage/> : <SignIn/>}/>
              <Route path={"/session-settings"} element={isAuth ? <SessionSettingsPage/> : <SignIn/>}/>
              <Route path={"/sponsor-settings"} element={isAuth ? <SponsorSettingsPage/> : <SignIn/>}/>
              <Route path={"/carousel-settings"} element={isAuth ? <CarouselSettingsPage/> : <SignIn/>}/>

              <Route path="/login" element={<SignIn/>} />
              <Route path={"*"} element={<ErrorPage/>}/>

          </Routes>

    </div>

  );
}

export default App;
