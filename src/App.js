import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./component/index.js";
import Resume from "./component/Resume";
import Contacts from "./component/Contacts";
import Portfolio from "./component/Portfolio";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/portfolio" component={Portfolio} />
  
    </>
  );
}

export default App;
