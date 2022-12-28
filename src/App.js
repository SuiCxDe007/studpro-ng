import './App.css';
import LandingPage from "./pages/Landing-page";
import SponsorSettingsPage from "./components/Admin/Pages/SponsorSettings-page";
import Navbar from "./components/UI/NavBar/Navbar-component";
import FooterComponent from "./components/UI/Footer/footer-component";
import SessionsPage from "./components/Sessions/Sessions-page";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <SessionsPage/>
      <FooterComponent/>
    {/*<LandingPage/>*/}
    {/*<SponsorSettingsPage/>*/}
    </div>
  );
}

export default App;
