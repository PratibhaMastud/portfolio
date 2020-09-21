import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#444",
  },
  timeLine: {
    position: "relative",
    padding: "1 rem",
    margin: "0 auto",
    "& before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1 px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50%-1px)",
        right: "auto",
      },
    },
  },

  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3 rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5 rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <br />
        <Typography
          variant="h4"
          align="center"
          style={{
            color: "tomato",
            textAlign: "center",
            textTransform: "camelcase",
          }}
        >
          • Post-Graduation Diploma in Advanced Computing.
        </Typography>
        <Typography
          variant="h5"
          align="center"
          style={{
            color: "tan",
            textAlign: "center",
            textTransform: "lowercase",
          }}
        >
          CDAC- Kharghar (Mumbai Region)
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h5" className={classes.timeLineYear}>
            Aug-2019
          </Typography>
        </Box>

        <Typography
          variant="h4"
          align="center"
          style={{
            color: "tomato",
            textAlign: "center",
            textTransform: "camelcase",
          }}
        >
          • Bachelor of Electronics & Telecommunication Engineering
        </Typography>
        <Typography
          variant="h5"
          align="center"
          style={{
            color: "tan",
            textAlign: "center",
            textTransform: "lowercase",
          }}
        >
          A.C.Patil College of Engineering Kharghar (Mumbai University)
        </Typography>

        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2" className={classes.timeLineYear}>
            May 2018
          </Typography>
        </Box>
        <br />
        <br />
        <Typography
          variant="h4"
          align="center"
          style={{
            color: "tomato",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          TECHNICAL SKILLS:
        </Typography>
        <Typography
          variant="h5"
          align="center"
          style={{
            color: "tan",
            textAlign: "center",
            textTransform: "lowercase",
          }}
        >
          Languages : C++, Java
        </Typography>
        <Typography
          variant="h5"
          align="center"
          style={{
            color: "tan",
            textAlign: "center",
            textTransform: "lowercase",
          }}
        >
          Web Designing : HTML, CSS, JavaScript
        </Typography>
        <Typography
          variant="h5"
          align="center"
          style={{
            color: "tan",
            textAlign: "center",
            textTransform: "lowercase",
          }}
        >
          Framework : Hibernate , Reactjs
        </Typography>
        <Typography
          variant="h5"
          align="center"
          style={{
            color: "tan",
            textAlign: "center",
            textTransform: "lowercase",
          }}
        >
          Library : Reactjs IDE : Eclipse, VS code
        </Typography>
        <br />
        <br />
        <br />
      </Box>
    </>
  );
};

export default Resume;
