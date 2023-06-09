import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Modal, show } from "react-bootstrap";
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
import mebeforeyou from "../../assets/meBeforeYou.jpg";
import SingleMovie from "../singleMovie/SingleMovie";
const API_IMG = "https://image.tmdb.org/t/p/original/";

export default function MovieCard({
  title,
  poster_path,
  release_date,
  overview,
  clickAction,  
}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const modalRef = useRef();

  return (
    <a href="" onClick={clickAction}>
      <Card width="210px" background="none">
        <CardBody>
          <Image
            objectFit="cover"
            src={API_IMG + poster_path}
            alt="movieImg"
            borderRadius="lg"
          />
        </CardBody>
      </Card>
    </a>
  );
}
