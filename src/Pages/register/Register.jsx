import React from "react";
import "../register/register.css";
import bgmovote from "../../assets/bg2.png";
import Topbar1 from "../../components/topbar/Topbar";

export default function Register() {
  return (
    <>
      <Topbar1 />
      <div className="register">
        <div className="bgImgWrapper">
          <img src={bgmovote} alt="bg" height="800vh" width="100%" />
        </div>
        <div className="contentWrapper">
          <span className="registerTitle">REGISTER</span>
          <form className="registerForm">
            <label>USERNAME</label>
            <input type="text" placeholder="Username" />
            <label>EMAIL</label>
            <input type="text" placeholder="Email" />
            <label>PASSWORD</label>
            <input type="password" placeholder="Password" />
            <button className="registerButton">Register</button>
          </form>
          <button className="registerLoginButton">Login</button>
        </div>
      </div>
    </>
  );
}
