import React from "react";
import bgmovote from "../../assets/bg2.png";
// import Movies from "../../components/movies/Movies";
import { useState, useEffect } from "react";
import "./moviesList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export default function MoviesList() {
  // const originalImage = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  return (
    <div></div>
    // <div className="movies">
    //   {/* movie html and css (dependency - movie object) */}
    //   <div className="singleMovieCard">
    //     <Card
    //     width="100%"
    //     height="60vh"
    //     direction={{ base: "column", sm: "row" }}
    //     overflow="hidden"
    //     >
    //       <Image
    //         objectFit="cover"
    //         maxW={{ base: "100%", sm: "500px" }}
    //         src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
    //         alt=""
    //       />
    //       <Stack>
    //         <CardBody width="400px">
    //           <Heading size="lg" textAlign="center">
    //             Movie title
    //           </Heading>
    //           <Text py="2">*Release Date*</Text>
    //           <Text py="2">
    //             StoryLine: Lorem ipsum dolor, sit amet consectetur adipisicing
    //             elit. Aliquid ab voluptate reprehenderit, eaque fugiat et omnis
    //             nam repudiandae officia animi harum nemo ipsam explicabo sunt
    //             accusantium, quod perferendis magnam itaque consectetur sint
    //             impedit veritatis dolore? Atque cupiditate eos quae ad magnam
    //             fugiat eius incidunt? Iste modi quod quisquam obcaecati ad!
    //           </Text>
    //         </CardBody>
    //         <CardFooter>
    //           <Button variant="solid" colorScheme="blue" m="20px">
    //             Watch Trailer
    //           </Button>
    //           <Button variant="solid" colorScheme="blue" m="20px">
    //             Nominate
    //           </Button>
    //         </CardFooter>
    //       </Stack>
    //     </Card>
    //   </div>

    //   <div className="wrapper">
    //     {/* trending */}
    //     <div className="trending genre">
    //       <span className="title">TRENDING</span>
    //       <div className="movieContainersList">
    //         <Movies movies={tMovies} />
    //       </div>
    //     </div>

    //     {/* Romance */}
    //     <div className="romance genre">
    //       <span className="title">ROMANCE</span>
    //       <div className="movieContainersList">
    //         <Movies movies={rMovies} />
    //       </div>
    //     </div>
    //     {/* Action */}
    //     <div className="action genre">
    //       <span className="title">ACTION</span>
    //       <div className="movieContainersList">
    //         <Movies movies={aniMovies} />
    //       </div>
    //     </div>
    //     {/* Animation */}
    //     <div className="animation genre">
    //       <span className="title">ANIMATION</span>
    //       <div className="movieContainersList">
    //         <Movies movies={actMovies} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
