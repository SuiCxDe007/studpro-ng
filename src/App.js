import './App.css';
import LandingPage from "./pages/Landing-page";
import SponsorSettingsPage from "./components/Admin/Pages/SponsorSettings-page";
import Navbar from "./components/UI/NavBar/Navbar-component";
import FooterComponent from "./components/UI/Footer/footer-component";
import SessionsPage from "./components/Sessions/Sessions-page";
import SessionSettingsPage from "./components/Admin/Pages/SessionSettings-page";
import SignIn from "./components/Admin/Auth/SignIn-component";

function App() {
  return (
    <div className="App">

      <SignIn/>
        {/*<Navbar/>*/}
        {/*<SessionsPage/>*/}
      {/*<SessionSettingsPage/>*/}
      {/*  <SessionsPage/>*/}
      {/*  <FooterComponent/>*/}
    {/*<LandingPage/>*/}
    {/*<SponsorSettingsPage/>*/}
    </div>
  );
}

export default App;
