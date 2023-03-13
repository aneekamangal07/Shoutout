import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [tMovies, setTMovies] = useState([]);
  const [rMovies, setRMovies] = useState([]);
  const [aniMovies, setAniMovies] = useState([]);
  const [actMovies, setActMovies] = useState([]);
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
};

export default useFetch;
