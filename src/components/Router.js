import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SymptomsForm from "./SymptomsForm";
import SymptomsFormEdit from "./SymptomsFormEdit";
import Login from "./Login";
import Signup from "./Signup";



import SymptomsList from "./SymptomsList";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/symptoms" component={SymptomsList} />
      <Route exact path="/newsymptom" component={SymptomsForm} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/editsymptom/:id" component={SymptomsFormEdit} />
    </Switch>
  );
};

export default Router;
