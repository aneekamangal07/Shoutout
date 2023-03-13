import React from "react";
import mebeforeyou from "../../assets/meBeforeYou.jpg";
import "../singleMovie/singleMovie.css";
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
import { useState, useEffect } from "react";
import axios from "axios";
import { calcLength } from "framer-motion";

export default function SingleMovie({
  title,
  poster_path,
  release_date,
  overview,
}) {
  const API_IMG = "https://image.tmdb.org/t/p/original/";
  console.log(title);
  return (
    <div>ghyuj</div>
  );
}
