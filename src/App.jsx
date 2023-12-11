
import React from "react";
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import logo from './img/logo.svg';
import ArtistPage from "./pages/ArtistPage";
import LocationPage from "./pages/LocationPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div className="nav">
        <img id="logo-nav" src={logo} alt="logo" />

        <div className="links-menu">
          <ul>
            <li><Link to="/">accueil</Link></li>
            <li><Link to="/artistes">artistes</Link></li>
            <li><Link to="/organisateurs">organisateurs</Link></li>
            <li><Link to="/concerts">concerts</Link></li>
          </ul>
        </div>

        <div className="log-menu">
          <button id="login">connexion</button>
          <button id="register">inscription</button>
        </div>
      </div>

      <div className='wrapper'>
        <Routes>
          <Route path="/artistes" element={<ArtistPage />} />
          <Route path="/organisateurs" element={<LocationPage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
        </Routes>
      </div>

      <Footer />  

    </div>
  );
}
