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
function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="sessions" element={<SessionsPage/>} />
            <Route path="admin" element={<SignIn/>} />
            <Route path="dashboard" element={<DashboardPage/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
