import React from "react";
import "./movies.css";
import { Link } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import SingleMovie from "../singleMovie/SingleMovie";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import MovieDetails from "../movieDetails/MovieDetails";

export default function Movies() {
  const [tMovies, setTMovies] = useState([]);
  const [rMovies, setRMovies] = useState([]);
  const [aniMovies, setAniMovies] = useState([]);
  const [actMovies, setActMovies] = useState([]);
  const [currSelectedMovie, setCurrSelectedMovie] = useState({
    poster_path: null,
    overview: null,
    title: null,
    release_date: null,
  });

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const res1 = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c091163dd08a9adf7263bd0a129c45fc&language=en-US&page=1"
      );
      const res2 = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c091163dd08a9adf7263bd0a129c45fc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749"
      );
      const res3 = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c091163dd08a9adf7263bd0a129c45fc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16"
      );
      const res4 = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c091163dd08a9adf7263bd0a129c45fc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28"
      );
      console.log(res1);
      setTMovies(res1.data.results);
      setRMovies(res2.data.results);
      setAniMovies(res3.data.results);
      setActMovies(res4.data.results);
      // console.log(movies);
    };
    fetchMovies();
  }, []);

  function onMovieSelection(movieReq) {
    console.log("on Movie selection");
    setModalVisible(true);
    setCurrSelectedMovie(movieReq);
  }

  return (
    <>
      <div className="movies">
        {/* movie sliders by mapping through movie card */}
        <h1 className="listTitle">TRENDING</h1>
        <div className="trending genre">
          {tMovies.map((movieReq) => (
            <MovieCard
              clickAction={() => onMovieSelection(movieReq)}
              {...movieReq}
              key={movieReq.id}
            />
          ))}
        </div>
        <h1 className="listTitle">ROMANCE</h1>
        <div className="romance genre">
          {rMovies.map((movieReq) => (
            <MovieCard {...movieReq} key={movieReq.id} />
          ))}
        </div>
        <h1 className="listTitle">ANIMATION</h1>
        <div className="animation genre">
          {aniMovies.map((movieReq) => (
            <MovieCard {...movieReq} key={movieReq.id} />
          ))}
        </div>
        <h1 className="listTitle">ACTION</h1>
        <div className="action genre">
          {actMovies.map((movieReq) => (
            <MovieCard {...movieReq} key={movieReq.id} />
          ))}
        </div>
      </div>
      <MovieDetails {...currSelectedMovie}></MovieDetails>
    </>
  );
}
