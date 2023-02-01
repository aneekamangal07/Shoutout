import React from "react";
import Topbar1 from "../../components/topbar/Topbar";
import "./login.css";
// import { Link } from "react-router-dom";
import bgmovote from "../../assets/bg2.png";

export default function Login() {
  return (
    <>
      <Topbar1 />
      <div className="login">
        <div className="BgImgWrapper">
          <img src={bgmovote} alt="bg" height="800vh" width="100%" />
        </div>
        <div className="contentWrapper">
          <span className="loginTitle">LOGIN</span>
          <form className="loginForm">
            <label>Username</label>
            <input type="text" placeholder="Username" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button className="loginButton" type="submit">
              Login
            </button>
          </form>
          <button className="loginRegisterButton">
            {/* <Link className="link" to="/register"> */}
            Register
            {/* </Link> */}
          </button>
        </div>
      </div>
    </>
  );
}
