import { Routes, Route } from "react-router-dom";
import MovieCard from "./components/movieCard/MovieCard";
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/home/Home";
// import MoviesList from "./Pages/moviesList/MoviesList";
import Single from "./Pages/single/Single";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Movies from "./components/movies/Movies";
import SingleMovie from "./components/singleMovie/SingleMovie";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const user = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Movies /> : <Register />} />
        <Route path="/login" element={user ? <Movies /> : <Login />} />
        {/* <Route path="/single" element={<Single/>}></Route> */}
      </Routes>
    </>
  );
}

export default App;
