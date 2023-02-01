import React from "react";
import "../../pages/moviesList/moviesList.css";
import temp from "../../assets/movie.jpg";
import bgmovote from "../../assets/bg2.png";

export default function MoviesList() {
  return (
    <div className="movies">
      <div className="wrapper">
        <div className="bgImgWrapper">
          <img src={bgmovote} alt="bg" height="800vh" width="100%" />
        </div>
        {/* trending */}
        <div className="trending ">
          <span className="title">TRENDING</span>
          <div className="movieContainersList">
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
          </div>
        </div>
        {/* Romance */}
        <div className="romance">
          <span className="title">ROMANCE</span>
          <div className="movieContainersList">
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
          </div>
        </div>
        {/* Action */}
        <div className="action">
          <span className="title">ACTION</span>
          <div className="movieContainersList">
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
          </div>
        </div>
        {/* Animation */}
        <div className="animation">
          <span className="title">ANIMATION</span>
          <div className="movieContainersList">
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
            <div className="container">
              <a href="/movies/movie:id">
                <img src={temp} alt="movieImage" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
