import React from "react";
import { makeStyles } from "@material-ui/core/Styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.jpg";
import Typed from "react-typed";

//CSs Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Pratibha Mastud" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Pratibha Mastud"]} typeSpeed={40}></Typed>
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed strings={["I am frasher"]} typeSpeed={40} />
      </Typography>
    </Box>
  );
};

export default Header;
