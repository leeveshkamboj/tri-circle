import React from "react";

import "./navbar.css";
import logo from "./imgs/LOGO.png";
import fireIcon from "./imgs/fire icon.svg";
import profile from "./imgs/profile avatar.jpg";
import menu from "./imgs/menu.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-section menu">
        <img src={menu} alt="menu" />
      </div>
      <div className="nav-section hide">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul className="navlinks">
          <li>Nav text</li>
          <li>Nav text one</li>
          <li>Nav text two</li>
          <li>
            <Link to="contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="nav-section">
        <ul className="navlinks">
          <li>
            <img className="fire-icon" src={fireIcon} alt="fire" />
          </li>
          <li>
            <img className="profile-icon" src={profile} alt="profile" />
          </li>
        </ul>
      </div>
    </div>
  );
};
