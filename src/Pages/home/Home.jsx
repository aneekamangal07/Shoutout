import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import bgmovote from "../../assets/bg2.png"
function Home() {
  return (
    <>
    <Navbar/>
     <div className="home">
        <div className="homeBg">
          <div className="bgImgWrapper">
            <img src={bgmovote} alt="bg" height="800vh" width="100%" />
          </div>
          <div className="introBox">
            <div className="introBoxContent">
              <h1 className="introBoxHead">Rate the best!!</h1>
              <h2 className="introBoxSubHead">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                repellat corporis maxime quidem esse quos omnis aut quis. Et,
                provident!
              </h2>
              <h3 className="introBoxSubHead2">Rate movies by signing up!</h3>
              <a href="/register" className="introBtn">
                <span>Sign up!</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <polyline points="4 1 10 5 4 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Home;
