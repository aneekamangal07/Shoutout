import React from "react";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import mebeforeyou from "../../assets/meBeforeYou.jpg";
import CardMedia from "@mui/material/CardMedia";
import clsx from "clsx";

var useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "cyan",
    marginRight: "5%",
  },
  root1: {
    backgroundColor: "cyan",
    marginRight: "5%",
  },
  media: {
    paddingTop: "70%",
  },
}));

export default function MovieCard(props) {
  const classes = useStyles();

  return (
    <>
      {/* <div>test</div> */}
      <Card className={classes.root1}>
        <CardMedia
          className={classes.media}
          image={mebeforeyou}
          title="me before you"
        />
      </Card>
    </>
  );
}
