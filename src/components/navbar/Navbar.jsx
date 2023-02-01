import React from "react";
// import "./topbar.css";
// import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <div className="logo">
          <img src="" alt="MOVOTE_logo" />
        </div>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT US</li>
          <li className="topListItem">CONTACT US</li>
          <li className="topListItem">LOGIN</li>
          <li className="topListItem">REGISTER</li>
        </ul>
      </div>
    </div>
  );
}
