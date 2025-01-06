import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Aboutme from "./Aboutme";
import Resume from "./Resume";
import Contact from "./Contact";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/Resume" component={Resume} />
      <Route path="/Aboutme" component={Aboutme} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  );
};

export default Main;
