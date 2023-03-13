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

export default function MovieDetails({
  title,
  poster_path,
  release_date,
  overview,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <Modal onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={API_IMG + poster_path} />
        <h3>{title}</h3>
        <h4>{release_date}</h4>
        <p>{overview}</p>
      </Modal.Body>
    </Modal>
  );
}
