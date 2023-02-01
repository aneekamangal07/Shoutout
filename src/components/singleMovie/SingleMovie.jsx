import React from "react";
import mebeforeyou from "../../assets/meBeforeYou.jpg";
import "../singleMovie/singleMovie.css";

export default function SingleMovie() {
  return (
    <div className="singleMovie">
      <div className="singleMovieImgWrapper">
        <img src={mebeforeyou} alt="" className="singleMovieImg" />
      </div>
      <div className="singleMovieContentWrapper">
        <div className="buttons">
          <button className="trailerbtn btn">Watch Trailer</button>
          <button className="nominatebtn btn">Nominate</button>
        </div>
        <div className="content">
          <h1 className="singleMovieTitle">Me Before You</h1>
          <p className="singleMovieDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis velit dolore, fugiat aut omnis reiciendis quisquam est
            a? Facere, tempora nobis. Consequuntur odit expedita dignissimos
            officia libero nemo unde possimus.
          </p>
        </div>
        <div className="singleMovieInfo">
          <h1>Rated for: 14yrs+</h1>
          <h1>Release Date: 12/01/2001</h1>
          <h1>IMDB: 8.1</h1>
        </div>
      </div>
    </div>
  );
}
