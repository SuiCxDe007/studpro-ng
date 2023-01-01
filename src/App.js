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
function App() {
    //TODO Move to REDUX
    const AuthCtx = useContext(AuthContext);

    return (
      <div className="App">
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<SignIn/>} />
              <Route path="/sessions" element={<SessionsPage />} />
              <Route path={"*"} element={<ErrorPage/>}/>
              <Route path={"/dashboard"} element={AuthCtx.isLoggedIn ? <DashboardPage/> : <SignIn/>}/>
              <Route path={"/session-settings"} element={AuthCtx.isLoggedIn ? <SessionSettingsPage/> : <SignIn/>}/>
              <Route path={"/sponsor-settings"} element={AuthCtx.isLoggedIn ? <SponsorSettingsPage/> : <SignIn/>}/>

          </Routes>
    </div>
  );
}

export default App;
