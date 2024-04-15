import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../img/logo.svg';

export default function Nav() {
  return (
    <>
      <div className="nav">
        <img id="logo-nav" src={logo} alt="logo" />

        <div className="links-menu">
          <ul>
            <li><Link to={`/accueil`}>accueil</Link></li>
            <li><Link to={`/artistes`}>artistes</Link></li>
            <li><Link to={`/lieux`}>lieux</Link></li>
            <li><Link to={`/concerts`}>concerts</Link></li>
            <li><Link to={`/todolist`}>to do list</Link></li>
          </ul>
        </div>

        <div className="log-menu">
          <button id="login">connexion</button>
          <button id="register">inscription</button>
        </div>
      </div>
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
}